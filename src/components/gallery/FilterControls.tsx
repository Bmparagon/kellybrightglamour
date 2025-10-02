
import React from 'react';

const filters = ['All', 'Hair', 'Beauty', 'Barbing', 'Color'];

interface FilterControlsProps {
  setFilter: (filter: string) => void;
  currentFilter: string;
}

const FilterControls: React.FC<FilterControlsProps> = ({ setFilter, currentFilter }) => {
  return (
    <div className="flex justify-center gap-6 mb-12">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`text-lg font-semibold transition-colors duration-300 ${currentFilter === filter ? 'dark:text-[#f4e4c1] text-black border-b-2 border-[#d4af37]' : 'dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37]'}`}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;
