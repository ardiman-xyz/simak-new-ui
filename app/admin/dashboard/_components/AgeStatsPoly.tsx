import Heading from "@/components/heading";
import React from "react";
import Plot from "react-plotly.js";

const AgeStatsPoly = () => {
  const data = [
    {
      y: [
        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
        35,
      ],
      type: "box",
      name: "Usia Mahasiswa",
      boxpoints: "all",
      jitter: 0.3,
      pointpos: -1.8,
    },
  ];

  const layout = {
    title: "Persebaran Usia Mahasiswa",
    yaxis: {
      title: "Usia",
      zeroline: false,
    },
  };

  return (
    <div className="w-full mt-10">
      <div className="w-full flex items-center justify-center mt-6">
        <div>
          <Plot data={data} layout={layout} />
        </div>
      </div>
    </div>
  );
};

export default AgeStatsPoly;
