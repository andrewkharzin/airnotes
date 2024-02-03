import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function App() {
    return (
        <Table aria-label="Example empty table">
            <TableHeader className="bg-background/50 dark:bg-default-100/30">
                <TableColumn className="text-light uppercase dark:text-slate-300 text-slate-500">Compartment</TableColumn>
                <TableColumn className="text-right text-light uppercase dark:text-slate-300 text-slate-500">A320</TableColumn>
                <TableColumn className="text-right text-light uppercase dark:text-slate-300 text-slate-500">A321</TableColumn>
                <TableColumn className="text-right text-light uppercase dark:text-slate-300 text-slate-500">Floor limitation</TableColumn>
                
            </TableHeader>
            <TableBody >
                <TableRow key="1">
                    <TableCell className="text-bold uppercase dark:text-slate-300 text-slate-500">FWD</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">3,402kg　(7,500lbs)</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">5,670kg　(12,500lbs)</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">488kg/m²　(100lbs/ft²)</TableCell>
                

                </TableRow>
                <TableRow key="2">
                    <TableCell className="text-bold uppercase dark:text-slate-300 text-slate-500">AFT</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">4,536kg　(10,000lbs)</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">5,670kg　(12,500lbs)</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">488kg/m²　(100lbs/ft²)</TableCell>
                    


                </TableRow>
                <TableRow key="3">
                    <TableCell className="text-bold uppercase dark:text-slate-300 text-slate-500">BULK</TableCell>
                    <TableCell className=" text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">1,497kg　(3,300lbs)</TableCell>
                    <TableCell className=" text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">1,497kg　(3,300lbs)</TableCell>
                    <TableCell className=" text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">732kg/m²　(150lbs/ft²)</TableCell>

                </TableRow>
            </TableBody>
        </Table>
    );
}
