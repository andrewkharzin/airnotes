"use client";

import { title } from "@/components/primitives";
import Image from "next/image";
import Brand from "./brand";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, } from "@nextui-org/react";

import DoorDim from "./doorDim";
import UldTable from "./uuldTable";
import LimitTable from "./limitTable";


export default function AircraftPage() {
	return (
		<>
			<div className="mb-10">
				<Brand />
				{/* <h1 className={title({ color: "violet", size: "lg", style: "up" })}>
				AIRBUS
			</h1>

			<h1 className="text-4xl text-bold ">
				A320
			</h1>
			<p className="text-light uppercase text-slate-400">cargo compartments</p> */}

				<Image
					priority
					src="/images/aircrafts/spec/airbus/a320/airbus_A320-6.svg"
					height={477}
					width={1000}
					alt="Follow us on Twitter"
				/>

			</div>
			<Divider className="" />
			<p className="mt-10 text-extralight uppercase dark:text-slate-300 text-slate-500"><span className="text-fuchsia-600 text-bold">CARGODOOR</span> | DIMENSIONS<span className="ml-2 text-fuchsia-600 text-bold">ULD</span>  | CAPACITIES</p>
			<div className="flex flex-wrap gap-8 ">
				<div className="mt-10">

					<DoorDim />
				</div>
				<div className="mt-10 mb-10">


					<UldTable />
				</div>
			</div>
			<Divider className="" />
			<p className="mt-10 text-extralight uppercase dark:text-slate-300 text-slate-500"><span className="text-fuchsia-600 text-bold">COMPARTMENT</span> | Weight Limitation</p>
			<div className="flex flex-wrap gap-8 mb-10 ">
	
				<div className="mt-10">

					<LimitTable />
				</div>
			</div>
			<Divider className="" />
			<p className="mt-10 text-extralight uppercase dark:text-slate-300 text-slate-500"><span className="text-fuchsia-600 text-bold">COMPARTMENT</span> | BULK</p>
			<div className="mt-10">

			<Image
				priority
				src="/images/aircrafts/spec/airbus/a320/bulk.svg"
				height={338}
				width={400}
				alt="Follow us on Twitter"
			/>
			</div>
		</>

	);
}
