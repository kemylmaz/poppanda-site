export const languages = { en: 'EN', tr: 'TR' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'skip': 'Skip to content',
    'nav.home': 'Home',
    'nav.primary': 'Primary',
    'nav.games': 'Games',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact us',

    'home.kicker': 'Poppanda Interactive',
    'home.title': 'Indie game studio based in Türkiye',
    'home.lead':
      'We make cozy tycoon and automation games, built around small playful minigames, and ship them to mobile and PC at the same time.',
    'home.cta.games': 'See the games',
    'home.featured': 'Play now',
    'home.playLead': 'Playable in the browser, no download.',
    'home.all': 'Everything',

    'games.kicker': 'Selected projects',
    'stat.games': 'Projects',
    'stat.since': 'Studio since',
    'stat.people': 'People',
    'games.title': 'Games',
    'games.lead': 'Things you can play, or will be able to soon.',
    'blog.kicker': 'Notes & videos',
    'empty.title': 'Nothing posted yet',
    'empty.channel': 'Go to the YouTube channel',
    'blog.title': 'Blog',
    'blog.lead': 'What we are building, what we shipped, and the odd video.',
    'blog.video': 'Video',
    'blog.back': 'All posts',
    'about.kicker': 'The studio',
    'about.title': 'About',
    'about.lead': 'Who is behind this',
    'about.team': 'Team',

    'status.released': 'Released',
    'status.in-development': 'In development',
    'status.prototype': 'Prototype',

    'game.role': 'Role',
    'game.engine': 'Engine',
    'game.platforms': 'Platforms',
    'game.year': 'Year',
    'game.status': 'Status',
    'game.play': 'Play it',
    'game.source': 'Source code',
    'game.steam': 'View on Steam',
    'game.former': 'Previously',
    'game.back': 'All games',

    'contact.title': "Let's talk",
    'contact.lead': 'Work, collaboration, or just to say hello.',
    'footer.rights': 'All rights reserved.',
    'empty': 'Nothing here yet. Soon.',
  },
  tr: {
    'skip': 'İçeriğe geç',
    'nav.home': 'Ana sayfa',
    'nav.primary': 'Ana menü',
    'nav.games': 'Oyunlar',
    'nav.blog': 'Blog',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',

    'home.kicker': 'Poppanda Interactive',
    'home.title': 'Türkiye merkezli bağımsız oyun stüdyosu',
    'home.lead':
      'Küçük ve eğlenceli mini oyunlar üzerine kurulu cozy tycoon ve otomasyon oyunları yapıyoruz; mobil ve bilgisayara aynı anda çıkarıyoruz.',
    'home.cta.games': 'Oyunlara bak',
    'home.featured': 'Şimdi oyna',
    'home.playLead': 'Tarayıcıda oynanır, indirmek gerekmez.',
    'home.all': 'Hepsi',

    'games.kicker': 'Seçilmiş projeler',
    'stat.games': 'Proje',
    'stat.since': 'Stüdyo',
    'stat.people': 'Kişi',
    'games.title': 'Oyunlar',
    'games.lead': 'Oynayabileceğin, ya da yakında oynayabileceğin şeyler.',
    'blog.kicker': 'Notlar ve videolar',
    'empty.title': 'Henüz bir şey yok',
    'empty.channel': 'YouTube kanalına git',
    'blog.title': 'Blog',
    'blog.lead': 'Ne geliştiriyoruz, ne çıkardık, arada bir de video.',
    'blog.video': 'Video',
    'blog.back': 'Tüm yazılar',
    'about.kicker': 'Stüdyo',
    'about.title': 'Hakkımızda',
    'about.lead': 'Bunların arkasındaki ekip',
    'about.team': 'Ekip',

    'status.released': 'Yayında',
    'status.in-development': 'Geliştiriliyor',
    'status.prototype': 'Prototip',

    'game.role': 'Rol',
    'game.engine': 'Motor',
    'game.platforms': 'Platformlar',
    'game.year': 'Yıl',
    'game.status': 'Durum',
    'game.play': 'Oyna',
    'game.source': 'Kaynak kod',
    'game.steam': 'Steam sayfası',
    'game.former': 'Eski adı',
    'game.back': 'Tüm oyunlar',

    'contact.title': 'Konuşalım',
    'contact.lead': 'İş, ortak proje, ya da sadece merhaba demek için.',
    'footer.rights': 'Tüm hakları saklıdır.',
    'empty': 'Burası şimdilik boş. Yakında.',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

/** Prefixes a path with the language segment. `/games` -> `/tr/games` */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

/**
 * Canonical form of a path: language prefix plus a trailing slash, matching
 * the URLs the site actually serves.
 */
export function canonicalPath(path: string, lang: Lang): string {
  const localized = localizePath(path, lang);
  return localized.endsWith('/') ? localized : `${localized}/`;
}
