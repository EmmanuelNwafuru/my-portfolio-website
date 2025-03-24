"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { GithubIcon, LinkedinIcon, Menu, TwitterIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <nav className="w-full py-2 sm:py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <div>
          <Image
            src="/logos/logo-fill-black.png"
            alt="Exoduspad Logo"
            width={100}
            height={100}
            className="h-4 sm:h-9 w-auto dark:invert"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-muted-foreground nav-text">
        <a href="#" className="hover:text-foreground">
          Home
        </a>
        <a href="#" className="hover:text-foreground">
          About
        </a>
        <a href="#" className="hover:text-foreground">
          Portfolio
        </a>
        <a href="#" className="hover:text-foreground">
          Blog
        </a>
        <a href="#" className="hover:text-foreground">
          Contact
        </a>
      </div>

      {/* Apply Button */}
      <div className="flex gap-2 sm:gap-3 items-center">
        <Menu role="button" className="md:hidden" />
        <div className="flex text-muted-foreground gap-5">
          <LinkedinIcon
            role="button"
            className="h-5 hover:text-foreground transition"
          />
          <TwitterIcon
            role="button"
            className="h-5 hover:text-foreground transition"
          />
          <GithubIcon
            role="button"
            className="h-5 hover:text-foreground transition"
          />
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;

// Implement quick chat
