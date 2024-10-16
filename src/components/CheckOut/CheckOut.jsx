import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();

  const { user } = useContext(AuthContext);

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const f_name = form.f_name.value;
    const l_name = form.l_name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    // console.log(f_name, l_name, phone, email, message);

    const order = {
      f_name,
      l_name,
      phone,
      email,
      service: title,
      customer_id: _id,
      price,
      message,
    };

    fetch("http://localhost:5000/checkouts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successful!",
            text: "You order has been submitted!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="mt-10 px-4 md:px-10 lg:px-20">
      <div className="relative mb-10">
        <img className="w-full object-cover rounded-xl" src={banner} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent rounded-xl"></div>
        <h3 className="text-white absolute top-1/2 left-10 transform -translate-y-1/2 z-10 text-2xl md:text-3xl font-medium">
          Checkout: {title}
        </h3>
        {/* Centering the Home/Checkout text */}
        <div className="absolute bottom-0 w-full flex justify-center items-center">
          <div className="bg-red-600 text-white py-2 px-4 rounded-t-lg">
            <p>
              <Link to="/">Home</Link> /{" "}
              <Link to={`/checkout/${_id}`}>Checkout</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hero my-12 md:my-24">
        <div className="w-full">
          <div className="card bg-[#F3F3F3] p-6 sm:p-12 md:p-16 lg:p-24 rounded-xl">
            <form onSubmit={handleCheckOut} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="form-control m-0">
                  <input
                    name="f_name"
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered"
                    // defaultValue={user?.}
                    required
                  />
                </div>
                <div className="form-control m-0">
                  <input
                    name="l_name"
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control m-0">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control m-0">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    defaultValue={user?.email || ""}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  className="w-full h-32 sm:h-48 md:h-64 p-5 rounded-xl mt-6 form-control input input-bordered"
                  name="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-control m-0 mt-6">
                <input
                  className="btn bg-[#FF3811] font-semibold text-white w-full md:w-auto px-6"
                  type="submit"
                  value="Order Confirm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
