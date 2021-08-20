import React from "react";
import "../styles/Card.css";

const Card = ({ featured, num, name, data }) => {
  const renderedData = data.map((e) => {
    return (
      <li>
        <h3
          style={{ fontFamily: "`Open Sans`, sans-serif", fontSsize: "1.7rem" }}
        >
          {e}
        </h3>
      </li>
    );
  });
  return (
    <section
      className={`box featured--${featured ? "yes" : "no"}`}
      id={`card--${num}`}
    >
      <section class="box__side front">
        <section class={`box__image image--${num}`}>&nbsp;</section>
        <h3 class="box__heading">{name}</h3>
      </section>
      <section class={`box__side back back--${num}`}>
        <ul>{renderedData}</ul>
        <br />
      </section>
    </section>
  );
};

export default Card;
