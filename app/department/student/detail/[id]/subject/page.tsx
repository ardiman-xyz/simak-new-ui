import React from "react";

import Heading from "@/components/heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpCircle, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Page = () => {
  const courseData = [
    { id: 1, name: "Basis Data", code: "BS002", sks: 3, grade: "A" },
    {
      id: 1,
      name: "Bahasa Inggris Advance",
      code: "BS302",
      sks: 2,
      grade: "A",
    },
    { id: 1, name: "Pembrograman Dasar", code: "PD002", sks: 3, grade: "B" },
    {
      id: 1,
      name: "Rekayasa Perangkat Lunak",
      code: "BS302",
      sks: 4,
      grade: "A",
    },
    {
      id: 1,
      name: "Komputasi Berbasis Jaringan",
      code: "KJ302",
      sks: 4,
      grade: "A",
    },
  ];

  return (
    <div className="py-4 px-8 md:max-w-screen-2xl mx-auto">
      <Heading
        title="Aktivitas perkuliahan"
        description="Aktivitas perkuliahan semester 4 tahun akademik 2024/2025 / Ganjil"
      />

      <div className="w-full flex md:flex-row flex-col md:gap-x-5 space-x-0 mt-7">
        <div className="md:w-2/3 w-full ">
          <Card className="bg-white rounded">
            <CardHeader>
              <CardTitle>Matakuliah</CardTitle>
              <CardDescription>List matakuliah yang diampuh</CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="border">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Matakuliah</TableHead>
                    <TableHead>Kode</TableHead>
                    <TableHead>SKS</TableHead>
                    <TableHead>NILAI</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courseData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.code}</TableCell>
                      <TableCell>{item.sks}</TableCell>
                      <TableCell>{item.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-1/3 w-full mt-4 md:mt-0 flex flex-col gap-y-5">
          <Card className="bg-white rounded">
            <CardHeader>
              <CardTitle>Grapik performa</CardTitle>
              <CardDescription>Nilai dan sks yang diampuh</CardDescription>
            </CardHeader>
            <CardContent className="flex">
              <div className="w-1/2">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold">22</h1>
                  <div className="flex items-center gap-x-1 ml-4">
                    <ArrowUpCircle className="w-5 h-5 fill-green-600 text-white" />
                    <p className="text-sm">15%</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  compared last semester
                </p>
              </div>
              <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-white to-green-200">
                <TrendingUp className="w-10 h-10  text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded">
            <CardHeader>
              <CardTitle>Lecturers</CardTitle>
              <CardDescription>
                List lecturers who gave you grade
              </CardDescription>
            </CardHeader>
            <CardContent className="flex">
              <ul className="w-full flex flex-col gap-y-3">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-muted-foreground font-semibold ml-3">
                      Ardiman Tampurang, S.Pd., M.Eng
                    </p>
                  </div>
                  <div>
                    <span className="h-5 w-5 bg-yellow-500 block"></span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-muted-foreground font-semibold ml-3">
                      Alfiah Fajriani, S.T., M.Eng
                    </p>
                  </div>
                  <div>
                    <span className="h-5 w-5 bg-green-600 block"></span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-muted-foreground font-semibold ml-3">
                      Muhammad Khairul Nugraha, S.T., M.Eng
                    </p>
                  </div>
                  <div>
                    <span className="h-5 w-5 bg-red-600 block"></span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-muted-foreground font-semibold ml-3">
                      Yusril magento, S.T., M.Eng
                    </p>
                  </div>
                  <div>
                    <span className="h-5 w-5 bg-green-600 block"></span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
