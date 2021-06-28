import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Nav() {
    const router = useRouter();
    const { pid } = router.query;

    return (
        <nav className="fixed top-0 z-20 w-full flex px-8 self-end justify-end flex-row space-x-8 h-16 items-center text-gray-400 bg-white">
            <Link href="/">
                <span className="cursor-pointer hover:text-blue-300">Home</span>
            </Link>

            <Link href="#blog">
                <span className="cursor-pointer hover:text-blue-300">Blog</span>
            </Link>

            <Link href="#projects">
                <span className="cursor-pointer hover:text-blue-300">Projects</span>
            </Link>

            <Link href="#contact">
                <span className="cursor-pointer hover:text-blue-300">Contact</span>
            </Link>
        </nav>
    );
};