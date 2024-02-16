"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();

  const [roleSelected, setRoleSelected] = useState<
    string | number | readonly string[] | undefined
  >();

  const handleRoleChange = (event: any) => {
    setRoleSelected(event.target.value);
  };

  const handleClick = () => {
    let destination = "/dashboard/student";

    if (roleSelected === null) return;

    switch (roleSelected) {
      case "student":
        destination = "/dashboard/student";
        break;
      case "department":
        destination = "/department/dashboard";
        break;
      case "faculty":
        destination = "/faculty/dashboard";
        break;
      case "admin":
        destination = "/admin/dashboard";
        break;
      default:
        break;
    }

    if (destination) {
      router.push(destination);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl h-screen pt-10 flex rounded-xl overflow-hidden">
      <div className="h-[600px] lg:w-1/2 w-full bg-white p-8">
        <div className="flex items-center gap-x-3">
          <Image src="/images/logo.png" alt="logo" width={200} height={200} />
        </div>
        <div className="mt-5">
          <p className="text-sm">Selamat datang di</p>
          <h2 className="text-xl font-bold">
            Sistem manajemen informasi akademik
          </h2>
          <p className="text-sm">Universitas Muhammadiyah Kendari</p>
          <p className="text-sm mt-3 font-thin">
            Silahkan masukkan username & password anda
          </p>
        </div>
        <div className="mt-7">
          <div className="flex flex-col gap-y-4">
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
              <select
                onChange={handleRoleChange}
                id="countries"
                value={roleSelected}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Pilih role</option>
                <option value="student">Mahasiswa</option>
                <option value="department">Prodi</option>
                <option value="faculty">Fakultas</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <Button
                type="button"
                className="w-full"
                size="lg"
                onClick={handleClick}
              >
                Login
              </Button>
              <Button className="w-full" size="lg" variant="outline" asChild>
                <Link href="/">Kembali</Link>
              </Button>
            </div>
          </div>
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
