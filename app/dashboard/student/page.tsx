import Heading from "@/components/heading";
import React from "react";
import CreditUnit from "./data/credit-unit";
import AcademicGrade from "./data/academic-grades";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";

const Page = () => {
  return (
    <div className="py-4 px-8 md:max-w-screen-2xl mx-auto">
      <Alert className="text-sm text-yellow-800 rounded-lg bg-yellow-50 border border-yellow-800">
        <AlertCircle className="h-4 w-4 " />
        <AlertTitle>Pengumuman!</AlertTitle>
        <AlertDescription>
          Penawaran matakuliah akan ditutup pada 23/04/2025
        </AlertDescription>
      </Alert>

      <div className="mt-6">
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
      <div className="mt-10 flex md:flex-row flex-col md:gap-x-6 gap-x-0">
        <div className="md:w-3/5 w-full">
          <CreditUnit />
        </div>
        <div className="md:w-2/5 w-full">
          <AcademicGrade />
        </div>
      </div>
    </div>
  );
};

export default Page;
