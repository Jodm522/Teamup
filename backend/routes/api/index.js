// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const genresRouter= require('./genres.js');


router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});


router.use ('/genres', genresRouter)

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

module.exports = router;
