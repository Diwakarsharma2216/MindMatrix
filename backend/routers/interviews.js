const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');

// Create a new interview
router.post('/', async (req, res) => {
  try {
    const { userId, question, response, feedback, score } = req.body;
    const interview = new Interview({
      userId,
      question,
      response,
      feedback,
      score,
    });
    await interview.save();
    res.status(201).json(interview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


// Assuming you have a router for interviews
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const interview = await Interview.findOne({ userId });
    res.json(interview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
