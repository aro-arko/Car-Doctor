import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  console.log(service);
  return (
    <div className="card bg-base-100 w-full border border-[#E8E8E8] mb-5">
      <figure className="p-8">
        <img
          src={img}
          alt={`${title} error`}
          className="rounded-xl w-full h-52"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-between">
          <p>Price: ${price}</p>
          <FaArrowRight className="text-[#ff3811]" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
