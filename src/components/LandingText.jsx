import react from "react";
import React, { useState, useEffect } from "react";
function LandingText() {
  const WordLoader = ({ word = "", speed = 200 }) => {
    const [displayedText, setDisplayedText] = useState(""); // Tracks the current text
  
    useEffect(() => {
      if (!word || typeof word !== "string") {
        console.error("Invalid word input");
        return;
      }
  
      let index = 0; // Start at the first character
  
      const interval = setInterval(() => {
        // Add one letter at a time
        setDisplayedText((prev) => prev + word.charAt(index));
        index++;
  
        // Stop once all letters are displayed
        if (index >= word.length) {
          clearInterval(interval);
        }
      }, speed);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, [word, speed]);
  
    return <span>{displayedText}</span>;
  };
  return (
    <>
      <div className="d-flex flex-column g-60">
        <div>
          <span className="font-size24">Hi I'm</span>
          <br />
          <span className="font-size56 boldFont">
            <span className="highlighted-text">
              <WordLoader word="Allthaf" speed={100}/>
              </span> Shaik
          </span>
          <br />
          <span className="font-size18">
            UI Developer @{" "}
            <span className="highlighted-text type-animation">
            Samsung
            </span>
          </span>
        </div>
        <div className="d-flex g-10">
          <button className="btn-primary">View Portfolio</button>
          <button className="btn-secondary">Download Resume</button>
        </div>
      </div>
    </>
  );
}
export default LandingText;
