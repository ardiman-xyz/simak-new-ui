import StudentStats from "@/app/department/dashboard/_components/studentStats";
import Heading from "@/components/heading";
import React from "react";

const DetailDepartmentPage = () => {
  return (
    <div className="py-4 px-8 md:max-w-screen-2xl mx-auto ">
      <div className="mt-6">
        <Heading
          title="Aktivitas"
          description="Aktivitas perkulihan di prodi adm pendidikan"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
            <p className="text-sm text-gray-700">Jumlah mahasiswa</p>
            <h1 className="text-2xl font-bold mt-3">1470</h1>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
            <p className="text-sm text-gray-700">Dosen</p>
            <h1 className="text-2xl font-bold mt-3">60</h1>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
            <p className="text-sm text-gray-700">Mahasiswa lulus</p>
            <h1 className="text-2xl font-bold mt-3">700</h1>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded">
            <p className="text-sm text-gray-700">Mahasiswa belum lulus</p>
            <h1 className="text-2xl font-bold mt-3">770</h1>
          </div>
        </div>
      </div>
      <div className="mt-10 flex md:flex-row flex-col md:gap-x-6 gap-x-0">
        <StudentStats />
      </div>
    </div>
  );
};

export default DetailDepartmentPage;
