"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "TRANG CHỦ" },
    { href: "/kol", label: "KOL" },
    { href: "/dai-su-gom-trang", label: "ĐẠI SỨ GOM TRĂNG" },
    { href: "/tam-tinh", label: "TÂM TÌNH" },
  ];

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Menu bên trái */}
        <ul className="flex gap-12 text-lg font-semibold">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${
                    isActive
                      ? "font-bold underline underline-offset-4"
                      : "hover:underline underline-offset-4"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logo bên phải */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </nav>
    </header>
  );
}
