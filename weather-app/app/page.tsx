'use client'
import React, { useState } from "react";
import { useWeather } from "@/hooks/useWeather";
import WeatherCard from "@/components/WeatherCard";
import SearchComponent from "@/components/SearchComponent";

export default function WeatherApp(){

  const weatherState = useWeather();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="w-full bg-blue-400 text-center text-4xl p-2">Weather App</h1>
      <SearchComponent {...weatherState}/>
      <WeatherCard {...weatherState}/>
    </div>
  );
}
