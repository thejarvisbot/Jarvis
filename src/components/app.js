import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import Header from "./header";
import Home from "./home";
import "../styles/global.css";
import Pricing from "./pricing";
import Features from "./features";
import Gallery from "./gallery";
import Why from "./why";

export const ThemeContext = React.createContext();

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(() => {
    document.body.classList.toggle("light", !darkTheme);
  }, [darkTheme]);
  // console.log(darkTheme);
  const light = !darkTheme ? "light" : "";
  return (
    <ThemeContext.Provider value={darkTheme}>
      <section className="theme">
        Toggle Theme
        <br />
        <br />
        <input
          type="checkbox"
          class="checkbox"
          id="checkbox"
          onChange={(e) => setDarkTheme(!darkTheme)}
          value={darkTheme}
        />
        <label for="checkbox" class="label">
          <FaMoon style={{ color: "grey" }} />
          <FaSun style={{ color: "yellow" }} />
          <div class="ball"></div>
        </label>
      </section>
      <Router>
        <Header />
        <section className="overlay">
          <section className={`overlay-image ${light}`}></section>
        </section>
        <Switch>
          <Route path="/pricing" component={Pricing} />
          <Route path="/features" exact component={Features} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/why-jarvis" exact component={Why} />
          <section
            style={{
              margin: "10rem 66px 0",
              display: "grid",
              gridTemplateColumns: "repeat(12,1fr)",
              columnGap: "35px",
              height: "100%",
            }}
          >
            <Route path="/" exact component={Home} />
          </section>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
