export default function Page() {
	return (
		<section className="flex flex-col gap-8">
			<h1 className="flex flex-wrap items-center gap-2 text-xl">
				<span>Contact</span>
			</h1>
			<p className="text-neutral-600">
				If you'd like to reach out, you can find me at:
			</p>
			<ul className="list-inside list-disc text-neutral-600">
				<li>
					Email:{" "}
					<a className="underline" href="mailto:johntrinhcode@gmail.com">
						johntrinhcode@gmail.com
					</a>
				</li>
				<li>
					LinkedIn:{" "}
					<a
						className="underline"
						target="_blank"
						href="https://www.linkedin.com/in/john-trinh-code/"
						rel="noreferrer"
					>
						https://www.linkedin.com/in/john-trinh-code/
					</a>
				</li>
			</ul>
		</section>
	);
}
