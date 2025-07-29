import React, { useState } from 'react';
import InputField from './Input';
import axios from "axios"
import {toast} from "react-toastify"

const EventForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '',
    eventDate: '',
    duration: '',
    location: '',
    eventType: '',
    budgetRange: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('Submitting form data:', formData); // Debug log
      
      const response = await axios.post('http://localhost:3000/api/user/register', formData);
      
      console.log('Response:', response.data); // Debug log
      
      toast.success("You are registered to event successfully");
      
  
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        guests: '',
        eventDate: '',
        duration: '',
        location: '',
        eventType: '',
        budgetRange: '',
      });
      
    } catch (error) {
      console.error('Error submitting reservation:', error.response?.data || error.message);
      toast.error('Failed to submit reservation.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">Book Your Event</h2>

      {/* Personal Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">👤 Personal Details</h3>
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          required
        />
        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+92 300 1234567"
          required
        />
      </div>

      {/* Event Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">🎉 Event Details</h3>

        {/* Added missing guests field */}
        <InputField
          label="Number of Guests"
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          placeholder="Enter number of guests"
          required
        />

        <InputField
          label="Event Date"
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />

        {/* Duration */}
        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700 font-semibold mb-2">
            ⏱ Event Duration
          </label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Duration</option>
            <option value="30min">30 Minutes</option>
            <option value="1hr">1 Hour</option>
            <option value="2hr">2 Hours</option>
            <option value="halfday">Half Day</option>
            <option value="fullday">Full Day</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
            📍 Location
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Location</option>
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
            <option value="quetta">Quetta</option>
            <option value="hyderabad">Hyderabad</option>
          </select>
        </div>

        {/* Event Type */}
        <div className="mb-4">
          <label htmlFor="eventType" className="block text-gray-700 font-semibold mb-2">
            🎉 Type of Event <span className="text-red-500">*</span>
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Event Type</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday Party</option>
            <option value="corporate">Corporate Event</option>
            <option value="concert">Concert</option>
            <option value="private">Private Party</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Budget */}
        <div className="mb-4">
          <label htmlFor="budgetRange" className="block text-gray-700 font-semibold mb-2">
            💰 Budget Range <span className="text-red-500">*</span>
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Budget</option>
            <option value="under-50000">Under Rs. 50,000</option>
            <option value="50000-100000">Rs. 50,000 – 1 Lakh</option>
            <option value="100000-200000">Rs. 1 Lakh – 2 Lakh</option>
            <option value="200000-plus">Rs. 2 Lakh+</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        🚀 Submit Booking
      </button>
    </form>
  );
};

export default EventForm;