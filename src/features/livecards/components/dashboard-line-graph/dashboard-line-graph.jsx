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
  plugins,
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
  const { modeState, changeMode } = useAppContext();
  console.log(modeState);
  const option = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
    },
    scales: {
      "y-left": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Temperature(°C)",
          color: modeState === true ? "#fff" : "#000",
        },
        ticks: {
          color: modeState === true ? "#fff" : "#000",
        },
      },
      "y-right": {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "رطوبت (%)",
          color: modeState === true ? "#fff" : "#000",
        },
        ticks: {
          color: modeState === true ? "#fff" : "#000",
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
        ticks: {
          color: modeState === true ? "#fff" : "#000",
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
