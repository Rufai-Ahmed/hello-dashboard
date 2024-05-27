import { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const, // Use 'as const' to assert the type
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
