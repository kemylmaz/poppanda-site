import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export type Status = 'released' | 'in-development' | 'prototype';

export interface Game {
  slug: string;
  title: string;
  /** Shown as a small line under the title when the game used to be called something else. */
  formerTitle?: string;
  tagline: Localized;
  description: Localized[];
  status: Status;
  year: string;
  role: Localized;
  engine: string;
  /** Accent colour used for the card and the hero. */
  accent: string;
  /** Path under /public, e.g. /media/meat-and-eat-cover.png */
  cover?: string;
  shots?: { src: string; alt: Localized }[];
  /** YouTube video id for a trailer. */
  youtube?: string;
  playUrl?: string;
  steamUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export const games: Game[] = [
  {
    slug: 'meat-and-eat',
    title: 'Meat & Eat',
    formerTitle: 'Shawarma Tycoon',
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
    role: { en: 'Design, code, art', tr: 'Tasarım, kod, görsel' },
    engine: 'Unity',
    accent: '#F26722',
    featured: true,
  },
  {
    slug: 'brew-n-draw',
    title: "Brew N' Draw",
    // TODO: kendi cümlelerinle değiştir
    tagline: {
      en: 'Placeholder — describe the game in one line.',
      tr: 'Yer tutucu — oyunu tek cümleyle anlat.',
    },
    description: [
      {
        en: 'Placeholder. Replace this paragraph with what the game actually is and why someone should care.',
        tr: 'Yer tutucu. Bu paragrafı oyunun gerçekte ne olduğuyla ve neden ilgi çekmesi gerektiğiyle değiştir.',
      },
    ],
    status: 'released',
    year: '2025',
    role: { en: 'Design, code', tr: 'Tasarım, kod' },
    engine: 'Unity',
    accent: '#2B2170',
    // steamUrl: 'https://store.steampowered.com/app/…',
    featured: true,
  },
  {
    slug: 'minibus-tycoon',
    title: 'Minibüs Tycoon — All Aboard!',
    tagline: {
      en: 'Placeholder — describe the game in one line.',
      tr: 'Yer tutucu — oyunu tek cümleyle anlat.',
    },
    description: [
      {
        en: 'Placeholder. Replace with a real description.',
        tr: 'Yer tutucu. Gerçek bir açıklamayla değiştir.',
      },
    ],
    status: 'in-development',
    year: '2026',
    role: { en: 'Design, code', tr: 'Tasarım, kod' },
    engine: 'Unity',
    accent: '#F7C51E',
    featured: true,
  },
  {
    slug: 'mayor-of-medieval',
    title: 'Mayor of Medieval',
    tagline: {
      en: 'Placeholder — describe the game in one line.',
      tr: 'Yer tutucu — oyunu tek cümleyle anlat.',
    },
    description: [
      {
        en: 'Placeholder. Replace with a real description.',
        tr: 'Yer tutucu. Gerçek bir açıklamayla değiştir.',
      },
    ],
    status: 'prototype',
    year: '2026',
    role: { en: 'Design, code', tr: 'Tasarım, kod' },
    engine: 'Unity',
    accent: '#7A5CC4',
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
  // {
  //   slug: 'ornek-proje',
  //   title: { en: 'Example Project', tr: 'Örnek Proje' },
  //   youtube: 'VIDEO_ID',
  //   year: '2025',
  //   role: { en: 'Director, editor', tr: 'Yönetmen, kurgu' },
  //   description: { en: 'A short description.', tr: 'Kısa bir açıklama.' },
  //   accent: '#F7C51E',
  //   featured: true,
  // },
];

export const site = {
  name: 'Poppanda Interactive',
  shortName: 'Poppanda',
  domain: 'poppanda.net',
  email: 'hello@poppanda.net',
  links: [
    { label: 'YouTube', url: 'https://www.youtube.com/@kemlimo' },
    { label: 'GitHub', url: 'https://github.com/kemylmaz' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kemal-yilmaz-6040bb225/' },
  ] as { label: string; url: string }[],
};
