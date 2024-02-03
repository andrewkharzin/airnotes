import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function App() {
    return (
        <Table aria-label="Example empty table">
            <TableHeader className="bg-background/50 dark:bg-default-100/30">
                <TableColumn className="text-light uppercase dark:text-slate-300 text-slate-500">Compartment</TableColumn>
                <TableColumn className="text-light uppercase dark:text-slate-300 text-slate-500">Door Dimension Width x Height</TableColumn>
            </TableHeader>
            <TableBody >
                <TableRow key="1">
                    <TableCell className="text-bold uppercase dark:text-slate-300 text-slate-500">FWD</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">182 x 119　(71.5 x 46.9)</TableCell>

                </TableRow>
                <TableRow key="2">
                    <TableCell className="text-bold uppercase dark:text-slate-300 text-slate-500">AFT</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">182 x 119　(71.5 x 46.9)</TableCell>

                </TableRow>
                <TableRow key="3">
                    <TableCell className="text-bold uppercase dark:text-slate-300 text-slate-500">BULK</TableCell>
                    <TableCell className=" text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">95 x 77　(37.6 x 30)</TableCell>

                </TableRow>
            </TableBody>
        </Table>
    );
}
