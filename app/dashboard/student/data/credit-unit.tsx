"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { faker } from "@faker-js/faker";
import { useRouter } from "next/navigation";

import Heading from "@/components/heading";

type DataPoint = {
  semester: string;
  sks: number;
};

const labels = Array.from({ length: 14 }, (_, index) => `Smt ${index + 1}`);

const data: DataPoint[] = labels.map((label) => ({
  semester: label,
  sks: faker.datatype.number({ min: 0, max: 24 }),
}));

const CreditUnit = () => {
  const router = useRouter();

  const [selectedPoint, setSelectedPoint] = useState<DataPoint | null>(null);

  const handlePointClick = (event: any) => {
    if (event && event.activePayload && event.activePayload.length > 0) {
      const clickedData = event.activePayload[0].payload as DataPoint;
      setSelectedPoint(clickedData);

      console.log(
        `Klik pada titik data: ${clickedData.semester}, SKS: ${clickedData.sks}`
      );

      router.push(`/dashboard/student/activity/smt=4`);
    }
  };

  return (
    <>
      <Heading title="Aktivitas" description="Aktivitas perkuliahan " />
      <div className="bg-white p-4 rounded shadow-sm mt-5">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} onClick={handlePointClick}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="semester" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sks"
              name="SKS"
              stroke="rgb(3,105,161)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CreditUnit;
