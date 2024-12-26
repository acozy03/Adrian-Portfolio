"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            subject: "",
            email: "",
            message: "",
          });
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="flex flex-col justify-center items-left antialiased relative rounded-xl mb-20 p-10 border border-white/10" id="contact">
      <div className="flex justify-between items-center mb-10 relative z-10">
        <h1 className="text-4xl font-bold text-opacity-80 text-white">Contact Me </h1>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/acozy03"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-500/10 rounded-full flex items-center justify-center hover:bg-gray-500/20 transition-colors"
          >
            <Linkedin size={20} className="text-gray-500" />
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText('acozy03@gmail.com').then(() => {
                alert('Email copied to clipboard! Feel free to reach out :)');
              }).catch(err => {
                console.error('Failed to copy email: ', err);
              });
            }}
            className="w-10 h-10 bg-gray-500/10 rounded-full flex items-center justify-center hover:bg-gray-500/20 transition-colors"
          >
            <Mail size={20} className="text-gray-500" />
          </button>
        </div>
      </div>
      <form className="grid grid-cols-1 gap-5 w-full relative z-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1 relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              required
              className="w-full px-4 py-2 bg-black/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white/40 peer placeholder-shown:border-white/20 text-white placeholder:text-white/60"
            />
          </div>
          <div className="col-span-1 relative">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              required
              className="w-full px-4 py-2 bg-black/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white/40 peer placeholder-shown:border-white/20 text-white placeholder:text-white/60"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1 relative">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
              className="w-full px-4 py-2 bg-black/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white/40 peer placeholder-shown:border-white/20 text-white placeholder:text-white/60"
            />
          </div>
          <div className="col-span-1 relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 bg-black/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white/40 peer placeholder-shown:border-white/20 text-white placeholder:text-white/60"
            />
          </div>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={5}
            required
            className="w-full px-4 py-2 bg-black/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white/40 peer placeholder-shown:border-white/20 text-white placeholder:text-white/60"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#E23E57] text-white font-bold rounded-lg hover:bg-[#E23E57]/90 transition-all"
        >
          Send
        </button>
      </form>
      <BackgroundBeams className="absolute inset-0 -z-0" />
    </div>
  );
};

export default Footer;

