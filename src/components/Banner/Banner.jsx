import React from "react";
import img1 from "../../assets/images/banner/5.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full max-h-[600px] object-cover rounded-xl"
        />
        <div className="absolute px-5 md:pl-24 left-0 h-full w-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-transparent">
          <div className="text-white w-full md:w-2/5 space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active bg-[#FF3811] text-white font-semibold text-sm md:text-lg border-none">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-sm md:text-lg text-white sm:ml-2 md:mt-2 lg:ml-3 md:ml-0">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide4"
            className="btn btn-circle mr-2 md:mr-5 h-10 md:h-14 w-10 md:w-14 bg-opacity-20 border-none text-white"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn h-10 md:h-14 w-10 md:w-14 btn-circle bg-[#FF3811] border-none text-white"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full max-h-[600px] object-cover rounded-xl"
        />
        <div className="absolute px-5 md:pl-24 left-0 h-full w-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-transparent">
          <div className="text-white w-full md:w-2/5 space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active bg-[#FF3811] text-white font-semibold text-sm md:text-lg border-none">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-sm md:text-lg text-white sm:ml-2 md:mt-2 lg:ml-3 md:ml-0">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide1"
            className="btn btn-circle mr-2 md:mr-5 h-10 md:h-14 w-10 md:w-14 bg-opacity-20 border-none text-white"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn h-10 md:h-14 w-10 md:w-14 btn-circle bg-[#FF3811] border-none text-white"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full max-h-[600px] object-cover rounded-xl"
        />
        <div className="absolute px-5 md:pl-24 left-0 h-full w-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-transparent">
          <div className="text-white w-full md:w-2/5 space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active bg-[#FF3811] text-white font-semibold text-sm md:text-lg border-none">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-sm md:text-lg text-white sm:ml-2 md:mt-2 lg:ml-3 md:ml-0">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide2"
            className="btn btn-circle mr-2 md:mr-5 h-10 md:h-14 w-10 md:w-14 bg-opacity-20 border-none text-white"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn h-10 md:h-14 w-10 md:w-14 btn-circle bg-[#FF3811] border-none text-white"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full max-h-[600px] object-cover rounded-xl"
        />
        <div className="absolute px-5 md:pl-24 left-0 h-full w-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-transparent">
          <div className="text-white w-full md:w-2/5 space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-sm md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active bg-[#FF3811] text-white font-semibold text-sm md:text-lg border-none">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-sm md:text-lg text-white sm:ml-2 md:mt-2 lg:ml-3 md:ml-0">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide3"
            className="btn btn-circle mr-2 md:mr-5 h-10 md:h-14 w-10 md:w-14 bg-opacity-20 border-none text-white"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn h-10 md:h-14 w-10 md:w-14 btn-circle bg-[#FF3811] border-none text-white"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
