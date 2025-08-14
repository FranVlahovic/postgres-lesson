const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const psqlRouter = require('./routes/psqlRouter');

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', psqlRouter);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});