import Heading from "@/components/heading";
import React from "react";
import StudentStats from "./_components/studentStats";
import GenderStats from "./_components/GenderStats";
import AgeStats from "./_components/AgeStats";
import ForeignStudentStats from "./_components/ForeignStudentStats";
import RegionStudentStats from "./_components/RegionStudentStats";

const DashboardPage = () => {
  return (
    <div className="py-4 px-8 md:max-w-screen-2xl mx-auto ">
      <div className="mt-6">
        <Heading
          title="Dasboard"
          description="Hy admin, selamant datang di dashboard admin"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
            <p className="text-sm text-gray-700">Fakultas</p>
            <h1 className="text-2xl font-bold mt-3">40</h1>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
            <p className="text-sm text-gray-700">Jumlah mahasiswa</p>
            <h1 className="text-2xl font-bold mt-3">20 K</h1>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
            <p className="text-sm text-gray-700">Dosen</p>
            <h1 className="text-2xl font-bold mt-3">316</h1>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
            <p className="text-sm text-gray-700">Mahasiswa lulus</p>
            <h1 className="text-2xl font-bold mt-3">10 K</h1>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
            <p className="text-sm text-gray-700">Mahasiswa Aktif</p>
            <h1 className="text-2xl font-bold mt-3">12K</h1>
          </div>
        </div>
      </div>
      <div className="mt-10 flex md:flex-row flex-col md:gap-x-6 gap-x-0">
        <StudentStats />
      </div>
      <div className="w-full mt-10 flex md:flex-row flex-col md:gap-x-4 gap-x-0">
        <div className="md:w-1/2 w-full">
          <GenderStats />
        </div>
        <div className="md:w-1/2 w-full">
          <AgeStats />
        </div>
      </div>

      <div className="w-full mt-10 flex md:flex-row flex-col md:gap-x-4 gap-x-0">
        <div className="md:w-1/2 w-full">
          <ForeignStudentStats />
        </div>
        <div className="md:w-1/2 w-full">
          <RegionStudentStats />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
