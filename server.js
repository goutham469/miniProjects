const exp = require('express');
const app = exp();
require('dotenv').config();
const path = require('path');

const DoBAPI = require('./APIs/DoBAPI');
const QuotesAPI = require('./APIs/QuotesAPI');
const mediaAPI = require('./APIs/MediaAPI');
const qrAPI = require('./APIs/qrAPI');
const speechAPI = require('./APIs/speechAPI')


app.use(exp.json());

// sub APIs
app.use('/ageCalculator', DoBAPI);
app.use('/quotes',QuotesAPI);
app.use('/media',mediaAPI);
app.use('/qr',qrAPI);
app.use('/speech',speechAPI)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getResume', (req, res) => {
    res.sendFile(path.join(__dirname, 'MyResume.pdf'));
});



const methods = require('./methods');
console.log('server base url : ', methods());
console.log('server base url : ', process.env.SERVER_BASE_URL);

app.listen(4000, () => {
    console.log('server running on PORT 4000...');
});
