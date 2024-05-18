const express = require('express');
const router = express.Router();
const News = require('../models/news');

router.post('/create', async (req, res) => {
    const { title, content } = req.body;
    try {
        const newNews = new News({
            title,
            content,
        });
        const news = await newNews.save();
        res.json(news);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

router.get('/get', async (req, res) => {
    try {
        const news = await News.find().sort({ date: -1 });
        res.json(news);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
