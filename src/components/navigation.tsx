"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex py-16">
      <Home />
      <Link
        className={clsx("mr-4", pathname === "/work" && "text-blue-500")}
        href="/work"
      >
        Work
      </Link>
      <Link
        className={clsx("mr-4", pathname === "/about" && "text-blue-500")}
        href="/about"
      >
        About
      </Link>
      <Link
        className={clsx("mr-4", pathname === "/contact" && "text-blue-500")}
        href="/contact"
      >
        Contact
      </Link>
    </nav>
  );
}

function Home() {
  const pathname = usePathname();
  const show = pathname !== "/";
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="home"
          className="line-clamp-1 flex gap-4 truncate"
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: 1,
            width: "fit-content",
          }}
          exit={{ opacity: 0, width: 0 }}
        >
          <Link className="font-bold" href="/">
            John Trinh
          </Link>
          <span>/</span>
          <div />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
