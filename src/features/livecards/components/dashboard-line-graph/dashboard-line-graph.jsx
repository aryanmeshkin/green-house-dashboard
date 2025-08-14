import { data } from "./line-graph-data";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Ticks,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAppContext } from "../../../../contexts/app-contexts";


ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);
function DashboardLineGraph() {
  const{modeState,changeMode}=useAppContext()
  const option = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      "y-left": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "دما (°C)",
        },
        Ticks: {
          color: modeState === "dark" ? "#fff" : "#000",
        },
      },
      "y-right": {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "رطوبت (%)",
          Ticks: {
            color: modeState === "dark" ? "#fff" : "#000",
          },
        },
        grid: {
          drawOnChartArea: false, // جلوگیری از تداخل خطوط شبکه
        },
      },
      x: {
        title: {
          display: true,
          text: "ساعت",
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return <Line data={data} options={option} />;
}

export default DashboardLineGraph;
