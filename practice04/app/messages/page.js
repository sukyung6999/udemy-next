import Messages from '@/components/messages';
import { unstable_noStore } from 'next/cache';

// export const revalidate = 5; 5초마다 재검증
// export const dynamic = 'force-dynamic'; 캐시를 막음

export default async function MessagesPage() {
  unstable_noStore(); // 캐시를 막음
  const response = await fetch('http://localhost:8080/messages');
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
