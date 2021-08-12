const port = process.env.port;
const express = require('express');
const app = express();
const routes = require('./routes/bookRoutes');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port || 8000, err => {
    if (!err)
        console.log(`Server running!`);
})