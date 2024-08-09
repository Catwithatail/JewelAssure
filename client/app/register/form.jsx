"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./form.css"; // Import the CSS file

const JewelaryABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "JewelryManagement",
  "sourceName": "contracts/JewelryManagement.sol",
  "address": "0xBe2249d2fe3Ac5d3c3c7994658026b4b29E5ABed",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_weight",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_hallmark",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_originDetails",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_manufacturerDetails",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_designerDetails",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_purity",
          "type": "uint256"
        },
        {
          "internalType": "string[]",
          "name": "_metalDetails",
          "type": "string[]"
        }
      ],
      "name": "addJewelry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};

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
    originDetails: "",
    manufacturer: "",
    designer: "",
    purity: "",
    metal: "",
  });

  const [errors, setErrors] = useState({});
  const [contract, setContract] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm() && contract) {
      try {
        const tx = await contract.addJewelry(
          ethers.utils.parseUnits(formData.weight, "wei"),
          formData.hallmark,
          formData.originDetails,
          formData.manufacturer,
          formData.designer,
          ethers.utils.parseUnits(formData.purity, "wei"),
          formData.metal.split(",").map((metal) => metal.trim())
        );
        await tx.wait();
        alert("Jewelry added successfully!");
      } catch (err) {
        console.error("Error:", err);
        alert("Failed to add jewelry.");
      }
    }
  };

  useEffect(() => {
    const fetchContract = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contractInstance = new ethers.Contract(
            JewelaryABI.address,
            JewelaryABI.abi,
            signer
          );
          setContract(contractInstance);
        } catch (err) {
          console.error("Error connecting to contract:", err);
        }
      } else {
        alert("Please install MetaMask!");
      }
    };
    fetchContract();
  }, []);

  return (
    <form className="jewelry-form" onSubmit={handleSubmit}>
      {[
        { name: "weight", placeholder: "Weight (in grams)" },
        { name: "hallmark", placeholder: "Hallmark" },
        { name: "originDetails", placeholder: "Origin Details" },
        { name: "manufacturer", placeholder: "Manufacturer" },
        { name: "designer", placeholder: "Designer" },
        { name: "purity", placeholder: "Purity (e.g. 999 for 24K gold)" },
        { name: "metal", placeholder: "Metal (comma-separated)" },
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
