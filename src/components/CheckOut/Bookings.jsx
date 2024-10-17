import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import banner from "../../assets/images/checkout/checkout.png";
import { Link } from "react-router-dom";
import BookingTable from "./BookingTable";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/checkouts?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookings(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/checkouts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="mb-10">
      <div className="relative mb-10">
        <img className="w-full object-cover rounded-xl" src={banner} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent rounded-xl"></div>
        <h3 className="text-white absolute top-1/2 left-10 transform -translate-y-1/2 z-10 text-2xl md:text-3xl font-medium">
          My Bookings: {bookings.length}
        </h3>
        <div className="absolute bottom-0 w-full flex justify-center items-center">
          <div className="bg-red-600 text-white py-2 px-4 rounded-t-lg">
            <p>
              <Link to="/">Home</Link> / <Link to={`/bookings`}>Bookings</Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="textarea-md bg-gray-200">
              <th>
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                </label>
              </th>
              <th>Service Image</th>
              <th>Customer Name</th>
              <th>Service Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingTable
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              ></BookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
