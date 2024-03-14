"use client"

interface SummaryProps {
  elapseTime: number;
  hourlyRate: number;
}
const Summary: React.FC<SummaryProps> = ({ elapseTime, hourlyRate }) => {
  const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds/ 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  };


  const totalEarned = (elapseTime / 3600) * hourlyRate;

  return(
    <div>
      <p>Tempo decorrido: {formatTime(elapseTime)}</p>
      <p>Valor acumulado: {totalEarned.toFixed(2)}</p>
    </div>
  );
}
export default Summary;
