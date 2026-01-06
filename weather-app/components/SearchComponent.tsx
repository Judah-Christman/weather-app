"use client";

import React from "react";

interface SearchComponentProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  searchCity: () => Promise<void>;
}

export default function SearchComponent({
  city,
  setCity,
  searchCity,
}: SearchComponentProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchCity();
      }}
    >
      <input
        className="bg-[#fefefe] text-lg text-[#8F8F8F] rounded-md p-2"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City name..."
      />
      <button 
        className="text-[#fefefe] text-lg p-2 mx-1 hover:cursor-pointer border border-[#fefefe] rounded-md"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
