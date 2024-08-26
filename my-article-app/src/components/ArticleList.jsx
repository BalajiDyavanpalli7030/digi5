import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectArticle } from '../redux/slices/articlesSlice';
import ArticleDetails from './ArticleDetails';

const ArticleList = ({ searchTerm }) => {
  const { list, loading, error, selectedArticle } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredArticles = list.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="article-list">
      <h1>Main Articles</h1>
      <ul>
        {filteredArticles.map((article, index) => (
          <li key={index}>
            <div 
              onClick={() => dispatch(selectArticle(article))} 
              className="article-item"
            >
              <h3>{article.title}</h3>
              {selectedArticle && selectedArticle.title === article.title && (
                <div className="article-details">
                  <ArticleDetails />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
