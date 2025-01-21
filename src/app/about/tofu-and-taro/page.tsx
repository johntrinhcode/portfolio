import Image from "next/image";

export default function Page() {
	return (
		<section className="flex flex-col gap-8">
			<h1>You've found the secret Tofu and Taro page! Enjoy.</h1>
			<div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{Array(10)
					.fill(0)
					.map((_, i) => (
						<div
							className="relative h-[300px] w-full overflow-hidden rounded-lg"
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
						>
							<Image
								src={`/tt-${i + 1}.jpeg`}
								alt="image"
								fill
								objectFit="cover"
							/>
						</div>
					))}
			</div>
		</section>
	);
}
