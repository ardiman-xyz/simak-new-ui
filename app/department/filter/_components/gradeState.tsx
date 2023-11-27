import { ArrowUpCircle, TrendingUp } from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(ArcElement, Tooltip, Legend);

const GradeStats = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "T (Tunda)"],
    datasets: [
      {
        label: "# of Votes",
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

  const totalVotes = data.datasets[0].data.reduce((a, b) => a + b, 0);

  const labelsInPercentage = data.labels.map(
    (label, index) =>
      `${label} (${((data.datasets[0].data[index] / totalVotes) * 100).toFixed(
        2
      )}%)`
  );

  data.labels = labelsInPercentage;

  return (
    <Card className="bg-white rounded">
      <CardHeader>
        <CardTitle>Nilai mahasiswa</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="w-[300px]">
          <Pie data={data} />
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeStats;
