"use client"
import React, { useState } from "react";
const HourlyRateForm: React.FC = () => {
  const [hourlyRate, setHourlyRate] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setHourlyRate(parseFloat(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      console.log(hourlyRate)
  };
return (
  <div className="p-4 w-max flex shadow-md rounded-md">
    <form onSubmit={handleSubmit} className="">
      <label className="flex flex-col text-lg font-semibold text-slate-800 ">
        Qual o seu valor por hora de trabalho?
        <input
          type="number"
          step={0.01}
          min={0}
          value={hourlyRate}
          onChange={handleInputChange}
          className="bg-transparent w-20 my-7 mx-4 rounded-md shadow-sm p-2 "
        />
      </label>
        <div className="flex justify-end items-end">
      <button className="w-fit rounded-lg font-semibold shadow-lg text-white bg-orange-400 px-4 hover:bg-white transition hover:text-orange-400 " type="submit">Enviar</button>
      </div>
    </form>
  </div>
);
}
export default HourlyRateForm;
