import React from "react";
import { Line } from "react-chartjs-2";

const dataLine = {
  labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      label: "Jumlah Mahasiswa",
      data: [2000, 3000, 3100, 4090, 4000, 3210],
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <Line data={dataLine} options={options} />
  </>
);

export default LineChart;
