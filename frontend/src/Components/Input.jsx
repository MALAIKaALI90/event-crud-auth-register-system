import React from 'react';

const InputField = ({ label, type = "text", name, value, onChange, placeholder, required = false }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>
          {label} 
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
    </div>
  );
};

export default InputField;
