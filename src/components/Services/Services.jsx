import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";
import { TbLocationPlus } from "react-icons/tb";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="pt-20">
      <div className="text-center space-y-4">
        <h4 className="text-xl font-bold text-[#ff3811]">Service</h4>
        <h2 className="text-3xl font-bold">Our Service Area</h2>
        <p className="text-base">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="bg-[#151515] text-white px-16 py-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl mt-10">
        <div className="flex items-center space-x-5">
          <div>
            <IoCalendarOutline className="h-10 w-10" />
          </div>
          <div>
            <p className="text-base font-medium mb-2">
              We are open monday-friday
            </p>
            <h5 className="text-2xl font-bold">7:00 am - 9:00 pm</h5>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <div>
            <MdOutlineAddIcCall className="h-10 w-10" />
          </div>
          <div>
            <p className="text-base font-medium mb-2">Have a question?</p>
            <h5 className="text-2xl font-bold">+2546 251 2658</h5>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <div>
            <TbLocationPlus className="h-10 w-10" />
          </div>
          <div>
            <p className="text-base font-medium mb-2">
              Need a repair? our address
            </p>
            <h5 className="text-2xl font-bold">Liza Street, New York</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
