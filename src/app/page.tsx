import { RocketIcon } from "lucide-react";
import { Link } from "next-view-transitions";

export default function Home() {
	return (
		<section className="flex flex-col gap-8">
			<h1 className="flex flex-wrap items-center gap-2 text-xl">
				<span>
					Hello, my name is <b>John Trinh</b>.
				</span>
				<LookingForOpportunitiesBadge />
			</h1>
			<p className="text-neutral-600">
				I'm a full stack software developer based in the Washington D.C. metro
				area of the United States. I create web experiences that are performant,
				accessible and beautifully designed. Some of my favorite tools are
				React, Next.js, TypeScript, TailwindCSS, and more.
			</p>
			<p className="text-neutral-600">
				When it comes to creating a product users love to use, I believe every
				detail matters.
			</p>
			<p className="text-neutral-600">
				I'm currently searching for new opportunities. If you'd like to work
				together and build something great,{" "}
				<Link className="text-blue-500" href="/contact">
					let's talk
				</Link>
				!
			</p>
		</section>
	);
}

function LookingForOpportunitiesBadge() {
	return (
		<Link href="/contact">
			<div className="flex items-center justify-center gap-2 rounded-full border border-blue-400 bg-blue-50 px-2 py-1 text-blue-700">
				<RocketIcon className="size-4" />
				<span className="font-normal text-sm">Available for Opportunities</span>
			</div>
		</Link>
	);
}
