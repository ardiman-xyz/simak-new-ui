import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Student {
  id: number;
  name: string;
  age: number;
  location: string;
}

interface LoacationChartProps {
  students: Student[];
}

interface LocationCount {
  [key: string]: number;
}

const LocationChart = ({ students }: LoacationChartProps) => {
  const locations = students.map((s) => s.location);

  const locationCounts: LocationCount = locations.reduce((acc, location) => {
    if (!acc[location]) {
      acc[location] = 0;
    }

    acc[location]++;
    return acc;
  }, {} as LocationCount);

  const data = {
    labels: Object.keys(locationCounts),
    datasets: [
      {
        data: Object.values(locationCounts),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Card className="bg-white rounded">
        <CardHeader>
          <CardTitle>Student Locations</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Pie data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationChart;
