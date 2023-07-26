import { getPostData, getSortedPostsData } from '@/lib/posts';
import React from 'react';
import { notFound } from 'next/navigation';
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

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

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
      <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
      <p className='mt-0'>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link
            className='flex flex-nowrap justify-center items-center gap-2'
            href='/'
          >
            <FaArrowLeft size={15} /> Back to home
          </Link>
        </p>
      </article>
    </main>
  );
}
