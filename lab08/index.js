const express = require('express');
const { MongoClient } = require('mongodb');
// The MongoClient is like the command line Mongo client or the one in compass
// except this time it's embedded in Mongo
const MongoCLient = require("mongodb").MongoClient;
const app = express();

// function to connect to MongoDB
async function connect(uri, dbname){
    let client = await MongoClient.connect(uri,{
        useUnifiedTopology: true // use the latest method to connect to MongoDB
    })
    return client;
}

async function main(){
    const client = await connect ("mongodb+srv://user:M0ng0db1234@cluster0.1xyjy5b.mongodb.net/?retryWrites=true&w=majority")
    app.get('/', function(req,res){
        // eqv: db.collection('listingsAndReviews').find();
        const listings = await 
    })
}

// Make sure to do 'app.listen' LAST
app.listen(3000, function(){
    console.log("Server has started");
})