import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { isMainJournal } from '../data/mainJournals';

export async function GET(context) {
  const posts = (await getCollection('journal', ({ data }) => !data.draft))
    .filter((post) => isMainJournal(post.id));
  const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: 'Nhật ký nghiên cứu pH',
    description: 'Dòng thời gian nghiên cứu hệ thống đo pH.',
    site: new URL(`${base}/`, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.summary,
      link: `${base}/journal/${post.id}/`,
    })),
  });
}
