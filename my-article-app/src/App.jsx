import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArticles } from './redux/slices/articlesSlice';
import ArticleList from './components/ArticleList';
import SearchBar from './components/SearchBar';
import { Container, Grid } from '@mui/material';

function App() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} sx={{ mt: 2 }}/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ArticleList searchTerm={searchTerm} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
