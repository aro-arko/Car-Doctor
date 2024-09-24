import React from "react";
import person from "../../assets/images/about_us/person.png";
import parts from "../../assets/images/about_us/parts.png";

const About = () => {
  return (
    <div className="hero px-4 lg:px-0">
      <div className="hero-content flex-col lg:flex-row">
        {/* Left image section */}
        <div className="w-full lg:w-1/2 relative mb-10 lg:mb-0">
          <img
            src={person}
            className="w-3/4 rounded-lg shadow-2xl mx-auto lg:mx-0"
            alt="Person"
          />
          <img
            src={parts}
            className="w-2/4 absolute top-1/2 right-5 rounded-lg shadow-2xl hidden lg:block"
            alt="Parts"
          />
        </div>

        {/* Right text section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h4 className="text-xl font-bold text-[#ff3811]">About Us</h4>
          <h1 className="text-3xl lg:text-5xl font-bold">
            We are qualified <br />& of experience <br />
            in this field
          </h1>
          <p className="py-1 text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-1 text-base">
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
