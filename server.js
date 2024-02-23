// In your server.js or api/[...nextapi].js file
const express = require('express');
const next = require('next');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Enable CORS for all routes
  server.use(cors());

  // Use the proxy middleware
  server.use('/api', createProxyMiddleware({ target: 'https://test.api.amadeus.com', changeOrigin: true }));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});


