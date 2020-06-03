const express = require('express');
const hbs = require('hbs');

// 1. Create the app
var app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs')


// 2. Routes
/** YOUR ROUTES HERE **/

app.get('/', (req,res)=>{
    res.render('index')
})


app.get('/about', (req,res)=>{
    res.render('about')
})


/** NO ROUTES AFTERWARDS */

// 4. enable express
app.listen(3000, () => console.log('server started'));