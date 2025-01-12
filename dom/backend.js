const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = 3000;

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  if (a && b) {
    res.send({ sum: parseInt(a) + parseInt(b) });
  } else {
    res.status(400).send('Please provide both a and b as query parameters');
  }
});

app.get('/interest', (req, res) => {
  const { principal, rate, time } = req.query;
  if (principal && rate && time) {
    res.send({ interest: (principal * rate * time) / 100 });
  } else {
    res.status(400).send('Please provide all parameters: principal, time, and rate');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
