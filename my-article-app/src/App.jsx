import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArticles } from './redux/slices/articlesSlice';
import ArticleList from './components/ArticleList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
     <div className="container mx-auto p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ArticleList searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
