import React, { useContext } from "react";
import { ThemeContext } from "./app";
import "../styles/why.css";
const Why = () => {
  const dark = useContext(ThemeContext);
  const light = !dark ? "light" : "";
  return (
    <section
      style={{
        // margin: "1rem 0",
        margin: "13rem 0 0",
        height: "100%",
      }}
    >
      <section class="header-section">
        <section className={`Title ${light}`}>WHY JARVIS?</section>
      </section>

      <ul class="tilesWrap">
        <li>
          <h2>01</h2>
          <p>Great user interface</p>
        </li>
        <li>
          <h2>02</h2>
          <p>Supremely fast calculations</p>
        </li>
        <li>
          <h2>03</h2>
          <p>Winner of the Avengers Bot of the Year 2030</p>
        </li>
        <li>
          <h2>04</h2>
          <p>Top-grade data encryption</p>
        </li>
        <li>
          <h2>05</h2>
          <p>Used by Stark Industries™</p>
        </li>
        <li>
          <h2>06</h2>
          <p>Exceptional web-scraping</p>
        </li>
        <li>
          <h2>07</h2>
          <p>Effortless intergrations with gadgets</p>
        </li>
      </ul>
      <section class="disclaimer">
        <span id="disc-head">DISCLAIMER!</span>
        <br />
        <span id="disc-text">
          Due to reprogramming issues your J.A.R.V.I.S. may be overly sarcastic.
          <br />
          We will not take blame of any misunderstandings between you and your
          bot.
        </span>
      </section>
    </section>
  );
};

export default Why;
