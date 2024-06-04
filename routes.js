const express = require('express');
const router = express.Router();
const data = require('./data.json');

require('dotenv').config(); 

const baseUrl = process.env.BASE_URL;


router.get('/cards', (req, res) => {
  res.json(data);
});

router.get('/cards/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const card = data.cards.find(card => card.value_int === id);

  if (card) {
    card.image_url = `${baseUrl}${card.image_url}`;
    res.json(card);
  } else {
    res.status(400).json({ error: 'Item not found' });
  }
});

module.exports = router;