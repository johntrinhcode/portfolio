import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Nav(props) {
    const homeUnderline = (props.isHomeVisible) ? <div className="absolute bottom-0 -mb-2 rounded-md h-1 w-full bg-blue-300 transition-all duration-200 opacity-100"></div> : <div className="absolute bottom-0 -mb-2 rounded-md h-1 w-full transition-all duration-200 opacity-0"></div>
    const blogUnderline = (props.isBlogVisible) ? <div className="absolute bottom-0 -mb-2 rounded-md h-1 w-full bg-blue-300 transition-all duration-200 opacity-100"></div> : <div className="absolute bottom-0 -mb-2 rounded-md h-1 w-full transition-all duration-200 opacity-0"></div>
    const projectsUnderline = (props.isProjectsVisible) ? <div className="absolute bottom-0 -mb-2 rounded-md h-1 w-full bg-blue-300 transition-all duration-200 opacity-100"></div> : <div className="absolute bottom-0 -mb-2 rounded-md h-1 w-full transition-all duration-200 opacity-0"></div>
    const contactUnderline = (props.isContactVisible) ? <div className="absolute bottom-0 -mb-2 rounded-md h-1 w-full bg-blue-300 transition-all duration-200 opacity-100"></div> : <div className="absolute bottom-0 -mb-2 rounded-md h-1 w-full transition-all duration-200 opacity-0"></div>

    return (
        <nav className="fixed top-0 z-20 w-full flex px-8 self-end justify-end flex-row space-x-8 h-16 items-center text-gray-400 bg-white">
            <Link href="/#home">
                <div className="relative flex flex-col">
                    <a className="cursor-pointer hover:text-blue-300">Home</a>
                    { homeUnderline }
                </div>
            </Link>

            <Link href="/#blog">
                <div className="relative flex flex-col">
                    <a className="cursor-pointer hover:text-blue-300">Blog</a>
                    { blogUnderline }
                </div>
            </Link>

            <Link href="/#projects">
                <div className="relative flex flex-col">
                    <a className="cursor-pointer hover:text-blue-300">Projects</a>
                    { projectsUnderline }
                </div>
            </Link>

            <Link href="/#contact">
                <div className="relative flex flex-col">
                    <a className="cursor-pointer hover:text-blue-300">Contact</a>
                    { contactUnderline }
                </div>
            </Link>
        </nav>
    );
};