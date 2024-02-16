"use client";

import Heading from "@/components/heading";
import React from "react";
import { Bar } from "react-chartjs-2";

const ForeignStudentStats = () => {
  const data = {
    labels: ["United States", "Canada", "France", "Germany"],
    datasets: [
      {
        label: "Jumlah Mahasiswa Asing",
        data: [200, 150, 100, 250],
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
    <div className="w-full p-4 rounded bg-white shadow">
      <Heading
        title="Persebaran Mahasiswa Asing"
        description="Bar chart jumlah mahasiswa asing berdasarkan negara asal"
      />
      <div className="w-full flex items-center justify-center mt-6">
        <div className="w-[500px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ForeignStudentStats;
