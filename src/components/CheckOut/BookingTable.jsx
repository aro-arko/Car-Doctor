import React from "react";

const BookingTable = ({ booking, handleDelete }) => {
  const { _id, service, img, price, f_name, l_name } = booking;
  console.log(booking);
  const name = f_name + " " + l_name;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className=" rounded-xl h-24 w-24">
              <img
                className="h-24"
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>{service}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Details</button>
      </th>
    </tr>
  );
};

export default BookingTable;
