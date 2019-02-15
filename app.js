const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/internetshop',
    {useNewUrlParser: true},
    () => {
        console.log('connect to database...')
    }
);

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const UserRouter = require('./User/user.router');
app.use('/User', UserRouter);

const CategoryRouter = require('./Category/category.router');
app.use('/Category', CategoryRouter);

const GoodsRouter = require('./Goods/goods.router');
app.use('/Goods', GoodsRouter);


module.exports = app;