import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <div className="mt-10 space-y-24">
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Team></Team>
        <Features></Features>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
