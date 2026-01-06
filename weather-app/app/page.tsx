"use client"
import React from "react";
import { useWeather } from "@/hooks/useWeather";
import Image from "next/image";
import WeatherCard from "@/components/WeatherCard";
import SearchComponent from "@/components/SearchComponent";

export default function WeatherApp(){

  const weatherState = useWeather();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full h-[100px] grid grid-cols-2 gap-4 bg-[#61A3FF]">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-[#fefefe] text-5xl font-semibold mx-5">Weather App</h1>
          <Image src="/icons/sunny-cloud.png" width={80} height={80}/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SearchComponent {...weatherState}/>
        </div>
      </div>
      <WeatherCard {...weatherState}/>
    </div>
  );
}
