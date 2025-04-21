"use client";

import React, { FC, FormEvent, useState } from 'react';
import axios from 'axios';

const ContactsForm: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://2riz2vnnb7.execute-api.eu-central-1.amazonaws.com/dev/email', // Replace with your API Gateway URL
        {
          first_name: firstName,
          last_name: lastName,
          location: location,
          from_email: email,
          message: message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      setResponseMessage('Email bol úspešne odoslaný!');
    } catch (error) {
      setResponseMessage('Nepodarilo sa odoslať email.');
      console.error('Chyba pri odosielaní emailu:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='md:flex md:space-y-0 space-y-4 gap-4'>
          <div className='md:w-1/2 w-full'>
            <input
              type="text"
              placeholder="Meno"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-secondary block w-full px-6 py-2 focus:outline-none font-barlow font-semibold placeholder:uppercase border-b-[3px] border-[#ecebff] focus:border-secondary focus:placeholder-black"
              required
            />
          </div>
          <div className='md:w-1/2 w-full'>
            <input
              type="text"
              placeholder="Priezvisko"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="text-secondary block w-full px-6 py-2 focus:outline-none font-barlow font-semibold placeholder:uppercase border-b-[3px] border-[#ecebff] focus:border-secondary focus:placeholder-black"
              required
            />
          </div>
        </div>
        <div className='md:flex  md:space-y-0 space-y-4 gap-4'>
          <div className='md:w-1/2 w-full'>
            <input
              type="text"
              placeholder="Lokalita (nepovinné)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-secondary block w-full px-6 py-2 focus:outline-none font-barlow font-semibold placeholder:uppercase border-b-[3px] border-[#ecebff] focus:border-secondary focus:placeholder-black"
            />
          </div>
          <div className='md:w-1/2 w-full'>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-secondary block w-full px-6 py-2 focus:outline-none font-barlow font-semibold placeholder:uppercase border-b-[3px] border-[#ecebff] focus:border-secondary focus:placeholder-black"
              required
            />
          </div>
        </div>
        <div>
          <textarea
            placeholder="Správa"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-secondary block w-full px-6 py-2 focus:outline-none font-barlow font-semibold placeholder:uppercase border-b-[3px] border-[#ecebff] focus:border-secondary focus:placeholder-black"
            required
          />
        </div>
        <button type="submit" className="text-white font-rubik text-sm inline-block font-medium group relative z-10">
          <span className='bg-primary mt-4 p-5 min-w-40 text-center inline-block z-10 group-hover:bg-secondary transition-all duration-500 text-sm uppercase'>Odoslať</span>
        </button>
      </form>
      {responseMessage && <p className="mt-4 text-center text-sm text-gray-500">{responseMessage}</p>}
    </div>
  );
};

export default ContactsForm;
