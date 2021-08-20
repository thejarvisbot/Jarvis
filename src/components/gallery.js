import React, { useContext } from "react";
import { ThemeContext } from "./app";
import Clip1 from "../videos/clip1.mp4";
import Clip2 from "../videos/clip2.mp4";
import Clip3 from "../videos/clip3.mp4";
import Clip4 from "../videos/clip4.mp4";
import Clip5 from "../videos/clip5.mp4";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
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
      <section class={`Title ${light}`}>GALLERY</section>
      <section class={`${styles.gallery} ${styles[light]}`}>
        <section class="gallery-row">
          <figure class="gallery-thumb">
            <video
              autoplay="true"
              muted="true"
              loop="true"
              class={styles[light]}
            >
              <source src={Clip1} class="gallery-image" />
            </video>
          </figure>

          <figure class="gallery-thumb">
            <video
              autoplay="true"
              muted="true"
              loop="true"
              class={styles[light]}
            >
              <source src={Clip2} class="gallery-image" />
            </video>
          </figure>

          <figure class="gallery-thumb">
            <video
              autoplay="true"
              muted="true"
              loop="true"
              class={styles[light]}
            >
              <source src={Clip3} class="gallery-image" />
            </video>
          </figure>
        </section>

        <section class="gallery-row">
          <figure class="gallery-thumb">
            <video
              autoplay="true"
              muted="true"
              loop="true"
              class={styles[light]}
            >
              <source src={Clip5} class="gallery-image" />
            </video>
          </figure>

          <figure class="gallery-thumb">
            <video
              autoplay="true"
              muted="true"
              loop="true"
              class={styles[light]}
            >
              <source src={Clip1} class="gallery-image" />
            </video>
          </figure>

          <figure class="gallery-thumb">
            <video
              autoplay="true"
              muted="true"
              loop="true"
              class={styles[light]}
            >
              <source src={Clip4} class="gallery-image" />
            </video>
          </figure>
        </section>
      </section>
    </section>
  );
};

export default Gallery;
