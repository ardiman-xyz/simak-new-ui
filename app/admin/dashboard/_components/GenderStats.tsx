"use client";

import Heading from "@/components/heading";
import React from "react";
import { Bar } from "react-chartjs-2";

const GenderStats = () => {
  const dataBar = {
    labels: ["FEBI", "FKIP", "TEKNIK", "KEDOKTERAN", "HUKUM", "FISIP"],
    datasets: [
      {
        label: "Laki-laki",
        data: [2000, 1000, 650, 1065, 500, 600],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Perempuan",
        data: [2000, 1000, 650, 1065, 500, 600],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
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
    <div className="w-full p-4 rounded bg-white shadow">
      <Heading
        title="Statistik Gender Mahasiswa"
        description="Statistik jumlah mahasiswa laki-laki dan perempuan per fakultas"
      />
      <div className="w-full flex items-center justify-center mt-6">
        <div className="w-[500px]">
          <Bar data={dataBar} options={options} />
        </div>
      </div>
    </div>
  );
};

export default GenderStats;
