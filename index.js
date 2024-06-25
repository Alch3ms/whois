const express = require('express');
const whois = require('whois-json');

const app = express();
const port = 3000;

// WHOIS endpoint with URL parameter
app.get('/whois/:domain', async (req, res) => {
  const { domain } = req.params;

  try {
    const result = await whois(domain);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch WHOIS information' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});