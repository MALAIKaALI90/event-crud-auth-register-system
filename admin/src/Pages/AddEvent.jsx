import React, { useState } from 'react';
import image1 from "../assets/image1.png";
import {toast} from "react-toastify"
import axios from "axios"
const AddEvent = ({ token }) => {
  const [image, setImage] = useState(null);
  const [eventData, setEventData] = useState({
    title: '',

    location: '',
    discription: '',
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const onSubmitHandler=async(e)=>{
    e.preventDefault()
     const formData = new FormData();
  formData.append("image", image);
  formData.append("title", eventData.title);

  formData.append("location", eventData.location);
  formData.append("discription", eventData.discription);
  try {
    const response = await axios.post("http://localhost:3000/api/product/add", formData, {
      headers: {token}
    


    });

    if (response.data.success) {
      toast.success(response.data.message,"You are registered for this event!");
      console.log(response.data.success,"You are registered for this event!");
      
    } else {
      toast.error(response.data.error||"Something Went Wrong");
      console.log(response.data.message);
      
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to register. Please try again.");
  }
};
  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
        🎉 Add a New Event
      </h2>

      <form  onSubmit={onSubmitHandler}className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Upload */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-2">
            Upload Event Image
          </label>
          <label
            htmlFor="image"
            className="cursor-pointer block border-2 border-dashed border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <img
              src={image ? URL.createObjectURL(image) : image1}
              alt="Preview"
              className="w-full h-64 object-cover"
            />
            <input
              type="file"
              id="image"
              hidden
              onChange={handleImageChange}
              accept="image/*"
            />
          </label>
        </div>

        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            placeholder="Enter Event Title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Date */}
        {/* <div>
          <label className="block text-gray-700 font-medium mb-1">
            Event Date
          </label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div> */}

        {/* Price */}
        {/* <div>
          <label className="block text-gray-700 font-medium mb-1">
            Price (PKR)
          </label>
          <input
            type="number"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            placeholder="Enter Event Price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div> */}

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            placeholder="Event Location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Discription
          </label>
          <textarea
            name="discription"
            value={eventData.discription}
            onChange={handleChange}
            placeholder="Write Event Description"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            ➕ Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
