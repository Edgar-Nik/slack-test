const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-type',
    'Authorization',
    'Origin',
    'Access-Control-Allow-Origin',
    'Accept',
    'Options',
    'X-Requested-With'
  ]
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/test-slack', async (req, res) => {
  try {
    return res.json({ challenge: req.body.challenge });
  } catch (e) {
    console.log(e);
    return res.send('error');
  }
});

app.listen(3000);
