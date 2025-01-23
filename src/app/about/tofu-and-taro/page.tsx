import Image from "next/image";

const images = [
	<Image
		key="0"
		src={"/tt-1.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
	<Image
		key="1"
		src={"/tt-2.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
	<Image
		key="2"
		src={"/tt-3.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
	<Image
		key="3"
		src={"/tt-4.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
	<Image
		key="4"
		src={"/tt-5.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
	<Image
		key="5"
		src={"/tt-6.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
	<Image
		key="6"
		src={"/tt-7.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
	<Image
		key="7"
		src={"/tt-8.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
	<Image
		key="8"
		src={"/tt-9.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
	<Image
		key="9"
		src={"/tt-10.jpeg"}
		className="rounded-lg object-cover"
		alt="Tofu and Taro"
		fill
	/>,
];

export default function Page() {
	return (
		<section className="flex flex-col gap-8">
			<h1>You've found the secret Tofu and Taro page! Enjoy.</h1>
			<div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{images.map((image, i) => (
					<div
						key={i}
						className="relative h-[300px] w-full overflow-hidden rounded-lg"
					>
						{image}
					</div>
				))}
			</div>
		</section>
	);
}
