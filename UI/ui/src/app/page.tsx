import HourlyRateForm from "./components/HourlyRateForm";
import Cronometer from "./components/cronometer";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-center text-5xl m-10 font-semibold">Time<em className="text-orange-400">Squad</em></h1>
      <div className="flex justify-center align-middle mx-auto gap-8">
        <HourlyRateForm />
        <Cronometer />
      </div>
    </div>
  );
}
