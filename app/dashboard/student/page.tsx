import Heading from "@/components/heading";
import React from "react";

const Page = () => {
  return (
    <div className="p-4 md:max-w-screen-2xl mx-auto">
      <Heading title="Aktivitas" description="Aktivitas perkulihan anda" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
          <p className="text-sm text-gray-700">Jumlah sks</p>
          <h1 className="text-2xl font-bold mt-3">124</h1>
        </div>
        <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
          <p className="text-sm text-gray-700">Jumlah matakuliah</p>
          <h1 className="text-2xl font-bold mt-3">80</h1>
        </div>
        <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
          <p className="text-sm text-gray-700">Pengajuan surat</p>
          <h1 className="text-2xl font-bold mt-3">10</h1>
        </div>
        <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
          <p className="text-sm text-gray-700">Jumlah tagihan</p>
          <h1 className="text-2xl font-bold mt-3">Rp. 2.500.000</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
