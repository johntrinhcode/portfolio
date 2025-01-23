"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SlideshowProps {
	baseUrl: string;
}
export function Slideshow({ baseUrl }: SlideshowProps) {
	const [index, setIndex] = useState(0);
	const images = [
		<Image
			key="0"
			src={`${baseUrl}/about-1.jpg`}
			className="rounded-lg"
			alt="My and my fiance"
			width={300}
			height={300}
			priority
		/>,
		<Image
			key="1"
			src={`${baseUrl}/about-2.jpg`}
			className="rounded-lg"
			alt="Me holding a camera"
			width={300}
			height={300}
			priority
		/>,
		<Image
			key="2"
			src={`${baseUrl}/about-3.jpeg`}
			className="rounded-lg"
			alt="Tofu (left) and Taro (right)"
			width={300}
			height={300}
			priority
		/>,
	];

	useEffect(() => {
		const changePhoto = () => setIndex((curr) => (curr + 1) % images.length);
		const id = setInterval(changePhoto, 5000);
		return () => clearInterval(id);
	}, [images.length]);

	return images.map((image, i) =>
		i === index ? (
			<motion.div
				key={i}
				initial={{ opacity: 0, filter: "blur(.25rem)" }}
				animate={{ opacity: 1, filter: "blur(0rem)" }}
			>
				{image}
			</motion.div>
		) : null,
	);
}
