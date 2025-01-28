import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "John Trinh",
	description: "The portfolio of John Trinh",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en">
				<head>
					<Script
						async
						defer
						strategy="lazyOnload"
						data-website-id={process.env.UMAMI_WEBSITE_ID}
						src="/script.js"
					/>
				</head>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<div className="flex min-h-screen flex-col px-8 md:px-32 xl:px-96">
						<Navigation />
						<main className="grow">{children}</main>
						<Footer />
					</div>
				</body>
			</html>
		</ViewTransitions>
	);
}
