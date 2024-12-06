const express = require('express');
const connect = require('./config/db');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const app = express();

connect();


app.use(express.json());


