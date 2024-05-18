const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/news', require('./routes/news'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
