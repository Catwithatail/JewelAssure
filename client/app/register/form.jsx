"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./form.css"; // Import the CSS file

const JewelryABI = {
  _format: "hh-sol-artifact-1",
  contractName: "JewelryManagement",
  sourceName: "contracts/JewelryManagement.sol",
  address: "0xf984D90474126B7BB7014Bed1349f8dA018CFffe",
  abi: [
    {
      inputs: [
        { internalType: "string", name: "_name", type: "string" },
        { internalType: "uint256", name: "_price", type: "uint256" },
        { internalType: "uint256", name: "_weight", type: "uint256" },
        { internalType: "string", name: "_hallmark", type: "string" },
        {
          internalType: "string",
          name: "_manufacturerDetails",
          type: "string",
        },
        { internalType: "string", name: "_designerDetails", type: "string" },
        { internalType: "uint256", name: "_purity", type: "uint256" },
        { internalType: "string[]", name: "_metalDetails", type: "string[]" },
      ],
      name: "addJewelry",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
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
    name: "",
    price: "",
    weight: "",
    hallmark: "",
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
          formData.name,
          ethers.utils.parseUnits(formData.price, "wei"),
          ethers.utils.parseUnits(formData.weight, "wei"),
          formData.hallmark,
          formData.manufacturer,
          formData.designer,
          ethers.utils.parseUnits(formData.purity, "wei"),
          formData.metal.split(",").map((metal) => metal.trim())
        );

        const receipt = await tx.wait();
        console.log("Transaction Receipt:", receipt);

        // Check all emitted events
        console.log("All events:", receipt.events);

        // Try to find the JewelryAdded event
        const event = receipt.events.find(
          (event) => event.event === "JewelryAdded"
        );

        if (event) {
          const uniqueId = event.args[0].toString(); // Convert BigNumber to string
          alert(`Jewelry added successfully! Unique ID: ${uniqueId}`);
        } else {
          console.warn(
            "JewelryAdded event not found in the transaction receipt."
          );
          alert("Jewelry added, but the unique ID could not be retrieved.");
        }
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
            JewelryABI.address,
            JewelryABI.abi,
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
        { name: "name", placeholder: "Name" },
        { name: "price", placeholder: "Price (in ETH)" },
        { name: "weight", placeholder: "Weight (in grams)" },
        { name: "hallmark", placeholder: "Hallmark" },
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
