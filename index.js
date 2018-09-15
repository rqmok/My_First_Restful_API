import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// Connect to mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', { useNewUrlParser: true }, err => {
    if (err) console.log(`Error connecting to MongoDB Server: ${err}`);
    else console.log('Successfully connected to MongoDB Server');
});

// Setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send(`Node and Express Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});