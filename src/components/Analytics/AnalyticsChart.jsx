import React, { useEffect } from "react";
import { Line } from "react-chartjs-2"; // Importing the Line chart from Chart.js
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

// Register the required components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  // Mock data: Total connections made over the last 12 months
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Labels for the X-axis
    datasets: [
      {
        label: "Total Connections Made", // The label for the graph
        data: [50, 75, 120, 200, 150, 170, 180, 210, 250, 300, 350, 400], // The actual data values
        fill: false,
        borderColor: "rgb(145,71,255)", // Line color
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "",
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return `${value} connections`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis at 0
      },
    },
  };

  return (
    <div
      className="analytics-container"
      style={{ width: "80%", margin: "0 auto", padding: "20px" }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default AnalyticsChart;
