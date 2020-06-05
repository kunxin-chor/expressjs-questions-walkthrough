const express = require('express');
const router = express.Router();
const mongoUtil = require('./mongoUtil');
const ObjectId = require('mongodb').ObjectId;


router.get('/', async (req,res)=>{
    let db = mongoUtil.getDb();
    
    // example using promise:
    // db.collection('books').find().toArray().then((data)=>{
    //     res.send(data)
    // });
    
    let books = await db.collection('books').find().toArray();
    res.render('books_view',{
        books
    })
})

router.get('/create', (req,res)=>{
    res.render('book_create')
})

router.post('/create', (req,res)=>{
    let db = mongoUtil.getDb();
    
    // destructuring assignment
    let {author, title, isbn} = req.body; 
    
    db.collection("books").insertOne({author, title, isbn});
    req.flash(`New book ${title} has been created`);
    res.redirect('/')
})

router.get('/edit/:bookid', async (req,res)=>{
    let book = await mongoUtil.getDb().collection('books').findOne({
        _id: new ObjectId(req.params.bookid)
    });
    console.log(book);
    res.render('book_update',{
        book
    });
})

router.post('/edit/:bookid',  (req,res)=>{
     // extract out all the fields using destructuring assignment
    let {author, title, ISBN} = req.body; 

    mongoUtil.getDb().collection('books').updateOne({
        _id:new ObjectId(req.params.bookid)
        }, {
            '$set': {
                author, title, ISBN
            }
        });
    res.redirect('/')
})

router.get('/delete/:bookid', async (req,res)=>{
    let book = await mongoUtil.getDb().collection('books').findOne({_id:new ObjectId(req.params.bookid)});
    res.render('book_confirm_delete', {
        book
    });
})

router.post('/delete/:bookid', async (req,res)=>{
    mongoUtil.getDb().collection('books').deleteOne({
        _id: new ObjectId(req.params.bookid)
    })
    res.redirect('/')
})

module.exports = router;