import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';

interface Flight {
  type: string;
  scheduledDepartureDate: string;
  flightDesignator: {
    carrierCode: string;
    flightNumber: number;
  };
  flightPoints: {
    iataCode: string;
    departure: {
      timings: {
        qualifier: string;
        value: string;
      }[];
    };
    arrival?: {
      timings: {
        qualifier: string;
        value: string;
      }[];
    };
  }[];
}

interface FlightTableProps {
  flights: Flight[];
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate.replace(',', ''); // Remove the comma after the day
  };

const FlightTable: React.FC<FlightTableProps> = ({ flights }) => {
  return (
    <Table aria-label="Flight Data">
      <TableHeader>
        <TableColumn>Departure Airport</TableColumn>
        <TableColumn>Departure Time</TableColumn>
        <TableColumn>Arrival Airport</TableColumn>
        <TableColumn>Arrival Time</TableColumn>
      </TableHeader>
      <TableBody>
        {flights.map((flight) => (
          <TableRow key={flight.flightDesignator.flightNumber}>
            <TableCell className='text-black text-xl text-fuchsia-700'>{flight.flightPoints[0].iataCode}</TableCell>
            <TableCell>{formatDate(flight.flightPoints[0].departure.timings[0].value)}</TableCell>
            <TableCell className='text-black text-xl text-fuchsia-700'>{flight.flightPoints[1]?.iataCode}</TableCell>
            <TableCell>{formatDate(flight.flightPoints[1]?.arrival?.timings[0].value)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FlightTable;
