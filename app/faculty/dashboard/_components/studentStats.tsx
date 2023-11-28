"use client";

import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import { getDatasetAtEvent, getElementsAtEvent } from "react-chartjs-2";

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
  ArcElement,
} from "chart.js";

import { useRouter } from "next/navigation";
import type { InteractionItem } from "chart.js";

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
  Legend,
  ArcElement
);

const StudentStats = () => {
  const router = useRouter();

  const labels = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "ADM",
        data: [120, 130, 140, 160, 150, 140, 130, 120, 110],
        backgroundColor: "rgb(3,105,161)",
      },
      {
        label: "PBI",
        data: [80, 90, 100, 110, 120, 130, 120, 110, 100],
        backgroundColor: "rgb(255, 183, 3)",
      },
      {
        label: "PG PAUD",
        data: [80, 90, 110, 110, 90, 100, 60, 40, 70],
        backgroundColor: "rgb(251, 133, 0)",
      },
      {
        label: "PTI",
        data: [80, 90, 26, 68, 120, 100, 30, 40, 70],
        backgroundColor: "rgb(251, 133, 0)",
      },
    ] as any,
  };

  const chartRef = useRef();

  const printDatasetAtEvent = (dataset: InteractionItem[]) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    return data.datasets[datasetIndex].label;
  };

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    return {
      year: data.labels[index],
      dataCount: data.datasets[datasetIndex].data[index],
    };
  };

  const onClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    const roleLabel = printDatasetAtEvent(
      getDatasetAtEvent(chart, event)
    ).toLowerCase();
    const elementInfo = printElementAtEvent(getElementsAtEvent(chart, event));
    if (!elementInfo) {
      return;
    }

    const { year, dataCount } = elementInfo;

    return router.push(
      `/department/filter?type=${roleLabel}&year=${year}&count=${dataCount}`
    );
  };

  return (
    <div className="md:w-3/5 w-full">
      <Heading
        title="Statistik mahasiswa"
        description="Statistik mahasiswa per prodi tiap tahun"
      />
      <div className="p-4 rounded bg-white shadow mt-6">
        <Bar ref={chartRef} options={options} data={data} onClick={onClick} />
      </div>
    </div>
  );
};

export default StudentStats;
