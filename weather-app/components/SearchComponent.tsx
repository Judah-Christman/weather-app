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
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Search</button>
    </form>
  );
}
