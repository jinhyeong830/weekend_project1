const express = require('express');
const multer = require('multer');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('blog');
});

module.exports = router;
