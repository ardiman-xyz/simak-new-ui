"use client";

import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Tooltip,
  Legend,
} from "chart.js";

import { useRouter } from "next/navigation";

import Heading from "@/components/heading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "smt 1",
    "smt 2",
    "smt 3",
    "smt 4",
    "smt 5",
    "smt 6",
    "smt 7",
    "smt 8",
  ],
  datasets: [
    {
      label: "sks",
      data: [21, 10, 20, 15, 24, 10],
      type: "bar",
      backgroundColor: "rgb(153, 194, 162)",
      order: 2,
    },
    {
      label: "IP",
      data: [3, 3.1, 3.7, 3.9, 4.0, 3.0],
      type: "line",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      fill: false,
      order: 1,
    },
  ] as any,
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
const CreditUnit = () => {
  const router = useRouter();

  // const [selectedPoint, setSelectedPoint] = useState<DataPoint | null>(null);

  // const handlePointClick = (event: any) => {
  //   if (event && event.activePayload && event.activePayload.length > 0) {
  //     const clickedData = event.activePayload[0].payload as DataPoint;
  //     setSelectedPoint(clickedData);

  //     console.log(
  //       `Klik pada titik data: ${clickedData.semester}, SKS: ${clickedData.sks}`
  //     );

  //     router.push(`/dashboard/student/activity/smt=4`);
  //   }
  // };

  return (
    <>
      <Heading title="Aktivitas" description="Aktivitas perkuliahan " />
      <div className="bg-white p-4 rounded shadow-sm mt-5">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default CreditUnit;
