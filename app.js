const express = require('express');
const cors = require('cors');
const products = require('./products.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
