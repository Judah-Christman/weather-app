"use client";
import { useState } from "react";
import { getWeather } from "@/utils/getOpenWeather";

interface UseWeatherReturn {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  weather: WeatherData | null;
  error: string | null;
  searchCity: () => Promise<void>;
}

export function useWeather(): UseWeatherReturn {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchCity = async (): Promise<void> => {
    try {
      const data: WeatherData = await getWeather(city);
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

