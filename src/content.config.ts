import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One Markdown file per post per language, named "<slug>.<lang>.md".
 * Files starting with an underscore are ignored, so _example.tr.md can sit in
 * the folder as a template without ever being published.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'tr']),
    /** Shown on the listing; falls back to the first paragraph if omitted. */
    summary: z.string().optional(),
    /** YouTube id — the part after v= — embedded at the top of the post. */
    youtube: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
