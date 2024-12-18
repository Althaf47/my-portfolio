import React, { useState } from "react";

const ExpierienceBlock = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="container mt-5 z-1 position-relative">
      <div className="row">
        {/* Tabs Navigation */}
        <div className="col-3">
          <ul className="nav nav-pills flex-column exp-ul">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                onClick={() => setActiveTab("home")}
              >
                Samsung [Internship]
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => setActiveTab("profile")}
              >
                Samsung [FTE]
              </button>
            </li>
          </ul>
        </div>

        {/* Tab Content */}
        <div className="col-9">
          <div className="tab-content">
            {activeTab === "home" && (
              <div className="tab-pane fade show active">
                <h4>Samsung [Internship]</h4>
                <p>Completed 6 month Internhsip in Samsung as a UI Developer Intern.  <span>06-02-2023 - 01-08-2023</span>
                  <ul className="skill-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JS</li>
                    <li>JQuery</li>
                    <li>Web Design</li>
                  </ul>
                </p>
              </div>
            )}
            {activeTab === "profile" && (
              <div className="tab-pane fade show active">
                <h4>Samsung [FTE]</h4>
                <p>Ongoing Full Time Employement 01-08-2023 - Present
                <ul className="skill-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JS</li>
                    <li>JQuery</li>
                    <li>React JS</li>
                    <li>Web Design</li>
                  </ul>
                </p>
              </div>
            )}
            {activeTab === "settings" && (
              <div className="tab-pane fade show active">
                <h4>Settings Tab</h4>
                <p>Here you can adjust your settings.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpierienceBlock;
