import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const TeamMember = ({ member }) => {
  console.log(member);
  const { name, image, profession } = member;
  return (
    <div className="card bg-base-100 w-full border border-[#E8E8E8]">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center space-y-2">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <h5 className="text-xl font-semibold text-[#737373]">{profession}</h5>
        <div className="flex items-center">
          <FaFacebook className="h-10 w-10 mr-3 text-[#395185]" />
          <AiFillTwitterCircle className="h-10 w-10 mr-3 text-[#55ACEE]" />
          <FaLinkedin className="h-10 w-10 mr-3 text-[#0A66C2]" />
          <FaInstagramSquare className="h-10 w-10 text-[#D8447A]" />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
