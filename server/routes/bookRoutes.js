const express = require('express');
const bookController = require("../controllers/bookController");
const router = express.Router();
router.get("/citylibrary/api/book/list", bookController.getAllBooks);
router.post("/citylibrary/api/book/add", bookController.postBook);
module.exports = router;


