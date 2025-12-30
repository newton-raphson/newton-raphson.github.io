import React, { useState } from "react";

const QuickChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState("");
  const [result, setResult] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = (selection) => {
    if (isFlipping) {
      return;
    }
    setChoice(selection);
    setResult(null);
    setIsFlipping(true);
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
      const win = outcome === selection;
      setResult({ outcome, win });
      setIsFlipping(false);
    }, 800);
  };

  return (
    <div className="quick-chat">
      <button
        type="button"
        className="quick-chat-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="quick-chat-panel"
      >
        {isOpen ? "Close" : "Quick Play"}
      </button>
      {isOpen ? (
        <div className="quick-chat-panel" id="quick-chat-panel">
          <div className="quick-chat-header">
            <div>
              <div className="quick-chat-title">Heads or Tails</div>
              <div className="quick-chat-subtitle">Pick one and flip the coin.</div>
            </div>
            <button
              type="button"
              className="quick-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close game panel"
            >
              ×
            </button>
          </div>
          <div className="quick-chat-body">
            <div className="quick-chat-messages">
              <div className="quick-chat-bubble">
                {choice ? `You picked ${choice}.` : "Choose heads or tails to play."}
              </div>
              {result ? (
                <div className="quick-chat-bubble user">
                  {result.outcome} — {result.win ? "You win!" : "Not this time."}
                </div>
              ) : null}
            </div>
            <div className="coin-actions">
              <button
                type="button"
                className="quick-chat-send"
                onClick={() => flipCoin("Heads")}
                disabled={isFlipping}
              >
                Heads
              </button>
              <button
                type="button"
                className="quick-chat-send"
                onClick={() => flipCoin("Tails")}
                disabled={isFlipping}
              >
                Tails
              </button>
            </div>
            <p className="quick-chat-note">
              {isFlipping ? "Flipping the coin..." : "Try your luck!"}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default QuickChat;
