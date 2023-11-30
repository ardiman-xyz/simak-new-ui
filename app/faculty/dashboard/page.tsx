"use client";

import Heading from "@/components/heading";
import StudentStats from "./_components/studentStats";
import GraduationGrade from "./_components/graduation-grade";
import Link from "next/link";

const FacultyDashboardPage = () => {
  return (
    <div className="py-4 px-8 md:max-w-screen-2xl mx-auto ">
      <div className="mt-6">
        <Heading
          title="Dashboard fakultas"
          description="Fakultas keguruan dan ilmu pendidikan"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          <Link href="/faculty/department">
            <div className="bg-white shadow-sm border border-gray-200 p-4 rounded hover:cursor-pointer hover:bg-sky-50 hover:border-sky-500 transition-all">
              <p className="text-sm text-gray-700 ">Program Studi</p>
              <h1 className="text-2xl font-bold mt-3">6</h1>
            </div>
          </Link>
          <Link href="/faculty/lecturer">
            <div className="bg-white shadow-sm border border-gray-200 p-4 rounded hover:bg-sky-50 hover:border-sky-500 cursor-pointer transition-all">
              <p className="text-sm text-gray-700">Dosen</p>
              <h1 className="text-2xl font-bold mt-3">60</h1>
            </div>
          </Link>
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded hover:bg-sky-50 hover:border-sky-500 cursor-pointer transition-all">
            <p className="text-sm text-gray-700">Mahasiswa</p>
            <h1 className="text-2xl font-bold mt-3">1700</h1>
          </div>
          <div className="bg-white shadow-sm border border-gray-200 p-4 rounded hover:bg-sky-50 hover:border-sky-500 cursor-pointer transition-all">
            <p className="text-sm text-gray-700">
              Presentase kelulusan mahasiswa
            </p>
            <h1 className="text-2xl font-bold mt-3">60%</h1>
          </div>
        </div>
      </div>

      <div className="mt-10 md:flex-row flex-col md:gap-x-4 flex gap-x-0">
        <StudentStats />
        <GraduationGrade />
      </div>
    </div>
  );
};

export default FacultyDashboardPage;
