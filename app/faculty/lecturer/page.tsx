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

const lecturers = [
  {
    id: 1,
    name: "Ardiman, S.Pd",
    student_guidance_count: 150,
    subjects_covered_count: 50,
  },
  {
    id: 2,
    name: "Budi, M.Pd",
    student_guidance_count: 120,
    subjects_covered_count: 45,
  },
  {
    id: 3,
    name: "Citra, S.Pd",
    student_guidance_count: 180,
    subjects_covered_count: 55,
  },
  {
    id: 4,
    name: "Darma, M.Pd",
    student_guidance_count: 135,
    subjects_covered_count: 48,
  },
  {
    id: 5,
    name: "Eka, S.Pd",
    student_guidance_count: 170,
    subjects_covered_count: 60,
  },
  {
    id: 6,
    name: "Fajar, M.Pd",
    student_guidance_count: 155,
    subjects_covered_count: 52,
  },
  {
    id: 7,
    name: "Gita, S.Pd",
    student_guidance_count: 140,
    subjects_covered_count: 47,
  },
  {
    id: 8,
    name: "Hadi, M.Pd",
    student_guidance_count: 125,
    subjects_covered_count: 43,
  },
  {
    id: 9,
    name: "Indah, S.Pd",
    student_guidance_count: 160,
    subjects_covered_count: 58,
  },
  {
    id: 10,
    name: "Joko, M.Pd",
    student_guidance_count: 145,
    subjects_covered_count: 49,
  },
];

const LecturerPage = () => {
  const router = useRouter();

  return (
    <div className="py-4 px-8 md:max-w-screen-2xl mx-auto ">
      <div className="mt-6 bg-white p-4 rounded shadow">
        <Heading
          title="Dosen"
          description="List dosen fakultas keguruan dan ilmu pendidikan"
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
              <TableHead className="text-center">Jumlah bimbingan</TableHead>
              <TableHead className="text-center">
                Jumlah matakuliah diampuh
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lecturers.map((lecturer, index) => (
              <TableRow
                key={lecturer.id}
                className="cursor-pointer"
                onClick={() =>
                  router.push(`/faculty/lecturer/detail/${lecturer.id}`)
                }
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-bold underline">
                  {lecturer.name}
                </TableCell>
                <TableCell className="text-center">
                  {lecturer.student_guidance_count}
                </TableCell>
                <TableCell className="text-center">
                  {lecturer.subjects_covered_count}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LecturerPage;
