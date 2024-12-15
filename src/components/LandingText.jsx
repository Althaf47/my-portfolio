import react from "react";
function LandingText() {
  return (
    <>
      <div className="d-flex flex-column g-60">
        <div>
          <span className="font-size24">Hi I'm</span>
          <br />
          <span className="font-size56 boldFont">
            <span className="highlighted-text">Althaf</span> Shaik
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
