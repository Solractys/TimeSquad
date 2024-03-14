"use client"
import React, { useState } from "react";

interface HourlyRateFormProps {
  setHourlyRate: React.Dispatch<React.SetStateAction<number>>;
}

const HourlyRateForm: React.FC<HourlyRateFormProps> = ({ setHourlyRate }) => {
  const [hourlyRate, updateHourlyRate] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    updateHourlyRate(parseFloat(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHourlyRate(hourlyRate)
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
            className="bg-transparent w-20 my-4 mx-4 rounded-md shadow-sm p-2 "
          />
        </label>
        <div className="flex justify-end items-end">
          <button className="w-fit rounded-lg  mb-2 font-semibold shadow-lg text-white bg-orange-400 px-4 hover:bg-white transition hover:text-orange-400 " type="submit">Enviar</button>
        </div>
        <p className="text-slate-700 font-light">Você pode alterar o valor há qualquer momento.</p>
      </form>
    </div>
  );
}
export default HourlyRateForm;
