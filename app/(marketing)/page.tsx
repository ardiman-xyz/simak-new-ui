import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm px-8 py-4 bg-amber-100 text-amber-700 rounded-lg uppercase">
          <Medal className="h-6 w-6 mr-2" />
          SIMAK
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Sistem Informasi Akademik
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-green-800 to-green-400 text-white px-4 p-2 rounded-md pb-4 w-fit">
          UM KENDARI
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        SIMAK di UM Kendari: platform akademik terintegrasi untuk akses mudah ke
        informasi kuliah, nilai, dan administrasi. Efisien dan transparan,
        meningkatkan pengalaman belajar.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-in">Login sekarang</Link>
      </Button>
    </div>
  );
}
