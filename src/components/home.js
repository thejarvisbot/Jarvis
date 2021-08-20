import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./app";
import styles from "../styles/Home.module.css";

const Home = () => {
  const dark = useContext(ThemeContext);
  const light = !dark ? "light" : "";
  return (
    <>
      <section style={{ margin: "1rem 0", gridColumn: "1/span 12" }}>
        <section className={styles.heading}>
          <h1 className={`Title ${light}`}> J.A.R.V.I.S</h1>
          <p class={`${styles.subHeading} ${styles[light]}`}>
            Just A Rather Very Intelligent System
          </p>
        </section>
        <p className={`para ${light}`}>
          Just A Rather Very Intelligent System (J.A.R.V.I.S.) was originally
          Tony Stark's natural-language user interface computer system, named
          after Edwin Jarvis, the butler who worked for Howard Stark. Over time,
          he was upgraded into an artificially intelligent system, tasked with
          running business for Stark Industries as well as security for Tony
          Stark's Mansion and Stark Tower. After creating the Mark II armor,
          Stark uploaded J.A.R.V.I.S. into all of the Iron Man Armors, as well
          as allowing him to interact with the other Avengers, giving them
          valuable information during combat.
        </p>
      </section>
      <button className={`cta btn ${light}`}>Pre-Book Now</button>
      <Link to="/pricing" className={`btn ${light}`}>
        Go to Pricing
      </Link>
    </>
  );
};

export default Home;
