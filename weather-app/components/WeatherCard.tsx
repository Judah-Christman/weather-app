"use client";

import Image from "next/image";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface WeatherCardProps {
  weather: WeatherData | null;
  error: string | null;
}

export default function WeatherCard({ weather, error }: WeatherCardProps) {
  const icon = weather?.weather[0].icon;

  return (
    <div className="w-1/2">
      {error && <p className="mt-20 flex item-center justify-center text-red-400">{error}</p>}

      {weather && (
        <div className="my-20 p-5 rounded-md bg-blue-400">
          <h2 className="w-full text-[#fefefe] font-bold text-3xl text-center mb-5">
            {weather.name}
          </h2>

          <div className="w-full grid grid-cols-3 gap-4">
            <div className="col-span-2 flex justify-center items-center">
              <Image
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                width={150}
                height={150}
                alt="Weather icon"
              />
            </div>

            <div className="p-2 rounded-md">
              <p className="text-lg text-[#fefefe]">
                {weather.weather[0].description}
              </p>
              <p className="text-lg text-[#fefefe] my-1">
                Temperature: {Math.round((weather.main.temp * 9) / 5 + 32)} °F
              </p>
              <p className="text-lg text-[#fefefe] my-1">
                Humidity: {weather.main.humidity}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
