const News = require("../models/News");

// Controller to get news posts
const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }); // Fetch posts and sort by creation date
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Controller to post news (admin only)
const postNews = async (req, res) => {
  const { title, content } = req.body;

  try {
    const news = new News({
      title,
      content,
      createdBy: req.user.id,
    });

    await news.save();
    res.status(201).json({ message: "News posted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { getNews, postNews };
