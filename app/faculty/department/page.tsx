"use client";

import React from "react";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import Heading from "@/components/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const departments = [
  {
    id: 1,
    name: "Administrasi Pendidikan",
    student_count: 780,
    lecturer_count: 40,
  },
  {
    id: 2,
    name: "Pendidikan Bahasa Inggris",
    student_count: 930,
    lecturer_count: 50,
  },
  {
    id: 3,
    name: "Pendidikan Guru Pendidikan Anak Usia Dini",
    student_count: 690,
    lecturer_count: 20,
  },
  {
    id: 4,
    name: "Pendidikan Teknologi Informasi",
    student_count: 400,
    lecturer_count: 15,
  },
];

const FacultyPage = () => {
  const router = useRouter();

  return (
    <div className="py-4 px-8 md:max-w-screen-2xl mx-auto ">
      <div className="mt-6 bg-white p-4 rounded shadow">
        <Heading
          title="Program studi"
          description="List program studi di fakultas keguruan dan ilmu pendidikan"
        />

        <Button className="mt-6">
          <PlusCircle className="h-4 w-4 mr-2" />
          Tambah baru
        </Button>

        <Table className="mt-3 border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">No.</TableHead>
              <TableHead>Prodi</TableHead>
              <TableHead className="text-center">Jumlah dosen</TableHead>
              <TableHead className="text-center">Jumlah Mahasiswa</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departments.map((department, index) => (
              <TableRow
                key={department.id}
                className="cursor-pointer"
                onClick={() =>
                  router.push(`/faculty/department/detail/${department.id}`)
                }
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-bold underline">
                  {department.name}
                </TableCell>
                <TableCell className="text-center">
                  {department.lecturer_count}
                </TableCell>
                <TableCell className="text-center">
                  {department.student_count}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FacultyPage;
