"use client";

import { Link } from "@nextui-org/link";
import Image from "next/image"
import { useEffect, useState } from 'react';
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import SvgComponent from "./ac";


export default function Home() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // You can adjust the breakpoint as needed
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{/* <Image
				priority
				src="/Logo.svg"
				height={235}
				width={1080}
				alt="Follow us on Twitter"
			/> */}
			{/* <SvgComponent
			 	width={800}
				height={175}
				fill="red"
			 /> */}
			<Image
				priority
				src="/ac_line.svg"
				height={175}
				width={800}
				alt="Line"
			/>
			<Image
				priority
				src="/airnotes.svg"
				height={isMobile ? 20 : 39}
                width={isMobile ? 200 : 400}
				alt="airnotes"
			/>


			<div className="inline-block max-w-lg text-center justify-center">
				<p className="text-xl sm:text-xs md:text-md lg:text-lg xl:text-xl">DO YOU JOB AS FLY&nbsp;</p>

				<br />
				{/* <h1 className="mt-2 text-bold text-3xl text text-purpule-800">
					productive and reliable with
				</h1> */}
				{/* <h1 className={title({ color: "violet", size: "lg", style: "up" })}>
					AIRNOTES
				</h1> */}
			</div>
		</section>
	);
}
