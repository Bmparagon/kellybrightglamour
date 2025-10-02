
'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SALON_DATA } from '@/data/salonData';

interface IFormInput {
  service: string;
  date: string;
  time: string;
  stylist: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    // Here you would typically send the data to your backend API
    alert('Booking submitted! (Check console for data)');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="service" className="block text-sm font-medium dark:text-[#b0b0b0] text-gray-500 mb-1">Select Service <span className="text-[#d4af37]">*</span></label>
        <select id="service" {...register('service', { required: true })} className="w-full dark:bg-[#2a2a2a] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-md p-3 focus:ring-[#d4af37] focus:border-[#d4af37]">
          {SALON_DATA.services.map(service => (
            <option key={service.id} value={service.name}>{service.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium dark:text-[#b0b0b0] text-gray-500 mb-1">Preferred Date <span className="text-[#d4af37]">*</span></label>
          <input type="date" id="date" {...register('date', { required: true })} className="w-full dark:bg-[#2a2a2a] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-md p-3 focus:ring-[#d4af37] focus:border-[#d4af37]" />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium dark:text-[#b0b0b0] text-gray-500 mb-1">Preferred Time <span className="text-[#d4af37]">*</span></label>
          <input type="time" id="time" {...register('time', { required: true })} className="w-full dark:bg-[#2a2a2a] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-md p-3 focus:ring-[#d4af37] focus:border-[#d4af37]" />
        </div>
      </div>

      <div>
        <label htmlFor="stylist" className="block text-sm font-medium dark:text-[#b0b0b0] text-gray-500 mb-1">Choose Stylist</label>
        <select id="stylist" {...register('stylist')} className="w-full dark:bg-[#2a2a2a] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-md p-3 focus:ring-[#d4af37] focus:border-[#d4af37]">
          <option value="any">Any Available</option>
          {SALON_DATA.barbers.map(barber => (
            <option key={barber.id} value={barber.name}>{barber.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium dark:text-[#b0b0b0] text-gray-500 mb-1">Full Name <span className="text-[#d4af37]">*</span></label>
        <input type="text" id="name" {...register('name', { required: true })} className="w-full dark:bg-[#2a2a2a] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-md p-3 focus:ring-[#d4af37] focus:border-[#d4af37]" />
        {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium dark:text-[#b0b0b0] text-gray-500 mb-1">Email <span className="text-[#d4af37]">*</span></label>
        <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className="w-full dark:bg-[#2a2a2a] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-md p-3 focus:ring-[#d4af37] focus:border-[#d4af37]" />
        {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium dark:text-[#b0b0b0] text-gray-500 mb-1">Phone Number <span className="text-[#d4af37]">*</span></label>
        <input type="tel" id="phone" {...register('phone', { required: true })} className="w-full dark:bg-[#2a2a2a] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-md p-3 focus:ring-[#d4af37] focus:border-[#d4af37]" />
        {errors.phone && <span className="text-red-500 text-sm">This field is required</span>}
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium dark:text-[#b0b0b0] text-gray-500 mb-1">Special Requests or Notes</label>
        <textarea id="notes" {...register('notes')} rows={3} className="w-full dark:bg-[#2a2a2a] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-md p-3 focus:ring-[#d4af37] focus:border-[#d4af37]"></textarea>
      </div>

      <button type="submit" className="w-full bg-[#d4af37] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#c29a2f] transition-colors">Book Appointment</button>
    </form>
  );
};

export default BookingForm;
