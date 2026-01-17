const express = require('express');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route per la homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Routing for certifications page
app.get('/certifications', (req, res) => {
    res.render('certifications');
});

// Routing for privacy page
app.get('/privacy', (req, res) => {
    res.render('privacy');
});

// Routing for sitemap
app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

// Routing per il dettaglio del progetto 01
app.get('/projects/portfolio-item-01', (req, res) => {
    res.render('projects/portfolio-item-01');
});

// Routing per il dettaglio del progetto 02
app.get('/projects/portfolio-item-02', (req, res) => {
    res.render('projects/portfolio-item-02');
});

// Routing per il dettaglio del progetto 03
app.get('/projects/portfolio-item-03', (req, res) => {
    res.render('projects/portfolio-item-03');
});

// Routing per il dettaglio del progetto 04
app.get('/projects/portfolio-item-04', (req, res) => {
    res.render('projects/portfolio-item-04');
});

// Routing per il dettaglio del progetto 05
app.get('/projects/portfolio-item-05', (req, res) => {
    res.render('projects/portfolio-item-05');
});

// Routing per il dettaglio del progetto 06
app.get('/projects/portfolio-item-06', (req, res) => {
    res.render('projects/portfolio-item-06');
});

// Routing per il dettaglio del progetto 07
app.get('/projects/portfolio-item-07', (req, res) => {
    res.render('projects/portfolio-item-07');
});

// Routing per il dettaglio del progetto 08
app.get('/projects/portfolio-item-08', (req, res) => {
    res.render('projects/portfolio-item-08');
});

// Routing per il dettaglio del progetto 09
app.get('/projects/portfolio-item-09', (req, res) => {
    res.render('projects/portfolio-item-09');
});

// Routing per il dettaglio del progetto 10
app.get('/projects/portfolio-item-10', (req, res) => {
    res.render('projects/portfolio-item-10');
});

// Routing per il dettaglio del progetto 11
app.get('/projects/portfolio-item-11', (req, res) => {
    res.render('projects/portfolio-item-11');
});

// Routing per il dettaglio del progetto 12
app.get('/projects/portfolio-item-12', (req, res) => {
    res.render('projects/portfolio-item-12');
});

// Routing per il dettaglio del progetto 12
app.get('/projects/portfolio-item-13', (req, res) => {
    res.render('projects/portfolio-item-13');
});


// Avvio del server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
