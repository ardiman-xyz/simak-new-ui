"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import GenderStats from "./_components/genderStats";
import GradeStats from "./_components/gradeState";
import FilterForm from "./_components/filterForm";

const students = [
  {
    id: 1,
    name: "Ardiman",
    nim: "21711170",
    jk: "L",
    jsks: 120,
    jmatkul: 20,
  },
  {
    id: 2,
    name: "Budi Cahyo",
    nim: "21711171",
    jk: "L",
    jsks: 110,
    jmatkul: 18,
  },
  {
    id: 3,
    name: "Citra Prasiska",
    nim: "21711172",
    jk: "P",
    jsks: 115,
    jmatkul: 19,
  },
  {
    id: 4,
    name: "Diana Pungki",
    nim: "21711173",
    jk: "P",
    jsks: 105,
    jmatkul: 17,
  },
  {
    id: 5,
    name: "Eko kurniawan khannedy",
    nim: "21711174",
    jk: "L",
    jsks: 125,
    jmatkul: 21,
  },
  {
    id: 6,
    name: "Fina ambarita",
    nim: "21711175",
    jk: "P",
    jsks: 110,
    jmatkul: 18,
  },
  {
    id: 7,
    name: "Gita gunawan",
    nim: "21711176",
    jk: "P",
    jsks: 115,
    jmatkul: 19,
  },
  {
    id: 8,
    name: "Hadi",
    nim: "21711177",
    jk: "L",
    jsks: 105,
    jmatkul: 17,
  },
  {
    id: 9,
    name: "Irfan anjlok",
    nim: "21711178",
    jk: "L",
    jsks: 120,
    jmatkul: 20,
  },
  {
    id: 10,
    name: "Joko",
    nim: "21711179",
    jk: "L",
    jsks: 125,
    jmatkul: 21,
  },
];

const Page = () => {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const router = useRouter();

  return (
    <div className="py-4 px-8 md:max-w-screen-2xl mx-auto ">
      <div className="w-full flex items-center justify-between mt-4">
        <div>
          <h3 className="text-foreground text-xl font-medium">
            Data mahasiswa 2019
          </h3>
          <div className="text-muted-foreground text-sm">
            <p>List data mahasiswa tahun akademik 2019/2020 Ganjil</p>
          </div>
        </div>
        <FilterForm />
      </div>
      <div className="w-full flex md:flex-row flex-col md:gap-x-5 space-x-0 mt-7">
        <div className="md:w-2/3 w-full ">
          <Card className="bg-white rounded">
            <CardHeader>
              <CardTitle>Mahasiswa</CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="border">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Nama</TableHead>
                    <TableHead>NIM</TableHead>
                    <TableHead>JK</TableHead>
                    <TableHead>J. sks</TableHead>
                    <TableHead>J. matakuliah</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((item, index) => (
                    <TableRow
                      key={index}
                      className="cursor-pointer"
                      onClick={() =>
                        router.push(`/department/student/detail/${item.id}`)
                      }
                    >
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.nim}</TableCell>
                      <TableCell>{item.jk}</TableCell>
                      <TableCell>{item.jsks}</TableCell>
                      <TableCell>{item.jmatkul}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-1/3 w-full mt-4 md:mt-0 flex flex-col gap-y-5">
          <GenderStats />
          <GradeStats />
        </div>
      </div>
    </div>
  );
};

export default Page;
