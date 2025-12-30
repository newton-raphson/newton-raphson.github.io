const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json({ limit: "1mb" }));
app.use(cors({ origin: "http://localhost:3000" }));

const resumePath = path.join(__dirname, "resume_context.txt");
const resumeContext = fs.existsSync(resumePath)
  ? fs.readFileSync(resumePath, "utf8")
  : "";

app.post("/api/chat", async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not set." });
  }

  const message = req.body?.message;
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "message is required." });
  }

  const prompt =
    "You are a resume assistant. Answer only using the resume context below.\n" +
    "If the answer is not in the resume, say you do not have that information.\n\n" +
    `Resume Context:\n${resumeContext}\n\n` +
    `Question: ${message}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(500).json({ error: errorText });
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not generate a response.";

    return res.json({ reply });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Gemini proxy listening on ${port}`);
});
