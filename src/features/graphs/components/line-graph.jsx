import { Line } from "react-chartjs-2";
import { lineChartGraph } from "./data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
  const option = {
    responsive : true,
    maintainAspectRatio: false,
  };

  return <Line options={option} data={lineChartGraph} />;
}

export default LineGraph;
