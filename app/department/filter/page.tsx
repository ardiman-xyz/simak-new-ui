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
import AgeChart from "./_components/ageStats";
import LocationChart from "./_components/locationStas";

const students = [
  {
    id: 1,
    name: "John Doe",
    nim: "0001",
    jk: "L",
    age: 19,
    location: "Jakarta",
    jsks: 110,
    jmatkul: 10,
  },
  {
    id: 2,
    name: "Jane Smith",
    nim: "0002",
    jk: "P",
    age: 20,
    location: "Bandung",
    jsks: 120,
    jmatkul: 12,
  },
  {
    id: 3,
    name: "Bob Williams",
    nim: "0003",
    jk: "L",
    age: 18,
    location: "Surabaya",
    jsks: 100,
    jmatkul: 8,
  },
  {
    id: 4,
    name: "Sarah Lee",
    nim: "0004",
    jk: "P",
    age: 21,
    location: "Medan",
    jsks: 130,
    jmatkul: 15,
  },
  {
    id: 5,
    name: "Mike Davis",
    nim: "0005",
    jk: "L",
    age: 19,
    location: "Jakarta",
    jsks: 105,
    jmatkul: 11,
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
          <AgeChart students={students} />
          <LocationChart students={students} />
        </div>
      </div>
    </div>
  );
};

export default Page;
