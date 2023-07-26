import { getSortedPostsData } from '@/lib/posts';
import React from 'react';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  return {
    title: post?.title || 'Post Not found',
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  return <div>page</div>;
}
