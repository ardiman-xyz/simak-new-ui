"use client";

import React from "react";
import { Bar, Pie } from "react-chartjs-2";

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

import ChartDataLabels from "chartjs-plugin-datalabels";

import Heading from "@/components/heading";
import { useRouter } from "next/navigation";
import LineChart from "./LineChart";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

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

  const options = {
    plugins: {
      datalabels: {
        formatter: (value: any, ctx: any) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#000000",
      },
    },
  };

  const dataPie = {
    labels: ["FEBI", "FKIP", "TEKNIK", "KEDOKTERAN", "HUKUM", "FISIP"],
    datasets: [
      {
        label: "Jumlah mahasiswa",
        data: [4000, 2000, 1300, 2130, 1000, 1200],
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

  return (
    <div className="w-full flex md:flex-row flex-col">
      <div className="md:w-1/2 w-full rounded bg-white shadow p-4">
        <Heading
          title="Mahasiswa"
          description="Statistik jumlah mahasiswa per fakultas"
        />
        <div className="w-full flex items-center justify-center mt-6 ">
          <div className="w-[500px]">
            <Pie
              data={dataPie}
              options={options}
              plugins={[ChartDataLabels]}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full md:ml-3 ml-0 mt-5 md:mt-0 rounded bg-white shadow p-4">
        <Heading
          title="Perkembangan jumlah mahasiswa"
          description="Perkembangan jumlah mahasiswa"
        />
        <div className=" mt-6 flex items-center p-4 flex-col">
          <LineChart />
          <div className="mt-5">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">22</h1>
              <div className="flex items-center gap-x-1 ml-4">
                <ArrowDownCircle className="w-5 h-5 fill-red-600 text-white" />
                <p className="text-sm">10%</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Result comparing the past 2 years
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-white to-red-200">
            <TrendingDown className="w-10 h-10  text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStats;
