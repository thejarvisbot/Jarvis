import React, { useContext } from "react";
import { ThemeContext } from "./app";
import Card from "./card";

const Pricing = () => {
  const dark = useContext(ThemeContext);
  const light = !dark ? "light" : "";
  const data = [
    [
      "- basic jarvis bot with voice features",
      "- web scraping",
      "- home appliance compatibility",
      "- human facial recognition",
      "- automate tasks",
      "- average human interaction system",
    ],
    [
      "- All in plan #1",
      "- Holographic interactive representations",
      "- high level versatile machine compatibility",
      "- alien facial recognition",
      "- Cloud computing",
    ],
    [
      "- All in plan #2",
      "- Quantum computing",
      "- Inter-planetary communication",
      "- Mediocre mindstone",
      "- Sarcasm and Shakespearean human interaction",
    ],
  ];
  return (
    <section
      style={{
        // margin: "1rem 0",
        margin: "13rem 0 0",
        height: "100%",
      }}
    >
      <h1 className={`Title ${light}`}> OUR PRICING</h1>
      <section
        className="cards"
        style={{
          margin: "4rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Card featured={false} num={1} name={"BASIC PLAN"} data={data[0]} />
        <Card featured={true} num={2} name={"PREMIUM PLAN"} data={data[1]} />
        <Card featured={false} num={3} name={"PLUS PLAN"} data={data[2]} />
      </section>
    </section>
  );
};

export default Pricing;
