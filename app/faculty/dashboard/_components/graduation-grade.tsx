import { Pie } from "react-chartjs-2";
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

const GraduationGrade = () => {
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

  interface GraduateData {
    [key: number]: number;
  }

  interface StudentsData {
    [key: number]: number;
  }
  // data dummy
  const graduateData: GraduateData = {
    2016: 80,
    2017: 90,
    2018: 70,
    2019: 85,
    2020: 90,
  };

  const totalStudents: StudentsData = {
    2016: 100,
    2017: 100,
    2018: 120,
    2019: 150,
    2020: 180,
  };

  function getGraduationRatio(year: number) {
    const total = totalStudents[year];
    const graduate = graduateData[year];

    return (graduate / total) * 100;
  }

  const data = {
    labels: [2016, 2017, 2018, 2019],
    datasets: [
      {
        label: "Rasio Kelulusan",
        data: [
          getGraduationRatio(2016),
          getGraduationRatio(2017),
          getGraduationRatio(2018),
          getGraduationRatio(2019),
          getGraduationRatio(2020),
        ],
        backgroundColor: "rgb(3,105,161)",
        borderColor: "rgb(255,255,255)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="md:w-2/5 w-full md:ml-3 ml-0 mt-5 md:mt-0">
      <Heading title="Rasio" description="Rasio kelulusan prodi" />
      <div className="rounded bg-white shadow mt-6 h-[428px] flex items-center justify-center p-4">
        <Pie options={options} data={data} />
      </div>
    </div>
  );
};

export default GraduationGrade;
