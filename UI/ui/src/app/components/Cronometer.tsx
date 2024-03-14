"use client"
import React, { useState, useEffect } from "react";

interface TimerProps {
  setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
}


const Cronometer: React.FC<TimerProps> = ({setElapsedTime}) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000)
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const troggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const formatTimer = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    setElapsedTime(timeInSeconds)
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <div className="rounded-md shadow-lg p-8 w-64 block">
        <div className="text-5xl mb-8 text-center ">{formatTimer(seconds)}</div>
      <div className="flex gap-8 justify-center items-center">
        <button className="w-fit  rounded-lg font-semibold shadow-lg text-orange-400  px-4 hover:bg-orange-400 transition hover:text-white" onClick={troggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button className="w-fit  rounded-lg  font-semibold shadow-lg text-orange-400  px-4 hover:bg-orange-400 transition hover:text-white" onClick={resetTimer}>Reset</button>

      </div>

    </div>
  );
}
export default Cronometer;
