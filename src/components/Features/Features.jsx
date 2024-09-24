import React from "react";
import img1 from "../../assets/images/features/1.svg";
import img2 from "../../assets/images/features/2.svg";
import img3 from "../../assets/images/features/3.svg";
import img4 from "../../assets/images/features/4.svg";
import img5 from "../../assets/images/features/5.svg";
import img6 from "../../assets/images/features/6.svg";

const Features = () => {
  return (
    <div>
      <div className="text-center space-y-5">
        <h5 className="text-xl font-bold text-[#ff3811]">Core Features</h5>
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 my-12">
        <div className="border border-[#E8E8E8] text-center p-8 flex flex-col rounded-xl">
          <img src={img1} alt="" className="h-14 mb-5" />
          <h5 className="text-lg font-bold text-[#444444]">Expert Team</h5>
        </div>
        <div className="border border-[#E8E8E8] text-center p-8 flex flex-col rounded-xl bg-[#FF3811]">
          <img src={img2} alt="" className="h-14 mb-5" />
          <h5 className="text-lg font-bold text-white">Timely Delivery</h5>
        </div>
        <div className="border border-[#E8E8E8] text-center p-8 flex flex-col rounded-xl">
          <img src={img3} alt="" className="h-14 mb-5" />
          <h5 className="text-lg font-bold text-[#444444]">24/7 Support</h5>
        </div>
        <div className="border border-[#E8E8E8] text-center p-8 flex flex-col rounded-xl">
          <img src={img4} alt="" className="h-14 mb-5" />
          <h5 className="text-lg font-bold text-[#444444]">Best Equipment</h5>
        </div>
        <div className="border border-[#E8E8E8] text-center p-8 flex flex-col rounded-xl">
          <img src={img5} alt="" className="h-14 mb-5" />
          <h5 className="text-lg font-bold text-[#444444]">100% Guarantee</h5>
        </div>
        <div className="border border-[#E8E8E8] text-center p-8 flex flex-col rounded-xl">
          <img src={img6} alt="" className="h-14 mb-5" />
          <h5 className="text-lg font-bold text-[#444444]">Timely Delivery</h5>
        </div>
      </div>
    </div>
  );
};

export default Features;
