import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

const AdminTable = () => {
  const [registration, setRegistration] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/user/delete/${id}`);
      toast.success("Reservation deleted successfully");
      setRegistration(prev => prev.filter(reserve => reserve._id !== id));
    } catch (error) {
      console.error("Error deleting reservation:", error.message);
      toast.error("Failed to delete reservation");
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user/all");
        console.log(response.data.RegisterUsers);
        
        setRegistration(response.data.RegisterUsers);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Admin Panel - Registration
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Full Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Event Date</th>
              <th className="py-3 px-6 text-left">Duration</th>
              <th className="py-3 px-6 text-left">Guests</th>
              <th className="py-3 px-6 text-left">Event Type</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Budget Range</th>
              <th className="py-3 px-6 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {registration.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center py-4 text-gray-500">
                  No reservations found.
                </td>
              </tr>
            ) : (
              registration.map((reserve) => {
                return (
                  <tr
                    key={reserve._id}
                    className="border-b hover:bg-gray-100 transition duration-200"
                  >
                    <td className="py-3 px-6">{reserve.fullName}</td>
                    <td className="py-3 px-6">{reserve.email}</td>
                    <td className="py-3 px-6">{reserve.phone}</td>
                    <td className="py-3 px-6">{reserve.eventDate}</td>
                    <td className="py-3 px-6">{reserve.duration}</td>
                    <td className="py-3 px-6">{reserve.guests}</td>
                    <td className="py-3 px-6">{reserve.eventType}</td>
                    <td className="py-3 px-6">{reserve.location}</td>
                    <td className="py-3 px-6">{reserve.budgetRange}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleDelete(reserve._id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
