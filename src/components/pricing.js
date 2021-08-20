import React, { useContext } from "react";
import { ThemeContext } from "./app";
import Card from "./card";

const Pricing = () => {
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
      <h1 className={`Title ${light}`}> OUR PRICING</h1>
      <section
        className="cards"
        style={{
          margin: "4rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Card featured={false} num={1} name={"BASIC PLAN"} />
        <Card featured={true} num={2} name={"PREMIUM PLAN"} />
        <Card featured={false} num={3} name={"PLUS PLAN"} />
      </section>
    </section>
  );
};

export default Pricing;
