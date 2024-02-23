

import "@/styles/globals.css";

import { Roboto, Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const roboto_init = Roboto({
	subsets: ['latin'],
	weight: ['100', '300' ,'500', '700'],
	variable: '--font-roboto'
})

const play = Playfair_Display({
	subsets: ['latin'],
	weight: ['600'],
	variable: '--font-playfair_display'
})


export default function RootLayout({
	children,
	isDashboardPage = false // Default to false, assuming it's not a dashboard page
}: {
	children: React.ReactNode;
	isDashboardPage?: boolean;
}) {

	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
					{!isDashboardPage && <Navbar />}
						{/* <Navbar /> */}
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">NextUI</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
