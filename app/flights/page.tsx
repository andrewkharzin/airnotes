"use client";

import { title } from '@/components/primitives';
import { useEffect, useState } from 'react';
import createAmadeusClient from '@/amadeusConfig';
import FlightTable from '@/app/flights/FlightTable';


export default function FlightPage() {
	const [flightData, setFlightData] = useState(null);
  
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const amadeus = createAmadeusClient();
  
		  // Log the constructed Amadeus client
		  console.log('Amadeus client:', amadeus);
  
		  // Make the API request
		  const response = await amadeus.schedule.flights.get({
			carrierCode: 'MU',
			flightNumber: '592',
			scheduledDepartureDate: '2024-02-02',
		  });
  
		  if (response.result) {
			setFlightData(response.result);
		  } else {
			console.error('Error fetching flight data:', response.error);
		  }
		} catch (error) {
		  console.error('Error fetching flight data:', error.message);
		}
	  };
  
	  fetchData();
	}, []);
  
	return (
		
		<div>
		{flightData && <FlightTable flights={[flightData.data[0]]} />}
	  </div>
	);
  }
