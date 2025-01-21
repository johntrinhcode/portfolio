export default function Page() {
	const experiences = [
		{
			company: "Interos",
			role: "Senior Software Engineer",
			from: "March 2022",
			to: "November 2024",
			description:
				"Led frontend development for key features, optimized platform performance, maintained an accessible UI component library, and mentored junior engineers to deliver scalable enterprise solutions.",
		},
		{
			company: "Oracle",
			role: "Software Engineer",
			from: "December 2021",
			to: "March 2022",
			description:
				"Enhanced code reliability and functionality by implementing Cypress tests in CI/CD pipelines and upgrading frontend frameworks across projects.",
		},
		{
			company: "Counterpointe Solutions, Inc",
			role: "Software Engineer",
			from: "July 2020",
			to: "December 2021",
			description:
				"Improved UI/UX workflows with Figma and Vue.js, optimized database query performance, and developed microservices to support over 80,000 users.",
		},
	];
	return (
		<section className="flex flex-col gap-8">
			<h1 className="flex flex-wrap items-center gap-2 text-xl">
				<span>Work</span>
			</h1>
			<p className="text-neutral-600">
				Below is a summary of my professional work experience, you can also
				download my full resume{" "}
				<a className="text-blue-500" href="/JohnTrinh_Resume_2024.docx.pdf">
					here
				</a>
				.
			</p>
			{experiences.map((e) => (
				<div key={e.company} className="flex flex-col gap-2 text-neutral-600">
					<div className="flex gap-2">
						<span>
							<b>{e.role}</b>
						</span>
						<span>{e.company}</span>
					</div>
					<div className="flex gap-2">
						<span>{e.from}</span>
						<span>-</span>
						<span>{e.to}</span>
					</div>
					<div>{e.description}</div>
				</div>
			))}
		</section>
	);
}
