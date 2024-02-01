import { Link } from "@nextui-org/link";
import Image  from "next/image"
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			            <Image
							priority
							src="/Logo.svg"
							height={200}
							width={200}
							alt="Follow us on Twitter"
							/>
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Organize&nbsp;</h1>
				<h1 className={title({ color: "violet" })}> your activites &nbsp;</h1>
				<br />
				<h1 className="mt-2 text-bold text-3xl text text-purpule-800">
					productive and reliable with 
				</h1>
				<h2 className="mt-5 font-mono uppercase text-4xl text-bold bg-gradient-to-r from-slate-200 to-fuchsia-800 text-transparent bg-clip-text">
					airnotes
				</h2>
			</div>
		</section>
	);
}
