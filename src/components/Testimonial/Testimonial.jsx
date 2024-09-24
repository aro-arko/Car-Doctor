import React from "react";
import img1 from "../../assets/images/testimonial/1.png";
import img2 from "../../assets/images/testimonial/2.png";
import quote from "../../assets/icons/quote.svg";
import reviews from "../../assets/images/testimonial/Group 46.png";

const Testimonial = () => {
  return (
    <div className="pb-20 px-4 md:px-10">
      <div className="text-center space-y-4">
        <h4 className="text-xl font-bold text-[#ff3811]">Testimonial</h4>
        <h2 className="text-3xl font-bold">What Customer Says</h2>
        <p className="text-base">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br className="hidden md:block" />
          words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10">
        <div className="border border-[#F3F3F3] rounded-xl p-6 md:p-12 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex w-2/3">
              <img className="h-14 w-14 object-cover" src={img2} alt="" />
              <div className="ml-5">
                <h4 className="font-bold text-lg md:text-2xl text-[#444444]">
                  Awlad Hossain
                </h4>
                <p className="text-[#737373] text-sm md:text-xl font-semibold">
                  Businessman
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <img className="h-10 md:h-14 opacity-20" src={quote} alt="" />
            </div>
          </div>
          <p className="text-sm md:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <img className="" src={reviews} alt="" />
        </div>
        <div className="border border-[#F3F3F3] rounded-xl p-6 md:p-12 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex w-2/3">
              <img className="h-14 w-14 object-cover" src={img1} alt="" />
              <div className="ml-5">
                <h4 className="font-bold text-lg md:text-2xl text-[#444444]">
                  Aro Arko
                </h4>
                <p className="text-[#737373] text-sm md:text-xl font-semibold">
                  Businessman
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <img className="h-10 md:h-14 opacity-20" src={quote} alt="" />
            </div>
          </div>
          <p className="text-sm md:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <img className="" src={reviews} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
