"use client";

import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "AI Features", href: "#ai" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <Container className="h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Overton CRM"
            width={130}
            height={36}
            priority
          />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-kanit text-sm font-medium text-dark hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Button href="#" variant="outline" size="sm">
            Log In
          </Button>
          <Button href="#cta" variant="primary" size="sm">
            Start Free Trial →
          </Button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-5 h-0.5 bg-dark block"></span>
          <span className="w-5 h-0.5 bg-dark block"></span>
          <span className="w-5 h-0.5 bg-dark block"></span>
        </button>
      </Container>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-kanit text-sm font-medium text-dark"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <hr />
          <button className="font-kanit text-sm text-dark text-left">Log In</button>
          <Link
            href="#cta"
            className="font-kanit text-sm font-semibold bg-brand text-white px-4 py-2.5 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Start Free Trial →
          </Link>
        </div>
      )}
    </nav>
  );
}