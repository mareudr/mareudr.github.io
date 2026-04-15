import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteCopy } from '../data/site';

export async function GET(context: any) {
  const blogEn = await getCollection('blog-en');
  const blogEs = await getCollection('blog-es');

  const items = [
    ...blogEn.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/en/blog/${post.id}/`,
    })),
    ...blogEs.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/es/blog/${post.id}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: siteCopy.en.siteTitle,
    description: siteCopy.en.siteTagline,
    site: context.site,
    items: items,
  });
}
