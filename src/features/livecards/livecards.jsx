import { useAppContext } from "../../contexts/app-contexts";
import DashboardLineGraph from "./components/dashboard-line-graph/dashboard-line-graph";
import DashboardBarGraph from "./components/dashboard-bar-graph/dashboared-bar-graph";

import FanDashboard from "./components/fan-dashboard-controler/fan-dashboard";
import LightDashboard from "./components/ligh-dashboard-controler/light-dashboard";
import PowerDashboard from "./components/power-dashboard-controler/power-dashboard";
import WaterDashboard from "./components/water-dashboard-controler/water-dashboard";



import TemperatureCard from "./components/cards/temperature-card/temperature-card";
import AirHumidityCard from "./components/cards/air-humidity-card/air-humidity-card";
import SoilMoistureCard from "./components/cards/soil-moisture-card/soil-moisture-card";

function LiveCards() {
  const { menuState } = useAppContext();
  return (
    <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div
        className={`${
          menuState && "mt-12 sm:mt-0"
        } p-6 rounded-lg dark:border-gray-700`}
      >
        {/* First Part */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Temperature Card */}
          <TemperatureCard />
          {/* Air Humidity Card */}
          <AirHumidityCard />
          {/* Soil moisture Card */}
          <SoilMoistureCard/>
        </div>
        {/* Second Part */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3   gap-6">
          <div className="w-full h-80 xl:h-100 col-span-1 lg:col-span-2 shadow-lg rounded-xl p-10 bg-white dark:bg-gray-800 hover:shadow-xl ">
            <DashboardLineGraph />
          </div>
          <div className="grid grid-cols-2 lg:col-span-1  gap-4 ">
            <FanDashboard />

            <LightDashboard />

            <PowerDashboard />

            <WaterDashboard />
          </div>
          <div></div>
        </div>
        {/* Third Part */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 hover:shadow-xl h-64">
            <DashboardBarGraph />
          </div>
          <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 hover:shadow-xl h-64">
            <DashboardBarGraph />
          </div>
          <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 hover:shadow-xl h-64">
            <DashboardBarGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveCards;
