import { ArrowUpCircle, TrendingUp } from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderStats = () => {
  const data = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        label: "# of Votes",
        data: [230, 140],
        backgroundColor: ["rgb(3,105,161)", "rgb(247,134,44)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className="bg-white rounded">
      <CardHeader>
        <CardTitle>Jenis Kelamin</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="w-[250px]">
          <Pie data={data} />
        </div>
      </CardContent>
    </Card>
  );
};

export default GenderStats;
