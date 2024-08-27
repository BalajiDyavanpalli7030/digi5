import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const ArticleDetails = () => {
  const selectedArticle = useSelector((state) => state.articles.selectedArticle);

  if (!selectedArticle) return null;

  return (
    <Card sx={{ marginTop: 2 }}>
      {selectedArticle.image && (
        <CardMedia
          component="img"
          height="140"
          image={selectedArticle.image}
          alt={selectedArticle.title}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="div">
          {selectedArticle.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {selectedArticle.description}
        </Typography>
        <Button 
          href={selectedArticle.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          sx={{ marginTop: 2 }}
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArticleDetails;
