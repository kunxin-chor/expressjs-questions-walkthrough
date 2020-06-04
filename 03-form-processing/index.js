const express = require('express');
const hbs = require('hbs');

// 1. Create the app
var app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs')


app.use(express.urlencoded({extended:false}));
app.use(express.json())

// 2. Routes
/** YOUR ROUTES HERE **/

app.get('/', (req,res)=>{
    res.render('index')
})


app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('/feedback', (req,res)=>res.render('feedback'))

app.post('/feedback', (req,res)=>{
    let name = req.body['user-name'];
    let found_by = req.body['found-by'];
    let helpful_sections = Array.isArray(req.body.helpful) ? req.body.helpful : [req.body.helpful];

    res.render('results', {
        name, found_by, helpful_sections
    })
})

// one route to display the form
app.get('/find_average', (req,res)=>res.render('average'));

// one route to process the form
app.post('/find_average', (req,res)=>{
    let total = parseInt(req.body.num1) + parseInt(req.body.num2) + parseInt(req.body.num3);
    let average = total / 3;
    res.render('average_result', {
        average
    })
})


/** NO ROUTES AFTERWARDS */

// 4. enable express
app.listen(3000, () => console.log('server started'));