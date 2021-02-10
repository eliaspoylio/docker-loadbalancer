'use strict';

const express = require('express');

// Constants
const APP_ID = process.env.APP_ID;
const PORT = process.env.PORT || 5000;

// App
const app = express();
app.get('*', (_, res) => {
    res.send(`App ${APP_ID} listening to port: ${PORT}`)
});

app.listen(PORT, () => {console.log(`App ${APP_ID} listening on port: ${PORT}`)});

