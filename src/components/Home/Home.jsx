import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <div className="mt-10 space-y-10">
        <Banner></Banner>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
