const router = require('express').Router();

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'main';
    next();
});

router.get('/', (req, res) => {
    res.render('home/index', { title: "Renato Mission - Backend Developer" });
});

router.get('/about', (req, res) => {
    res.render('home/about', { title: "ABOUT | Renato Mission - Backend Developer" });
});

router.get('/works', (req, res) => {
    res.render('home/works', { title: "WORKS | Renato Mission - Backend Developer" });
});

router.get('/contact', (req, res) => {
    res.render('home/contact', { title: "CONTACT | Renato Mission - Backend Developer" });
});



module.exports = router;