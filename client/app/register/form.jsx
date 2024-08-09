"use client";
import React, { useState } from "react";
import "./form.css"; // Import the CSS file

// Reusable Input Component
const InputField = ({ name, value, onChange, error, placeholder }) => (
  <div className="form-group">
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={error ? "input-error" : ""}
    />
    {error && <span className="error-message">{error}</span>}
  </div>
);

const Form = () => {
  const [formData, setFormData] = useState({
    weight: "",
    hallmark: "",
    manufacturer: "",
    designer: "",
    purity: "",
    metal: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Further processing, like sending data to a server
    }
  };

  return (
    <form className="jewelry-form" onSubmit={handleSubmit}>
      {[
        { name: "weight", placeholder: "Weight" },
        { name: "hallmark", placeholder: "Hallmark" },
        { name: "manufacturer", placeholder: "Manufacturer" },
        { name: "designer", placeholder: "Designer" },
        { name: "purity", placeholder: "Purity" },
        { name: "metal", placeholder: "Metal" },
      ].map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
          placeholder={field.placeholder}
        />
      ))}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
