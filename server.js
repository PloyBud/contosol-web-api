'use strict'

const express = require('express');

const PORT = 8000;
const HOST = 'localhost';

const app=express();

app.get('/',(req,res)=> {
    res.send('Hello World! - 1.0.0');
});

app.listen(PORT,HOST,()=> {
    console.log(`Running on http://${HOST}:${PORT}`);
});