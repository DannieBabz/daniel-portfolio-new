import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client"

// import { useState } from "react";
const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function NavBar() {

  return (
    <>
      <nav className="hidden w-full items-center py-6 bg-[rgba(12,12,14,0.85)] border-b fixed text top-0 right-0 left-0 z-40 backdrop-blur-xs lg:flex">
        <div className=" flex w-full mx-auto justify-around items-center">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-muted hover:text-accent">
              <span className="text-accent">//</span>daniel.dev
            </h1>
          </Link>
          <div>
            <ul
              className="flex gap-5">
              {links.map((link) => (
                <motion.li key={link.label}
                whileHover={{ scale: 1.2, skewY: 2, skewX: 2 }}
                whileTap={{ scale: 0.95 }}
                 className="text-muted p-4 hover:text-accent">
                  <Link href={link.href}>{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/Babatunde Daniel Similoluwa CV.pdf"
              className="text-accent text justify-center px-5 py-3 items-center border-accent border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50" download
            >
              ↓ Resume
            </Link>
          </motion.div>
        </div>
      </nav>


      <nav className="w-screen items-center justify-evenly py-6 bg-[rgba(12,12,14,0.85)] border-b fixed text top-0 right-0 left-0 z-50 backdrop-blur-xs lg:hidden">
        <div className="container flex justify-between items-center px-10">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <h1 className="text-muted hover:text-accent">
                <span className="text-accent">//</span>daniel.dev
              </h1>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger className="text-muted hover:text-accent lg:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent className="bg-[rgba(12,12,14,0.85)] pt-12 px-10 text backdrop-blur-xs">
              <SheetTitle></SheetTitle>
              <ul className="flex flex-col text-center gap-5 mt-6">
                {links.map((link) => (
                  <li key={link.label} className="text-muted hover:text-accent">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <Link href="/Babatunde Daniel Similoluwa CV.pdf"
                className="text-accent text justify-center items-center border-accent border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 py-2" download
              >
                ↓ Resume
              </Link>
            </SheetContent> 
            </Sheet>         
        </div>
      </nav>


    </>
  );
}
