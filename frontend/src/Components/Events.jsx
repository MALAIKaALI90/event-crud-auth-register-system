import React, { useEffect, useState } from 'react';
import { events } from "../assets/EventEsset"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {toast} from "react-toastify"
const EventCards = () => {
const [list,setList]=useState([])
 const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/product/get");

      if (response.data.success) {
        setList(response.data.allEvents || []);
      } else {
        toast.error(response.data.message || "Failed to fetch events");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchList();    
  }, []);
      const navigate=useNavigate()
    const handleSubmit=()=>{
      
        navigate("/form")
    }
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Upcoming Events</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
 {[...events, ...list].map((event, index) => (
  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-800 mb-2"><strong>Title:</strong> {event.title}</h3>
      {/* <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p> */}
      {/* <p className="text-sm text-gray-600 mb-1"><strong>Time:</strong> {event.price}</p> */}
      <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {event.location}</p>
      <p className="text-gray-700 text-sm mt-2"><strong>Discription:</strong> {event.discription}</p>
      <button onClick={handleSubmit} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Register
      </button>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default EventCards;
