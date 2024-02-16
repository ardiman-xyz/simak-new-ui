"use client";

import Heading from "@/components/heading";
import React from "react";
import { Bar } from "react-chartjs-2";

const RegionStudentStats = () => {
  const data = {
    labels: [
      "Kabupaten Bombana",
      "Kabupaten Buton",
      "Kabupaten Buton Selatan",
      "Kabupaten Buton Tengah",
      "Kabupaten Buton Utara",
      "Kabupaten Kolaka",
      "Kabupaten Kolaka Timur",
      "Kabupaten Kolaka Utara",
      "Kabupaten Konawe",
      "Kabupaten Konawe Kepulauan",
      "Kabupaten Konawe Selatan",
      "Kabupaten Konawe Utara",
      "Kabupaten Muna",
      "Kabupaten Muna Barat",
    ],
    datasets: [
      {
        label: "Jumlah Mahasiswa",
        data: [
          200, 150, 100, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,
        ],
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
    <div className="w-full p-4 rounded bg-white shadow ">
      <Heading
        title="Persebaran Mahasiswa Berdasarkan Wilayah"
        description="Bar chart jumlah mahasiswa berdasarkan wilayah"
      />
      <div className="w-full flex items-center justify-center mt-6">
        <div className="w-[500px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default RegionStudentStats;
