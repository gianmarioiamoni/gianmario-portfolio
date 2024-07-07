const express = require('express');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('layout', { body: 'index' }); // Passa 'index' come nome del file da includere
});

// app.get('/', (req, res) => {
//     res.render('layout', { body: 'index' });
// });

// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/projects/project1', (req, res) => {
//     res.render('projects/portfolio-item-01');
// });

// app.get('/projects/project2', (req, res) => {
//     res.render('projects/portfoilio-item-02');
// });

// app.get('/projects/project3', (req, res) => {
//     res.render('projects/portfolio-item-03');
// });

// app.get('/projects/project4', (req, res) => {
//     res.render('projects/portfolio-item-04');
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

