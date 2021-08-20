import React from "react";
import "../styles/Card.css";

const Card = ({ featured, num, name }) => {
  return (
    <section
      className={`box featured--${featured ? "yes" : "no"}`}
      id={`card--${num}`}
    >
      <section class="box__side front">
        <section class={`box__image image--${num}`}>&nbsp;</section>
        <h3 class="box__heading">{name}</h3>
      </section>
      <section class={`box__side back back--${num}`}></section>
    </section>
  );
};

export default Card;
