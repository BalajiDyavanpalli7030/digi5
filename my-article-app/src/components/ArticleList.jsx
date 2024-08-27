import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectArticle } from '../redux/slices/articlesSlice';
import ArticleDetails from './ArticleDetails';
import { List, ListItem, ListItemText, Typography,Box } from '@mui/material';

const ArticleList = ({ searchTerm }) => {
  const { list, loading, error, selectedArticle } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  const filteredArticles = list.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Main Articles
      </Typography>
      <List>
        {filteredArticles.map((article, index) => (
          <ListItem 
            key={index} 
            button 
            onClick={() => dispatch(selectArticle(article))}
            sx={{ borderBottom: '1px solid #ddd',
               padding: 2,
               display: 'flex', 
               justifyContent: 'center', 
               alignItems: 'center'
              }}
          >
             {!selectedArticle || selectedArticle.title !== article.title ? (
              <ListItemText primary={article.title} />
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <ArticleDetails />
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ArticleList;
