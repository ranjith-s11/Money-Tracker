const express =require('express');
const cors =require('cors');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction.js');

app.use(cors());
app.use(express.json());

app.get('/api/test',(req,res) => {
    res.json('hi hello');
});

app.post( '/api/transaction', async (req,res) => {
    
    await mongoose.connect(process.env.MONGO_URL);
    const {name,price,description,datetime} = req.body;
    const transaction = await Transaction.create({name,price,description,datetime});
    res.json(transaction);
});

app.get('/api/transactions', async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.listen(4000);
//vhnggo8eGJKagM4c
