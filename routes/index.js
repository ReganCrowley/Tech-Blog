const { Router } = require('express');

const api = require('./api');

const router = Router();

// Set API routes
router.use('/api', api)

router.route('/')
    .get((req, res) => {
        res.render('homepage');
    })

router.route('/dashboard')
    .get((req, res) => {
        res.render('dashboard');
    })

router.route('/login')
    .get((req, res) => {
        res.render('login');
    })

module.exports = router;
