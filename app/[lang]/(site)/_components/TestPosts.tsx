import { PostTypes } from '@/sanity/schemas/post-schema/PostTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TestPosts = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {posts.map((post) => (
        <Link
          href={`/project/${post.slug}`}
          className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
          key={post._id}
        >
          {post.image && (
            <Image
              src={post.image}
              alt={post.name}
              width={750}
              height={300}
              className='object-cover rounded-lg border border-gray-500'
            />
          )}
          <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
            {post.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TestPosts;
