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

// // Route per la homepage
// app.get('/services', (req, res) => {
//     res.render('services');
// });


// Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
