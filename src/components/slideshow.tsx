"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Slideshow() {
	const [index, setIndex] = useState(0);

	const images = [
		{
			src: "/about-1.jpg",
			alt: "Me and my fiance",
		},
		{
			src: "/about-2.jpg",
			alt: "Me holding a camera",
		},
		{
			src: "/about-3.jpeg",
			alt: "Tofu (left) and Taro (right)",
		},
	];

	useEffect(() => {
		const changePhoto = () => setIndex((curr) => (curr + 1) % images.length);
		const id = setInterval(changePhoto, 5000);
		return () => clearInterval(id);
	}, []);

	return (
		<motion.div
			key={images[index].src}
			initial={{ opacity: 0, filter: "blur(.25rem)" }}
			animate={{ opacity: 1, filter: "blur(0rem)" }}
		>
			{images.map((image, i) => (
				<Image
					key={image.src}
					className={clsx("rounded-lg", i !== index && "hidden")}
					src={image.src}
					alt={image.alt}
					width={300}
					height={300}
				/>
			))}
		</motion.div>
	);
}
