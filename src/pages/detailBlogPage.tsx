import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetailPage: React.FC = () => {
  const { postId } = useParams(); // Ambil postId dari URL

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Blog Detail Page</h1>
      <p>Viewing details for blog post ID: {postId}</p>
    </div>
  );
};

export default BlogDetailPage;
