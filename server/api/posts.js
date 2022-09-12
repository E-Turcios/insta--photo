const router = require('express').Router();

router.get('/:userid', function (req, res, next) {
  res.send({
    avatar:
      'https://cdn.britannica.com/34/180334-138-4235A017/subordinate-meerkat-pack.jpg?w=800&h=450&c=crop',
    username: 'T-Ender',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/BfemybeKVXCf9pgX9WCxsc.jpg',
    description: 'I love looking up at the stars',
    likes: 10,
    comments: [],
    timestamp: '8 hours ago',
  });
});

module.exports = router;
