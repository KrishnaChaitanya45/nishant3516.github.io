import React from "react";
import Sidetabs from "../../global/Sidetabs";
import Home from "./components/Home";
import Hero from "../../global/Hero";

const Homepage = () => {
  return (
    <div>
      <Hero />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          // alignItems: "center",
          width: "100%",

          gap: "5%",
        }}
      >
        <div
          style={{
            width: "20%",
            marginTop: "5%",
            marginLeft: "5%",
          }}
        >
          <Sidetabs />
        </div>
        <div
          style={{
            width: "60%",
          }}
        >
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
