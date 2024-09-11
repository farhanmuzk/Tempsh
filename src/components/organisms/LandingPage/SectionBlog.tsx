import React from 'react';
import Card from '../../molecules/Card'; // Sesuaikan path jika berbeda

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: '7 programming languages you should pay attention to in 2025',
      description: 'May 20, 2024',
    },
    {
      id: 2,
      title: '10 tips to improve your web development skills',
      description: 'June 10, 2024',
    },
    {
      id: 3,
      title: 'How AI will shape the future of software development',
      description: 'July 15, 2024',
    },
    {
      id: 4,
      title: 'Best practices for scaling applications in 2025',
      description: 'August 5, 2024',
    },
  ];

  return (
    <section className="py-16">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Browse all news & articles</h2>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
            View All
          </button>
        </div>
      </div>

      {/* Popular Blog Cards using the Card component */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            description={post.description}
            isBlog
            showButton={false}
            postId={post.id} // Kirim postId ke komponen Card
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
