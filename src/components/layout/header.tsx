"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Kiểm tra xem có đang ở một trong các trang dropdown không
  const isDropdownActive = pathname ? ["/kol", "/dai-su-gom-trang", "/dai-su-dong-hanh", "/so-dstt", "/nhan-vien-3h"].includes(pathname) : false;

  return (
    <header className="w-full bg-white">
      <nav className="max-w-[80%] mx-auto flex items-center justify-between px-0 py-4">
        {/* Menu bên trái */}
        <ul className="flex flex-1 justify-evenly text-xl font-futura-bold">
          {/* Trang chủ */}
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "font-futura-bold underline underline-offset-4"
                  : "hover:underline underline-offset-4"
              }`}
            >
              TRANG CHỦ
            </Link>
          </li>

          {/* Dropdown Menu */}
          <li className="relative">
            <button
              onClick={handleToggleDropdown}
              className={`${
                isDropdownActive
                  ? "font-futura-bold underline underline-offset-4"
                  : "hover:underline underline-offset-4"
              } flex items-center gap-1`}
            >
              ĐẠI SỨ GOM TRĂNG
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/dai-su-dong-hanh"
                      className="block px-4 py-2 text-sm hover:underline underline-offset-4 transition-all"
                      onClick={handleCloseDropdown}
                    >
                      ĐẠI SỨ ĐỒNG HÀNH
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/80-dstt"
                      className="block px-4 py-2 text-sm hover:underline underline-offset-4 transition-all"
                      onClick={handleCloseDropdown}
                    >
                      80 ĐSTT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nhan-vien-3h"
                      className="block px-4 py-2 text-sm hover:underline underline-offset-4 transition-all"
                      onClick={handleCloseDropdown}
                    >
                      NHÂN VIÊN 3H
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Logo bên phải */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={110}
            height={110}
            priority
          />
        </Link>
      </nav>
    </header>
  );
}