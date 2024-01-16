import React from "react";
import portfolioImage from "../assets/image/pp.png";
import cv from "../assets/cv/resume.pdf";
import fb from "../assets/social_media/fb.png";
import ig from "../assets/social_media/ig.png";
import gh from "../assets/social_media/gh.png";
import li from "../assets/social_media/li.png";
import tw from "../assets/social_media/tw.png";
import mail from "../assets/social_media/mail.png";

function about() {
  return (
    <section class="pt-4">
      <div class="container">
        <div class="row">
          <div
            className="col-md-12 text-center"
            style={{ paddingTop: "8.5rem" }}
          >
            <div>
              <span className="greeting">Hello, </span>
              <span className="greeting" style={{ color: "#9B4819" }}>
                I am Samundra Karki
              </span>
            </div>
            <div>
              <span className="greeting-designation">
                Graduate Student || Co-Founder at {"Mokshya.io"}
              </span>
            </div>

            <div className="d-flex justify-content-center pt-4">
              <a
                href="mailto:samundrakarki56@@gmail.com"
                target="_blank"
                className="mr3 socialMediaLink"
              >
                <img src={mail} className="social-media"></img>
              </a>
              <a
                href="https://github.com/newton-raphson"
                target="_blank"
                className="mr3 socialMediaLink"
              >

                <img src={gh} className="social-media"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/samundra-karki-1aa8ab176/"
                target="_blank"
                className="mr3 socialMediaLink"
              >
                <img src={li} className="social-media"></img>
              </a>
              <a
                href="https://twitter.com/0xSamstine"
                target="_blank"
                className="mr3 socialMediaLink"
              >
                <img src={tw} className="social-media"></img>
              </a>
            </div>

            <div className="pt-4">
              <a
                href={cv}
                target="_blank"
                className="btn btn-outline-dark btn-rounded button"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="container aboutme">
        <div className="row">
          <div className="col-md-12 text-center pb-4">
            <h1 className="greeting" style={{ color: "#9B4819" }}>
              About Me
            </h1>
          </div>
          <div className="col-md-9">
            <p class="text-justify">
              I am a research graduate student at Iowa State University with focus in 
              Geometric Deep Learning with focus in compact representation of 3D geometries for 
              computational analysis.
            </p>
            <p>
              Before joining Iowa State University, I worked as a Co-founder and Computational Analytics and 
              Smart Contract Engineer for open source contributing startup <a href="https://mokshya.io" target="_blank">Mokshya</a> . I have also worked as a Computational Analytics 
              and Smart Contract Engineer for a startup called <a href="https://zebec.io" target="_blank">Zebec</a> utilizing my data analytics, machine learning and blockchain skills.
            </p>
            <p>
              I have got an enormous opportunity to experience to emerging technology of Blockchain and AI, in the technical frontier itself.
              The hard earned experience has been a great asset for me to understand both the technology and its potential to change the world. Similarly, Enough patience and
              perseverance to learn and implement the technology that are very new.
            </p>
          </div>

          <div className="col-md-3">
            <div className="circular-image-container">
              <img
                src={portfolioImage}
                alt="Portfolio image"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
        
        {/* Skills */}
    </section>
    
  );
}

export default about;
