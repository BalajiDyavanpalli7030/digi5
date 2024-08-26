import React from 'react';
import { useSelector } from 'react-redux';

const ArticleDetails = () => {
  const selectedArticle = useSelector((state) => state.articles.selectedArticle);

  if (!selectedArticle) return null;

  return (
    <div className="article-details">
      <h2>{selectedArticle.title}</h2>
      {selectedArticle.image && <img src={selectedArticle.image} alt={selectedArticle.title} />}
      <p>{selectedArticle.description}</p>
      <a href={selectedArticle.link} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default ArticleDetails;

