"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Kiểm tra xem có đang ở một trong các trang dropdown không
  const isDropdownActive = pathname ? ["/kol", "/dai-su-gom-trang", "/dai-su-dong-hanh", "/so-dstt", "/nhan-vien-3h"].includes(pathname) : false;

  return (
    <header className="w-full bg-white relative z-40">
      <nav className="max-w-[80%] mx-auto flex items-center justify-between px-0 py-4">
        {/* Nút hamburger cho mobile */}
        <button
          onClick={handleToggleMobileMenu}
          className="md:hidden inline-flex items-center justify-center p-2 rounded"
          aria-label="Mở menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Menu bên trái (desktop) */}
        <ul className="hidden md:flex flex-1 justify-evenly text-xl font-futura-bold">
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

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/30" onClick={() => setIsMobileMenuOpen(false)} />
          {/* sidebar panel: half screen width */}
          <div className="relative h-full w-2/3 bg-white px-4 py-6 flex flex-col">
            <div className="flex items-center justify-center">
              <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src="/img/logo.png" alt="Logo" width={90} height={90} priority />
              </Link>
            </div>

            <ul className="mt-8 space-y-6 text-xl font-futura-bold text-center text-black">
              <li>
                <Link
                  href="/"
                  className={`${pathname === "/" ? "underline underline-offset-4" : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  TRANG CHỦ
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full flex items-center justify-center gap-2 pt-2"
                  aria-expanded={isMobileDropdownOpen}
                >
                  <span>ĐẠI SỨ GOM TRĂNG</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
              {isMobileDropdownOpen && (
                <>
                  <li>
                    <Link
                      href="/dai-su-dong-hanh"
                      className={`${pathname === "/dai-su-dong-hanh" ? "underline underline-offset-4" : ""} text-base font-normal text-gray-600`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      ĐẠI SỨ ĐỒNG HÀNH
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/80-dstt"
                      className={`${pathname === "/80-dstt" ? "underline underline-offset-4" : ""} text-base font-normal text-gray-600`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      80 ĐSTT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nhan-vien-3h"
                      className={`${pathname === "/nhan-vien-3h" ? "underline underline-offset-4" : ""} text-base font-normal text-gray-600`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      NHÂN VIÊN 3H
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}