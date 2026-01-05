"use client"
import { useState } from "react";
import { getWeather } from "@/utils/getOpenWeather";

export function useWeather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const searchCity = async () => {
    try {
      const data = await getWeather(city);
      setWeather(data);
      setError(null);
    } catch {
      setWeather(null);
      setError("City not found");
    }
  };

  return {
    city,
    setCity,
    weather,
    error,
    searchCity,
  };
}
