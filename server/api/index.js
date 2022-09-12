const router = require('express').Router();

router.use('/post', require('./posts'));

module.exports = router;
