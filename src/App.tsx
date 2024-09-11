import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import BlogPage from './pages/blogPage';
import BlocksPage from './pages/blocksPage';
import BlogDetailPage from './pages/detailBlogPage';

const App: React.FC = () => {
  return (
    <Router>

      {/* Main content area */}
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/blog'element={<BlogPage />} />
          <Route path="/blog/detail-page/:postId" element={<BlogDetailPage />} />
          <Route path='/blocks'element={<BlocksPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
