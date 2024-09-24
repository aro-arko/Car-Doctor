import React from "react";
import logo from "../../assets/footer-logo.png";

import social1 from "../../assets/icons/social/1.svg";
import social2 from "../../assets/icons/social/2.svg";
import social3 from "../../assets/icons/social/3.svg";
import social4 from "../../assets/icons/social/4.svg";

const Footer = () => {
  return (
    <div className="bg-[#151515] p-8 md:p-12">
      <footer className="footer max-w-7xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <aside className="space-y-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <p>
            Edwin Diaz is a software and web <br />
            technologies engineer, a life coach <br />
            trainer who is also a serial .
          </p>
          <div className="flex space-x-2">
            <img src={social1} alt="Social Media 1" className="h-9 w-9" />
            <img src={social2} alt="Social Media 2" className="h-9 w-9" />
            <img src={social3} alt="Social Media 3" className="h-9 w-9" />
            <img src={social4} alt="Social Media 4" className="h-9 w-9" />
          </div>
        </aside>

        <nav className="space-y-2">
          <h6 className="text-xl font-semibold text-white">About</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav className="space-y-2">
          <h6 className="text-xl font-semibold text-white">Company</h6>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </nav>

        <nav className="space-y-2">
          <h6 className="text-xl font-semibold text-white">Support</h6>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accessibility</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
