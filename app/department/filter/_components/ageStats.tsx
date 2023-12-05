import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Student {
  id: number;
  name: string;
  age: number;
}

interface AgeChartProps {
  students: Student[];
}

const AgeChart: React.FC<AgeChartProps> = ({ students }) => {
  const ages = students.map((student) => student.age);

  const avgAge = ages.reduce((prev, curr) => prev + curr, 0) / ages.length;

  const data = {
    labels: ["Average Age"],
    datasets: [
      {
        label: "Years",
        data: [avgAge],
        backgroundColor: "#007bff",
      },
    ],
  };

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

  return (
    <div>
      <Card className="bg-white rounded">
        <CardHeader>
          <CardTitle>Average Student Age</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Bar options={options} data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeChart;
