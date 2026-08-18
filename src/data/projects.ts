import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export type Status = 'released' | 'in-development' | 'prototype';

export interface Game {
  slug: string;
  title: string;
  tagline: Localized;
  description: Localized[];
  status: Status;
  year: string;
  role: Localized;
  engine: string;
  /** Accent colour used for the card and the hero. */
  accent: string;
  /** Path under /public, e.g. /media/shawarma-cover.png */
  cover?: string;
  shots?: { src: string; alt: Localized }[];
  /** YouTube video id for a trailer. */
  youtube?: string;
  playUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export const games: Game[] = [
  {
    slug: 'shawarma-tycoon',
    title: 'Shawarma Tycoon',
    tagline: {
      en: 'Run a shawarma shop until the queue runs you.',
      tr: 'Sıra seni yönetmeye başlayana kadar bir dürümcü işlet.',
    },
    description: [
      {
        en: 'A diorama-scale management game. You start alone behind the counter, taking every order by hand. As the money comes in you hire people, and the shop starts running without you — which is the whole point, and also the danger.',
        tr: 'Diorama ölçeğinde bir işletme oyunu. Tezgâhın arkasında yalnız başlıyorsun, her siparişi kendi elinle alıyorsun. Para geldikçe insan alıyorsun ve dükkân sensiz işlemeye başlıyor — bütün mesele bu, tehlike de tam burada.',
      },
      {
        en: 'Ignored customers do not simply vanish. They cost you, and the street remembers.',
        tr: 'Görmezden gelinen müşteriler öylece kaybolmuyor. Sana bir bedeli oluyor ve sokak bunu hatırlıyor.',
      },
    ],
    status: 'in-development',
    year: '2026',
    role: { en: 'Everything', tr: 'Her şey' },
    engine: 'Unity',
    accent: '#FF5C3E',
    featured: true,
  },
];

export interface Video {
  slug: string;
  title: Localized;
  /** YouTube video id — the part after v= */
  youtube: string;
  year: string;
  role: Localized;
  description: Localized;
  accent: string;
  featured?: boolean;
}

export const videos: Video[] = [
  // Add entries like this one, then delete this comment:
  // {
  //   slug: 'ornek-proje',
  //   title: { en: 'Example Project', tr: 'Örnek Proje' },
  //   youtube: 'dQw4w9WgXcQ',
  //   year: '2025',
  //   role: { en: 'Director, editor', tr: 'Yönetmen, kurgu' },
  //   description: { en: 'A short description.', tr: 'Kısa bir açıklama.' },
  //   accent: '#2EC4B6',
  //   featured: true,
  // },
];

export const site = {
  name: 'Poppanda',
  domain: 'poppanda.net',
  email: 'hello@poppanda.net',
  links: [
    // { label: 'GitHub', url: 'https://github.com/…' },
    // { label: 'itch.io', url: 'https://….itch.io' },
    // { label: 'YouTube', url: 'https://youtube.com/@…' },
  ] as { label: string; url: string }[],
};
