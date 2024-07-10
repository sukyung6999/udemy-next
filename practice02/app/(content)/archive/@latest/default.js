import NewsList from '@/components/news-list';
import { getLatestNews } from '@/lib/news';

export default async function LatestPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
}
