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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Qual o seu valor por hora de trabalho?
          <input
            type="number"
            step={0.01}
            min={0}
            value={hourlyRate}
            onChange={handleInputChange}
          />
        </label>
          <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default HourlyRateForm;
