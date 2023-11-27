"use client";

import React, { useRef } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";

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

import type { InteractionItem } from "chart.js";

import { faker } from "@faker-js/faker";

import Heading from "@/components/heading";
import { useRouter } from "next/navigation";

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

  const studentData = labels.map(() =>
    faker.datatype.number({ min: 50, max: 300 })
  );
  const dosenData = labels.map(() =>
    faker.datatype.number({ min: 10, max: 50 })
  );
  const tendikData = labels.map(() =>
    faker.datatype.number({ min: 1, max: 10 })
  );

  const rasioMahasiswaDosen = studentData.map(
    (val, index) => val / dosenData[index]
  );
  const rasioMahasiswaTendik = studentData.map(
    (val, index) => val / tendikData[index]
  );

  const averageRasioDosen =
    rasioMahasiswaDosen.reduce((a, b) => a + b, 0) / rasioMahasiswaDosen.length;
  const averageRasioTendik =
    rasioMahasiswaTendik.reduce((a, b) => a + b, 0) /
    rasioMahasiswaTendik.length;

  const normalizedRasioDosen = parseFloat(
    (averageRasioDosen / (averageRasioDosen + averageRasioTendik)).toFixed(2)
  );
  const normalizedRasioTendik = parseFloat(
    (averageRasioTendik / (averageRasioDosen + averageRasioTendik)).toFixed(2)
  );

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
        label: "Mahasiswa",
        data: studentData,
        type: "bar",
        backgroundColor: "rgb(3,105,161)",
        order: 2,
      },

      {
        label: "Dosen",
        data: dosenData,
        type: "bar",
        backgroundColor: "rgb(255, 183, 3)",
        order: 2,
      },

      {
        label: "Tendik",
        data: tendikData,
        type: "bar",
        backgroundColor: "rgb(251, 133, 0)",
        order: 2,
      },
    ] as any,
  };

  const dataRasio = {
    labels: ["Rasio Mahasiswa/Dosen", "Rasio Mahasiswa/Tendik"],
    datasets: [
      {
        data: [normalizedRasioDosen, normalizedRasioTendik],
        backgroundColor: ["#0369A1", "#F7862C"],
        hoverBackgroundColor: ["#0369A1", "#F7862C"],
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

  const printElementsAtEvent = (elements: InteractionItem[]) => {
    if (!elements.length) return;

    console.log(elements.length);
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
    // printElementsAtEvent(getElementsAtEvent(chart, event));
    if (!elementInfo) {
      return;
    }

    const { year, dataCount } = elementInfo;

    return router.push(
      `/department/filter?type=${roleLabel}&year=${year}&count=${dataCount}`
    );
  };

  return (
    <div className="w-full flex md:flex-row flex-col">
      <div className="md:w-3/5 w-full">
        <Heading
          title="Statistik sumber daya"
          description="Statistik sumber daya per tahun"
        />
        <div className="p-4 rounded bg-white shadow mt-6">
          <Bar ref={chartRef} options={options} data={data} onClick={onClick} />
        </div>
      </div>
      <div className="md:w-2/5 w-full md:ml-3 ml-0 mt-5 md:mt-0">
        <Heading title="Rasio" description="Statistik rasio sumber daya" />
        <div className="rounded bg-white shadow mt-6 h-[428px] flex items-center justify-center p-4">
          <Pie options={options} data={dataRasio} />
        </div>
      </div>
    </div>
  );
};

export default StudentStats;
