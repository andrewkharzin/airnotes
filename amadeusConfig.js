// amadeusConfig.js
import Amadeus from 'amadeus';

const amadeusConfig = {
  clientId: 'YmUQLo3Q3XGAStSZqpgYJUSBiFhcYZ62',
  clientSecret: 'bftjoVyaaVQ0eA8z',
};

const createAmadeusClient = () => new Amadeus(amadeusConfig);

export default createAmadeusClient;
