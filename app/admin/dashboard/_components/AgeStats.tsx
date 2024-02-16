"use client";

import Heading from "@/components/heading";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import AgeStatsPoly from "./AgeStatsPoly";

const AgeStats = () => {
  const [view, setView] = useState("bar");

  const handleChange = (event: any) => {
    setView(event.target.value);
  };

  const dataBar = {
    labels: ["17-19", "20-22", "23-25", "26-28", "29-31", "32+"],
    datasets: [
      {
        label: "Jumlah mahasiswa",
        data: [2000, 2500, 1500, 1000, 500, 250],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full p-4 rounded bg-white shadow h-full">
      <div className="w-full flex items-start justify-between">
        <Heading
          title="Persebaran Usia Mahasiswa"
          description="Histogram jumlah mahasiswa berdasarkan usia"
        />

        <div>
          <select
            id="chart_view_category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={view}
            onChange={handleChange}
          >
            <option selected>Pilih</option>
            <option value="bar">Bar chart</option>
            <option value="plot">Box plot chart</option>
          </select>
        </div>
      </div>
      {view === "bar" ? (
        <div className="w-full flex items-center justify-center  mt-6">
          <div className="w-[500px]">
            <Bar data={dataBar} options={options} />
          </div>
        </div>
      ) : (
        <div>
          <AgeStatsPoly />
        </div>
      )}
    </div>
  );
};

export default AgeStats;
