const express = require('express');
const hbs = require('hbs');

// 1. Create the app
var app = express();
app.set('view engine', 'hbs')

let blocks = {};
hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    return val;
});

// 2. Routes
/** YOUR ROUTES HERE **/
app.get('/', (req,res)=>res.render('index.hbs'))

app.get('/about', (req,res)=>res.render('about.hbs'))

app.get('/feedback', (req,res)=>res.render('feedback.hbs'))

/** NO ROUTES AFTERWARDS */

// 4. enable express
app.listen(3000, () => console.log('server started'));