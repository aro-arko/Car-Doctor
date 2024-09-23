import React from "react";
import person from "../../assets/images/about_us/person.png";
import parts from "../../assets/images/about_us/parts.png";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-2/4 top-1/2 right-5 absolute rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h4 className="text-xl font-bold text-[#ff3811]">About Us</h4>
          <h1 className="text-5xl font-bold">
            We are qualified <br />& of experience <br />
            in this field
          </h1>
          <p className="py-1">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-1">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#ff3811] text-lg text-white hover:text-black font-semibold">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
