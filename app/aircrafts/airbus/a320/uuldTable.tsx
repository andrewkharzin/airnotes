import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function App() {
    return (
        <Table aria-label="Example empty table">
            <TableHeader className="bg-background/50 dark:bg-default-100/30">
                <TableColumn className="text-light uppercase dark:text-slate-300 text-slate-500">Compartment</TableColumn>
                <TableColumn className="text-right text-light uppercase dark:text-slate-300 text-slate-500">A320</TableColumn>
                <TableColumn className="text-right text-light uppercase dark:text-slate-300 text-slate-500">A321</TableColumn>
                
            </TableHeader>
            <TableBody >
                <TableRow key="1">
                    <TableCell className="text-bold uppercase dark:text-slate-300 text-slate-500">FWD</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">3 Containers</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">5 Containers</TableCell>
                

                </TableRow>
                <TableRow key="2">
                    <TableCell className="text-bold uppercase dark:text-slate-300 text-slate-500">AFT</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">4 Containers</TableCell>
                    <TableCell className="text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">5 Containers</TableCell>
                    


                </TableRow>
                <TableRow key="3">
                    <TableCell className="text-bold uppercase dark:text-slate-300 text-slate-500">Total</TableCell>
                    <TableCell className=" text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">7 Containers</TableCell>
                    <TableCell className=" text-right text-bold text-sm text-center text-slate-700 dark:text-slate-300">10 Containers</TableCell>

                </TableRow>
            </TableBody>
        </Table>
    );
}
