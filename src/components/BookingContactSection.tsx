
import React from 'react';
import BookingForm from './booking/BookingForm';
import ContactInfo from './booking/ContactInfo';
import Map from './booking/Map';

const BookingContactSection = () => {
  return (
    <section className="bg-[#0f1419] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-[#141e28]/80 border border-[#d4af37]/20 rounded-xl p-8">
            <h2 className="text-4xl font-bold text-center text-white mb-8">Book an Appointment</h2>
            <BookingForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
            <div className="h-96">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContactSection;
