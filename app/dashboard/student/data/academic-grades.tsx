"use client";

import Heading from "@/components/heading";
import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["A", "B", "C", "D", "E", "T (Tunda)"],
  datasets: [
    {
      label: "#matakuliah",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const AcademicGrade = () => {
  return (
    <div>
      <Heading title="Nilai" description="Evaluasi nilai akademik " />
      <div className="bg-white p-4 rounded shadow-sm mt-5 h-[330px] w-full flex items-center justify-center">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default AcademicGrade;
