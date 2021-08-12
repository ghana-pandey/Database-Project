const mongoose = require('mongoose');
const Book = require('../models/book');

//const Book = mongoose.model('Book');
console.log(Book)

exports.getAllBooks = (req, res, next) => {
    Book.find({}, (err, books) => {
        console.log(books);
        if (err) throw err
        res.status(200).send(books)
    })
}
exports.postBook = (req, res, next) => {
    console.log(req.body);
    const bookbody = req.body
    console.log("999999")
    console.log(bookbody);
    const booklist = new Book({
        "book_title": bookbody.book_title,
        ISBN: bookbody.ISBN,
        "overdue_fee": bookbody.overdue_fee,
        publisher: bookbody.publisher,
        "date_published": bookbody.date_published


    })
    if (!bookbody.book_title)
        res.write("book title is missing");
    if (!bookbody.ISBN)
        res.send("ISBN is missing")
    if (!bookbody.overdue_fee)
        res.send("fee is missing put 0 if no fee associate")
    if (!bookbody.publisher)
        res.send("Publisher is missing")
    if (!bookbody.date_published)
        res.send("Date publihsed is missing")
    else
        booklist.save((err, docs) => {
            res.status(200).send(docs);

        })

}







