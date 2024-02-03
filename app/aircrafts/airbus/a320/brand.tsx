import React from "react";
import { title, subtitle } from "@/components/primitives";
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Tooltip, Button } from "@nextui-org/react";
import { HeartIcon } from '../../Icons/HeartIcon';
import { Chip } from "@nextui-org/react";

export default function App() {
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

    const colors = [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "foreground",
    ];
    return (
        <Card className="max-w-[400px] border-none bg-background/50 dark:bg-default-100/30">
            <CardHeader className="flex gap-3">
                <Image
                    alt="airbus logo"
                    className="object-cover"
                    // height={150}
                    // width={150}
                    height={isMobile ? 100 : 150}
                    width={isMobile ? 100 : 150}
                    radius="sm"
                    shadow="md"
                    src="/images/aircrafts/spec/airbus/airbus-logo.png"
                />
                <div className="flex flex-col px-4">
                    <h1 className={title({ color: "violet", size: "lg", style: "up" })}>
                        AIRBUS
                    </h1>
                    <Divider />
                    <h1 className="text-black font-mono text-4xl text-slate-400">
                        A320
                    </h1>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="text-extralight uppercase dark:text-slate-300 text-slate-500"><span className="text-fuchsia-600 text-bold">AIRCRAFT</span> | cargo compartments</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Checkbox defaultSelected icon={<HeartIcon />}>
                    <span className="text-xs text-slate-400 text-extralight">Favorite</span>
                </Checkbox>
                <div className="flex flex-wrap gap-4">


                </div>
            </CardFooter>
        </Card>
    );
}
