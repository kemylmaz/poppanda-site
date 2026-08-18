export const languages = { en: 'EN', tr: 'TR' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'skip': 'Skip to content',
    'nav.home': 'Home',
    'nav.primary': 'Primary',
    'nav.games': 'Games',
    'nav.video': 'Video',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'home.kicker': 'Games & moving pictures',
    'home.title': 'I build small worlds',
    'home.lead':
      'I make games and videos out of a room in Turkey. Some of them are finished. All of them are honest.',
    'home.cta.games': 'See the games',
    'home.cta.video': 'See the video work',
    'home.featured': 'Selected work',
    'home.all': 'Everything',

    'games.kicker': 'Selected projects',
    'stat.games': 'Projects',
    'stat.since': 'Studio since',
    'stat.people': 'People',
    'games.title': 'Games',
    'games.lead': 'Things you can play, or will be able to soon.',
    'video.kicker': 'Moving pictures',
    'empty.title': 'Nothing up yet',
    'empty.channel': 'Watch on YouTube',
    'video.title': 'Video',
    'video.lead': 'Edits, motion pieces and things shot on whatever was nearby.',
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
    'nav.video': 'Video',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',

    'home.kicker': 'Oyunlar ve hareketli görüntüler',
    'home.title': 'Küçük dünyalar kuruyorum',
    'home.lead':
      'Türkiye’de bir odadan oyun ve video üretiyorum. Bazıları bitti. Hepsi dürüst.',
    'home.cta.games': 'Oyunlara bak',
    'home.cta.video': 'Video işlerine bak',
    'home.featured': 'Seçilmiş işler',
    'home.all': 'Hepsi',

    'games.kicker': 'Seçilmiş projeler',
    'stat.games': 'Proje',
    'stat.since': 'Stüdyo',
    'stat.people': 'Kişi',
    'games.title': 'Oyunlar',
    'games.lead': 'Oynayabileceğin, ya da yakında oynayabileceğin şeyler.',
    'video.kicker': 'Hareketli görüntüler',
    'empty.title': 'Henüz bir şey yok',
    'empty.channel': 'YouTube kanalına git',
    'video.title': 'Video',
    'video.lead': 'Kurgular, hareket işleri ve elimde ne varsa onunla çekilmiş şeyler.',
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
