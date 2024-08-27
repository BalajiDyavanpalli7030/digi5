const express = require('express');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors()); 

app.get('/', (req, res)=>{
  res.send("<h1>Hi From Server</h1>")
})

app.get('/api/articles', async (req, res) => {
  try {

    const response = await fetch('https://time.com/');
    const html = await response.text();
    const $ = cheerio.load(html);

    const articles = [];


    $('ul.tout__list.items.swipe-h > li').each((index, element) => {

      if ($(element).find('article').length > 0) {
        const title = $(element).find('.tout__list-item-title').text().trim();
        const link = $(element).find('.tout__list-item-link').attr('href');
        const image = $(element).find('img').attr('src');
        const description = $(element).find('.tout__list-item-description').text().trim();


        const fallback = link ? link.split('/').pop() : '';

        articles.push({
          title: title || fallback,
          link: link ? `https://time.com${link}` : '',
          image: image || '',
          description: description || fallback,
        });
      }
    });

    res.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app