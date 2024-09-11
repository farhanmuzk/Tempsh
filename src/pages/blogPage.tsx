import React from 'react';
import MainLayout from '../layouts/MainLayout';

const BlogPage: React.FC = () => (
  <MainLayout showNavbar={true} showFooter={true}>
    <h1>Blog</h1>
    <p>This is the blog page content.</p>
  </MainLayout>
);

export default BlogPage;
