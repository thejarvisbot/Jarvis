import { auto } from "async";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo-Jarvis.png";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header
      style={{
        background: "rgba(196, 196, 196, 0.34)",
        width: "100%",
        height: "10rem",
        position: "fixed",
        left: "0",
        top: "0",
        zIndex: "1",
      }}
    >
      <section
        style={{
          margin: "0 66px",
          display: "grid",
          gridTemplateColumns: "repeat(12,1fr)",
          columnGap: "35px",
          height: "100%",
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{
              gridColumnStart: "1",
              gridColumnEnd: "3",
              height: "10rem",
            }}
          />
        </Link>
        {/* <section
          className="navbar"
          style={{
            gridColumnStart: "5",
            gridColumnEnd: "13",
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            alignItems: "center",
          }}
        > */}
        <li
          className={styles.li}
          style={{
            gridColumn: "5/7",
          }}
        >
          <Link to="/features">Features</Link>
        </li>
        <li
          className={styles.li}
          style={{
            gridColumn: "7/9",
          }}
        >
          <Link to="/pricing">Pricing</Link>
        </li>
        <li
          className={styles.li}
          style={{
            gridColumn: "9/11",
          }}
        >
          <Link to="/why-jarvis">Why Jarvis</Link>
        </li>
        <li
          className={styles.li}
          style={{
            gridColumn: "11/13",
          }}
        >
          <Link to="/gallery">Video Gallery</Link>
        </li>
      </section>
      {/* </section> */}
    </header>
  );
};

export default Header;
