const express = require('express');
const router = express.Router();

// Sample route
router.post('/login', (req, res) => {
    res.send('Login route works!');
});

// Define signup route
router.post('/signup', (req, res) => {
    res.send('signup success');
}); 


module.exports = router;
