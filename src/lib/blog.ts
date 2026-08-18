import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

/** "hello-world.tr" -> "hello-world" */
export function slugOf(post: Post): string {
  return post.id.replace(/\.(en|tr)$/, '');
}

/** Published posts in one language, newest first. */
export async function postsFor(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blog', ({ data }) => !data.draft && data.lang === lang);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'tr' ? 'tr-TR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
