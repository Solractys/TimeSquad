"use client"
import HourlyRateForm from "./components/HourlyRateForm";
import Cronometer from "./components/Cronometer";
import Summary from "./components/Summary";
import React, { useState } from "react";

export default function Home(): any {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [hourlyRate, setHourlyRate] = useState<number>(0);

  return (
    <div>
      <h1 className="text-center text-5xl m-10 font-semibold">Time<em className="text-orange-400">Squad</em></h1>
      <div className="flex justify-center align-middle mx-auto gap-8">
        <HourlyRateForm setHourlyRate={setHourlyRate} />
        <Cronometer setElapsedTime={setElapsedTime} />
        <Summary elapseTime={elapsedTime} hourlyRate={hourlyRate} />
      </div>
    </div>
  );
}

