// amadeusConfig.js
import Amadeus from 'amadeus';

const amadeusConfig = {
  clientId: '',
  clientSecret: '',
};

const createAmadeusClient = () => new Amadeus(amadeusConfig);

export default createAmadeusClient;
