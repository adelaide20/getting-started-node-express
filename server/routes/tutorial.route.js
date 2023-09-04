const express = require('express');
const router = express.Router();

const { getAllTutorials } = require('../controllers/tutorial.ctlr');

// getting all thetutorials
router.get('/tutorials', getAllTutorials)

module.exports = router