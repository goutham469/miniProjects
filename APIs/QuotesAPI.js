const exp = require('express');
const QuotesAPI = exp.Router();
const path = require('path');
const fs = require('fs');
const { parse } = require('csv-parse');

const csvFilePath = path.join(__dirname, '../quotesGenerator/dataSets/all_quotes.csv');
const science_quotes = path.join(__dirname, '../quotesGenerator/dataSets/science_quotes.csv');


function loadQuotes() {
    return new Promise((resolve, reject) => {
        fs.readFile(csvFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            parse(data, { columns: true, skip_empty_lines: true }, (err, records) => {
                if (err) {
                    reject('Error during parsing records.');
                    return;
                }

                const quotesArray = records.map(record => Object.values(record));
                resolve(quotesArray);
            });
        });
    });
}

function loadScienceQuotes() {
    return new Promise((resolve, reject) => {
        fs.readFile(science_quotes, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            parse(data, { columns: true, skip_empty_lines: true }, (err, records) => {
                if (err) {
                    reject('Error during parsing records.');
                    return;
                }

                const quotesArray = records.map(record => Object.values(record));
                resolve(quotesArray);
            });
        });
    });
}

let allQuotes = [];
loadQuotes()
    .then(quotes => {
        allQuotes = quotes;
        // console.log(allQuotes);
    })
    .catch(err => {
        console.error('Error loading quotes:', err);
    });

let scienceQuotes = [];
loadScienceQuotes()
    .then(quotes => {
        scienceQuotes = quotes;
        // console.log(allQuotes);
    })
    .catch(err => {
        console.error('Error loading quotes:', err);
    });



QuotesAPI.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../quotesGenerator/index.html'));
});

QuotesAPI.get('/apiServices', (req, res) => {
    res.sendFile(path.join(__dirname, '../quotesGenerator/apiService.html'));
});



QuotesAPI.get('/getAllQuotes', (req, res) => {
    res.send(allQuotes);
});
QuotesAPI.get('/getScienceQuotes',(req,res)=>{
    res.send(scienceQuotes)
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

QuotesAPI.get('/getRandomQuote',(req,res)=>{
    res.send(JSON.stringify(allQuotes[getRandomInt(0,29000)]))
})

module.exports = QuotesAPI;
