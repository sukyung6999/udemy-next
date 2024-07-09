'use client';

import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/news-list';
import { useEffect, useState } from 'react';

export default function NewsPage() {
  const [news, setNews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);

    async function FetchNews() {
      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setIsLoading(false);
        setError('Failed to fetch');
      }

      const news = response.json();
      setIsLoading(false);
      setNews(news);
    }

    FetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    return <NewsList news={DUMMY_NEWS} />;
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
