'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT;

// App
const app = express();
app.get('*', (_, res) => {
    res.send(`port: ${PORT}`)
});

app.listen(PORT, () => {console.log(`App listening on port: ${PORT}`)});

