interface WeatherResponse {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number };
}

export async function getWeather(city: string): Promise<WeatherResponse> {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  if (!apiKey) throw new Error("Missing OpenWeather API key");

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!res.ok) throw new Error("Failed to fetch weather");

  return res.json() as Promise<WeatherResponse>;
}
