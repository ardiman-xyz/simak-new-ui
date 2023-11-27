"use client";

import AcademicGrade from "@/app/dashboard/student/data/academic-grades";
import CreditUnit from "@/app/dashboard/student/data/credit-unit";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  return (
    <div className="py-4 px-8 md:max-w-screen-2xl mx-auto ">
      <Button
        onClick={() => router.push("/department/student/detail/1/subject")}
      >
        Next
      </Button>
      <div className="mt-10 flex md:flex-row flex-col md:gap-x-6 gap-x-0">
        <div className="md:w-3/5 w-full">
          <CreditUnit />
        </div>
        <div className="md:w-2/5 w-full">
          <AcademicGrade />
        </div>
      </div>
    </div>
  );
};

export default Page;
