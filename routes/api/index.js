const { Router } = require('express');

// DEV
const data = require('../../database');

const router = Router();

router.route('/ping').get((req, res) => {
  res.json({ message: 'ping success!' });
});

module.exports = router;
