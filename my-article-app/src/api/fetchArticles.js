export const fetchArticles = async () => {
  try {
    const response = await fetch('https://digi5.onrender.com/api/articles');
    const articles = await response.json();

    // Function to extract value from link
    const extractValueFromLink = (link) => {
      const url = new URL(link);
      const pathSegments = url.pathname.split('/').filter(Boolean);
      return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : '';
    };

    // Filter and map articles, handling missing title and description
    const filteredArticles = articles.map(article => {
      const title = article.title || extractValueFromLink(article.link);
      const description = article.description || extractValueFromLink(article.link);
      
      return {
        title: title.trim(),
        link: article.link,
        image: article.image, // Ensure image is handled as per your data structure
        description: description.trim()
      };
    }).filter(article => article.description); // Ensure description is present

    return filteredArticles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
