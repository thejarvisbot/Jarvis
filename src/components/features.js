import React, { useContext } from "react";
import { ThemeContext } from "./app";
import styles from "../styles/Feature.module.css";

const Features = () => {
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
      <section class={`Title ${light}`}>FEATURES</section>
      <section class={styles["feature-grid"]}>
        <section class={styles["cards"]}>
          <section
            class={`${styles["card"]} ${styles["card-1"]} ${styles[light]}`}
          >
            <h2 class={styles["card__title"]}>
              Sophisticated AI with top-notch human interaction capabilities.
            </h2>
          </section>

          <section
            class={`${styles["card"]} ${styles["card-2"]} ${styles[light]}`}
          >
            <h2 class={styles["card__title"]}>
              Deep scientific knowledge and research abilities
            </h2>
          </section>

          <section
            class={`${styles["card"]} ${styles["card-4"]} ${styles[light]}`}
          >
            <h2 class={styles["card__title"]}>
              Remote appliance and environment control capacity
            </h2>
          </section>

          <section
            class={`${styles["card"]} ${styles["card-4"]} ${styles[light]}`}
          >
            <h2 class={styles["card__title"]}>
              Can govern computational requirements and life support interface
            </h2>
          </section>

          <section
            class={`${styles["card"]} ${styles["card-5"]} ${styles[light]}`}
          >
            <h2 class={styles["card__title"]}>
              Emergency internet escape and memory dissolve capability
            </h2>
          </section>

          <section
            class={`${styles["card"]} ${styles["card-3"]} ${styles[light]}`}
          >
            <h2 class={styles["card__title"]}>
              Converts into a <i>"Vision"</i> using an <i>"Ultron"</i> and a
              <i>mind stone</i>
            </h2>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Features;
