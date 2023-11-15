import Image from "next/image";
import React from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container mx-auto max-w-6xl h-screen pt-10 flex rounded-xl overflow-hidden">
      <div className="h-[600px] lg:w-1/2 w-full bg-white p-8">
        <div className="flex items-center gap-x-3">
          <Image src="/images/logo.png" alt="logo" width={200} height={200} />
        </div>
        <div className="mt-5">
          <p className="text-sm">Selamat datang di</p>
          <h2 className="text-xl font-bold">SIMAK</h2>
          <p className="text-sm">Universitas Muhammadiyah Kendari</p>
          <p className="text-sm mt-3 font-thin">
            Silahkan masukkan username & password anda
          </p>
        </div>
        <div className="mt-7">
          <form className="flex flex-col gap-y-4">
            <div className="w-full">
              <label
                htmlFor="username"
                className="text-sm text-gray-800 block mb-2 font-medium"
              >
                Username
              </label>
              <Input id="username" placeholder="Masukkan username..." />
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="text-sm text-gray-800 block mb-2 font-medium"
              >
                Password
              </label>
              <Input id="password" placeholder="Masukkan password..." />
            </div>
            <div className="w-full">
              <label className="text-sm text-gray-800 block mb-2 font-medium">
                Role
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="faculty">Fakultas</SelectItem>
                  <SelectItem value="department">Prodi</SelectItem>
                  <SelectItem value="student">Mahasiswa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <Button className="w-full" size="lg" asChild>
                <Link href="/dashboard/student">Login</Link>
              </Button>
              <Button className="w-full" size="lg" variant="outline" asChild>
                <Link href="/">Kembali</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[600px] lg:w-1/2 hidden lg:block bg-bittersweetShimmer">
        <div className="w-full h-[600px] object-cover">
          <Image
            src="/images/slider2.png"
            alt="Gambar"
            className="w-full h-[600px] object-center object-cover"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
