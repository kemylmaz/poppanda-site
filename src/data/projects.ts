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
  platforms?: string[];
  /** Accent colour used for the card and the hero. */
  accent: string;
  /** Path under /public, e.g. /media/meat-and-eat-cover.png */
  cover?: string;
  shots?: { src: string; alt: Localized }[];
  /** YouTube video id for a trailer. */
  youtube?: string;
  /** Set once a WebGL build is embedded, so the game shows under "Play now". */
  playable?: boolean;
  playUrl?: string;
  steamUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export const games: Game[] = [
  {
    slug: 'meat-and-eat',
    playable: true,
    playUrl: '/play/meat-and-eat/',
    title: 'Meat & Eat',
    formerTitle: 'Shawarma Tycoon',
    tagline: {
      en: 'Run a shawarma shop until the queue runs you.',
      tr: 'Sıra seni yönetmeye başlayana kadar bir dürümcü işlet.',
    },
    description: [
      {
        en: 'Cook, cut and serve every order yourself. Then hire staff, run belts between the machines and upgrade the shop until it works without you. Ignore the queue and it costs you. The street remembers.',
        tr: 'Her siparişi önce sen pişir, kes ve ver. Sonra işçi al, makineler arasına bant kur, dükkânı sensiz dönecek hale getir. Sırayı görmezden gelirsen bedeli olur. Sokak bunu hatırlıyor.',
      },
    ],
    status: 'in-development',
    year: '2026',
    role: { en: 'Design, code, art', tr: 'Tasarım, kod, görsel' },
    engine: 'Unity',
    platforms: ['Web', 'Mobile'],
    accent: '#F26722',
    featured: true,
  },
  {
    slug: 'brew-n-draw',
    title: 'Brew N’ Draw',
    tagline: {
      en: 'A cosy café where the hard part is getting the face right.',
      tr: 'Zor kısmı yüzü doğru çizmek olan sıcak bir kafe.',
    },
    description: [
      {
        en: 'Run a cosy café. Boil, steep and serve every order by hand, in the right glass. Draw portraits for your signature customers and fill the book your grandfather left behind. Keep the online shop stocked, because your rating decides the tips.',
        tr: 'Sıcak bir kafe işlet. Her siparişi elinle kaynat, demle ve doğru bardakla ver. İmza müşterilerin portresini çiz, büyükbabandan kalan defteri doldur. Online dükkânın stoğunu takip et, çünkü puanın bahşişini belirler.',
      },
    ],
    status: 'in-development',
    year: '2026',
    role: { en: 'Design, code', tr: 'Tasarım, kod' },
    engine: 'Unity',
    platforms: ['Steam'],
    accent: '#2B2170',
    // steamUrl: 'https://store.steampowered.com/app/…',
    featured: true,
  },
  {
    slug: 'minibus-tycoon',
    playable: true,
    playUrl: 'https://game.poppanda.net',
    title: 'Minibüs Tycoon — All Aboard!',
    tagline: {
      en: 'Drive the route yourself, then hire someone who drives it better.',
      tr: 'Hattı önce sen sür, sonra senden iyi sürecek birini işe al.',
    },
    description: [
      {
        en: 'Drive your own minibus line with WASD. Keep the passengers happy, keep the money coming and handle whatever the day throws at you. Upgrade the terminal, hire drivers and climb through three tiers of minibus.',
        tr: 'Kendi minibüs hattını WASD ile sür. Yolcuyu memnun et, parayı kazan, günün getirdiğiyle başa çık. Terminali geliştir, şoför al ve üç minibüs seviyesini tırman.',
      },
    ],
    status: 'in-development',
    year: '2026',
    role: { en: 'Design, code', tr: 'Tasarım, kod' },
    engine: 'Unity',
    platforms: ['Web', 'Mobile'],
    accent: '#F7C51E',
    featured: true,
  },
  {
    slug: 'wash-and-roll',
    playable: true,
    playUrl: 'https://wash-and-roll.poppanda.net',
    title: 'Wash & Roll',
    tagline: {
      en: 'Scrub the dirt away and watch the colour come back.',
      tr: 'Kiri ov, altından çıkan rengi izle.',
    },
    description: [
      {
        en: 'Take the rug off the truck and scrub it until the pattern shows through, then dry it, roll it and hand it to the customer. Ten days, a wallet that carries over, and upgrades that shave seconds off every step. Every couple of shifts the shop itself gets a visible facelift.',
        tr: 'Halıyı kamyondan al, deseni ortaya çıkana kadar ov; sonra kurut, sar ve müşteriye ver. On gün, günler arası taşınan bir cüzdan ve her adımdan saniye kırpan yükseltmeler. Birkaç vardiyada bir dükkânın kendisi gözle görülür şekilde yenileniyor.',
      },
    ],
    status: 'in-development',
    year: '2026',
    role: { en: 'Design, code', tr: 'Tasarım, kod' },
    engine: 'Three.js',
    platforms: ['Web', 'Mobile'],
    accent: '#69B8B2',
    sourceUrl: 'https://github.com/kemylmaz/wash-and-roll',
    featured: true,
  },
  {
    slug: 'mayor-of-medieval',
    playable: true,
    title: 'Mayor of Medieval',
    tagline: {
      en: 'Chop wood by hand until you never have to chop wood again.',
      tr: 'Bir daha odun kesmek zorunda kalmayana kadar elinle odun kes.',
    },
    description: [
      {
        en: 'Gather wood and stone by hand, then automate it and hire workers. Farm, fish, raise animals and put up the mill, the brewery and the inn. Push far enough and the smithy starts turning out fighters.',
        tr: 'Odunu ve taşı önce elinle topla, sonra otomasyona çevir ve işçi al. Tarla kur, balık tut, hayvan besle; değirmeni, bira hanesini ve hanı dik. Yeterince ilerlersen demirci savaşçı üretmeye başlar.',
      },
    ],
    status: 'prototype',
    year: '2026',
    role: { en: 'Design, code', tr: 'Tasarım, kod' },
    engine: 'Unity',
    platforms: ['Web'],
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

export interface SocialLink {
  /** Also the file name looked for under /public/media/social/<key>.png */
  key: string;
  label: string;
  url: string;
  /** The platform's own colour, used for the icon tile. */
  color: string;
}

export interface Person {
  name: string;
  /** Left empty until there is a real one to show; the page hides it. */
  role: Localized;
  bio: Localized[];
  links: SocialLink[];
}

const linkedin = (url: string): SocialLink => ({
  key: 'linkedin', label: 'LinkedIn', url, color: '#0A66C2',
});
const github = (url: string): SocialLink => ({
  key: 'github', label: 'GitHub', url, color: '#181717',
});

/** The studio itself — shown above the team on the about page. */
export const studio = {
  name: 'Poppanda Interactive',
  role: { en: 'Independent game studio', tr: 'Bağımsız oyun stüdyosu' },
  bio: [
    {
      en: 'We are an independent game studio founded in Türkiye. We build our games in Unity and make them for mobile and PC.',
      tr: 'Türkiye’de kurulmuş bağımsız bir oyun stüdyosuyuz. Unity oyun motoru ile geliştirdiğimiz oyunlarımızla mobil ve bilgisayar için projeler yaratıyoruz.',
    },
  ] as Localized[],
  links: [
    linkedin('https://www.linkedin.com/company/poppanda/?viewAsMember=true'),
  ] as SocialLink[],
};

export const team: Person[] = [
  {
    name: 'Kemal Yılmaz',
    role: { en: 'Founder, game developer', tr: 'Kurucu, oyun geliştirici' },
    bio: [],
    links: [
      { key: 'itch', label: 'itch.io', url: 'https://kemylmaz.itch.io/', color: '#FA5C5C' },
      { key: 'artstation', label: 'ArtStation', url: 'https://www.artstation.com/kemylmaz', color: '#13AFF0' },
      { key: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@kemlimo', color: '#FF0000' },
      github('https://github.com/kemylmaz'),
      linkedin('https://www.linkedin.com/in/kemal-yilmaz-6040bb225/'),
    ],
  },
  {
    name: 'Enes Yel',
    role: { en: 'Game developer', tr: 'Oyun geliştirici' },
    bio: [],
    links: [
      linkedin('https://www.linkedin.com/in/enes-yel-44a1ab297/'),
      github('https://github.com/enesimo16'),
    ],
  },
];

export const site = {
  name: 'Poppanda Interactive',
  shortName: 'Poppanda',
  domain: 'poppanda.net',
  email: 'kem@poppanda.net',
  links: studio.links,
};
