import React from "react";
import img from "../../assets/images/login/login.svg";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-center justify-between lg:gap-32 gap-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center hidden lg:block">
          <img
            className="max-h-[300px] lg:max-h-[516px] w-auto object-contain"
            src={img}
            alt="Login Illustration"
          />
        </div>
        {/* Form Section */}
        <div className="card w-full max-w-md shrink-0">
          <form className="card-body border border-[#D0D0D0] rounded-lg p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Login
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered h-14"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered h-14"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white font-semibold h-16">
                Login
              </button>
            </div>

            {/* Divider Section */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center">
              <div className="bg-[#F5F5F8] rounded-full h-14 w-14 flex items-center justify-center mr-4">
                <BiLogoFacebook className="h-6 w-6 text-[#3B5998]" />
              </div>
              <div className="bg-[#F5F5F8] rounded-full h-14 w-14 flex items-center justify-center mr-4">
                <BiLogoLinkedin className="h-6 w-6 text-[#0A66C2]" />
              </div>
              <div className="bg-[#F5F5F8] rounded-full h-14 w-14 flex items-center justify-center">
                <FcGoogle className="h-6 w-6 text-[#0A66C2]" />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-center">
                Don't have an account?{" "}
                <Link className="font-bold" to="/signup">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
