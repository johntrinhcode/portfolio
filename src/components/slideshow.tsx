"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
	<Image
		key="0"
		src={"/about-1.jpg"}
		className="rounded-lg"
		alt="My and my fiance"
		width={300}
		height={300}
		priority
	/>,
	<Image
		key="1"
		src={"/about-2.jpg"}
		className="rounded-lg"
		alt="Me holding a camera"
		width={300}
		height={300}
		priority
	/>,
	<Image
		key="2"
		src={"/about-3.jpeg"}
		className="rounded-lg"
		alt="Tofu (left) and Taro (right)"
		width={300}
		height={300}
		priority
	/>,
];

export function Slideshow() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const changePhoto = () => setIndex((curr) => (curr + 1) % images.length);
		const id = setInterval(changePhoto, 5000);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="relative h-[300px] w-[300px]">
			<Image
				key="0"
				src={"/about-1.jpg"}
				className={clsx(
					"absolute top-0 left-0 rounded-lg transition-all duration-200",
					index === 0 ? "opacity-100" : "opacity-0",
				)}
				alt="My and my fiance"
				width={300}
				height={300}
				priority
			/>
			<Image
				key="1"
				src={"/about-2.jpg"}
				className={clsx(
					"absolute top-0 left-0 rounded-lg transition-all duration-200",
					index === 1 ? "opacity-100" : "opacity-0",
				)}
				alt="Me holding a camera"
				width={300}
				height={300}
				priority
			/>
			<Image
				key="2"
				src={"/about-3.jpeg"}
				className={clsx(
					"absolute top-0 left-0 rounded-lg transition-all duration-200",
					index === 2 ? "opacity-100" : "opacity-0",
				)}
				alt="Tofu (left) and Taro (right)"
				width={300}
				height={300}
				priority
			/>
		</div>
	);
}
