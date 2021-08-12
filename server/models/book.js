const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/books-db";
mongoose.connect(dbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
});
const bookSchema = new mongoose.Schema({
    "book_title": { type: String, required: true },
    ISBN: { type: String, required: true },
    overdue_fee: { type: Number, required: true },
    publisher: { type: String, required: true },
    "date_published": { type: Date, required: true }
});
module.exports = mongoose.model("Book", bookSchema);