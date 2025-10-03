
import React from 'react';
import { SALON_DATA } from '@/data/salonData';

const Map = () => {
  return (
    <div className="h-[450px] w-full overflow-hidden dark:bg-[#1a1a1a] bg-gray-100 rounded-lg border border-[#d4af37]/20">
      <iframe
        title="Kelly-Bright Glamour Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7277773724484!2d3.4217167!3d6.4280556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5329792aaa7%3A0x8097d269f6901ee!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1696363557974!5m2!1sen!2sng"
        className="w-full h-full border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
