"use client";

import {
  BarChart,
  CalendarCheck2,
  Compass,
  GraduationCap,
  Layout,
  LibraryBig,
  List,
  UserCircle,
  Wallet,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard/student",
  },
  {
    icon: GraduationCap,
    label: "Perkuliahan",
    href: "/transaction",
  },
  {
    icon: Wallet,
    label: "Pembayaran",
    href: "/transaction",
  },
  {
    icon: CalendarCheck2,
    label: "Jadwal kuilah",
    href: "/transaction",
  },
  {
    icon: LibraryBig,
    label: "Kurikulum",
    href: "/transaction",
  },
  {
    icon: UserCircle,
    label: "Profil",
    href: "/profile",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
