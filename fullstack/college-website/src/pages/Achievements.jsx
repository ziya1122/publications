// src/pages/AchievementsPage.jsx
import React from "react";
import "./Achievements.css";

const AchievementsPage = () => {
  return (
    <div className="achievements-container">
      <header className="achievements-header">
        <h1>🏆 Achievements</h1>
        <p>Celebrating excellence in placements and institutional recognition</p>
      </header>

      {/* Placement Statistics */}
      <section className="achievement-section">
        <h2>📊 Placement Statistics (2020 - 2024)</h2>
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>AY</th>
                <th>2020</th>
                <th>2021</th>
                <th>2022</th>
                <th>2023</th>
                <th>2024*</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Class Strength</td><td>265</td><td>286</td><td>272</td><td>331</td><td>344</td></tr>
              <tr><td>Placement Opted</td><td>235</td><td>254</td><td>204</td><td>276</td><td>229</td></tr>
              <tr><td>Higher Studies</td><td>18</td><td>22</td><td>66</td><td>66</td><td>115</td></tr>
              <tr><td>Placed</td><td>112</td><td>160</td><td>159</td><td>186</td><td>68</td></tr>
              <tr><td>Total</td><td>130</td><td>182</td><td>225</td><td>252</td><td>183</td></tr>
              <tr><td>Placement %</td><td>50%</td><td>64%</td><td>83%</td><td>77%</td><td>54%</td></tr>
              <tr><td>Avg. CTC (LPA)</td><td>5.5</td><td>5.25</td><td>5.6</td><td>7.0</td><td>-</td></tr>
            </tbody>
          </table>
          <p className="footnote">*Data for 2024 is ongoing.</p>
        </div>
      </section>

      {/* NAAC Certificate Info */}
      <section className="achievement-section">
        <h2>📜 NAAC Accreditation</h2>
        <div className="naac-card">
          <div className="naac-header">
            <h3>🏛 Government College of Technology, Coimbatore</h3>
            <span className="badge">A+ Grade</span>
          </div>
          <ul>
            <li><strong>Accrediting Body:</strong> National Assessment and Accreditation Council (NAAC)</li>
            <li><strong>CGPA:</strong> 3.36 / 4.00</li>
            <li><strong>Cycle:</strong> 3rd Cycle</li>
            <li><strong>Accredited On:</strong> 23rd March 2023</li>
            <li><strong>Valid Till:</strong> 22nd March 2028</li>
          </ul>
          <p className="note">🏅 Recognized for excellence in education, infrastructure, and student development.</p>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
