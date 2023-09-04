const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()

const port = 3030

// basic routing
app.get('/', (req, res) =>
    res.send("Hello World!")
);


// listening to the server port
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));