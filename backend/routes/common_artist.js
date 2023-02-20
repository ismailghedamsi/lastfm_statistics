const express = require('express');
const router = express.Router();

// Common artist routes
router.get('/', (req, res) => {
  // Get a list of common artists between friends
  console.log("aaaa")
  res.send("common artists")
});

module.exports = router;