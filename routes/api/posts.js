const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    res.send('Posts route');
});

// Export the router
module.exports = router;