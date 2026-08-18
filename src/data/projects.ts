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
        en: 'A diorama-scale management game. Meat leaves the stack for the grill, what cooks there goes to the cutting board, and what comes off the board goes to the register. At first every one of those steps is you, walking it by hand.',
        tr: 'Diorama ölçeğinde bir işletme oyunu. Et, yığından ocağa gider; orada pişen kesme tahtasına, tahtadan çıkan da kasaya. Başlangıçta bu adımların hepsi sensin — hepsini kendi ayağınla yürüyorsun.',
      },
      {
        en: 'Then you hire. Someone to clear the dishes, a cashier for the drive-thru window, another for the counter. The HR and GM rooms let you upgrade your staff and yourself, and belts start carrying things between machines so nobody has to walk that stretch again.',
        tr: 'Sonra işe alım başlıyor. Bulaşık toplayan biri, drive-thru penceresine bir kasiyer, normal kasaya bir tane daha. İK ve GM odaları hem çalışanları hem seni geliştirmene izin veriyor; makineler arasına kurduğun bantlarla da o yolu bir daha kimsenin yürümesi gerekmiyor.',
      },
      {
        en: 'The shop starts running without you — which is the whole point, and also the danger. Ignored customers do not simply vanish. They cost you, and the street remembers.',
        tr: 'Dükkân sensiz işlemeye başlıyor — bütün mesele bu, tehlike de tam burada. Görmezden gelinen müşteriler öylece kaybolmuyor. Sana bir bedeli oluyor ve sokak bunu hatırlıyor.',
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
    title: 'Brew N’ Draw',
    tagline: {
      en: 'A cosy café where the hard part is getting the face right.',
      tr: 'Zor kısmı yüzü doğru çizmek olan sıcak bir kafe.',
    },
    description: [
      {
        en: 'You take the order, then step behind the prep counter and actually make it: boil the water, steep the tea, pick the extras, serve it in the right glass. Each step is its own small animation or minigame, so a cup is something you build rather than something you click.',
        tr: 'Siparişi alıyorsun, sonra hazırlama tezgâhına geçip gerçekten yapıyorsun: suyu kaynat, çayı demle, ekstraları seç, doğru bardakla ver. Her adımın kendi küçük animasyonu ya da mini oyunu var; yani bardak tıkladığın bir şey değil, kurduğun bir şey.',
      },
      {
        en: 'Some customers are signature ones, and they bring the drawing task. You look at their face and draw the portrait to a required accuracy — seventy per cent early on, ninety by the end of the game. Every one you land goes into the portrait book your grandfather left behind, and filling that book is the reason you are here.',
        tr: 'Bazı müşteriler imza müşteriler ve beraberlerinde çizim görevini getiriyorlar. Yüzlerine bakıp portreyi istenen doğrulukta çiziyorsun — başlarda yüzde yetmiş, oyunun sonuna doğru yüzde doksan. Tutturduğun her portre büyükbabandan kalan deftere giriyor; o defteri doldurmak da burada olma sebebin.',
      },
      {
        en: 'Between orders you track stock on the computer and run the online shop through the courier system. Ship the right thing and your rating climbs; ship the wrong thing and it falls — and that rating decides both your tips and how many orders walk in.',
        tr: 'Siparişler arasında bilgisayardan stok takibi yapıyor, kurye sistemiyle online dükkânı çeviriyorsun. Doğru ürünü gönderirsen puanın yükseliyor, yanlışı gönderirsen düşüyor — ve o puan hem bahşişini hem de kapından kaç sipariş gireceğini belirliyor.',
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
    title: 'Minibüs Tycoon — All Aboard!',
    tagline: {
      en: 'Drive the route yourself, then hire someone who drives it better.',
      tr: 'Hattı önce sen sür, sonra senden iyi sürecek birini işe al.',
    },
    description: [
      {
        en: 'You run a minibus line. You drive it yourself with WASD, working through a task list while the day throws its own events at you — and every run is scored on two currencies at once: the money you make and how satisfied the people in the back are.',
        tr: 'Bir minibüs hattı işletiyorsun. Direksiyona WASD ile sen geçiyorsun, bir yandan görev listesini götürüyorsun, bir yandan gün kendi olaylarını önüne atıyor — ve her sefer iki para birimiyle birden ölçülüyor: kazandığın para ve arkadakilerin memnuniyeti.',
      },
      {
        en: 'The terminal is where the company actually grows. You spend what you earn on upgrades there and you hire drivers, so the line keeps running on trips you are not personally making.',
        tr: 'Şirketin asıl büyüdüğü yer terminal. Kazandığını orada upgrade’lere yatırıyor, şoför işe alıyorsun; böylece hat, senin bizzat çıkmadığın seferlerle de dönmeye devam ediyor.',
      },
      {
        en: 'Keep at it and you climb through three tiers of minibus, each a real step up from the last. It runs in the browser and on mobile.',
        tr: 'Devam ettikçe üç farklı seviyedeki minibüsler arasında ilerliyorsun; her biri bir öncekinden gerçek anlamda bir basamak yukarı. Tarayıcıda ve mobilde oynanıyor.',
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
    slug: 'mayor-of-medieval',
    title: 'Mayor of Medieval',
    tagline: {
      en: 'Chop wood by hand until you never have to chop wood again.',
      tr: 'Bir daha odun kesmek zorunda kalmayana kadar elinle odun kes.',
    },
    description: [
      {
        en: 'A medieval town that starts with you gathering the wood and stone yourself. Bit by bit you automate the gathering and hire workers to do it, until the raw materials arrive without your hands on them.',
        tr: 'Ortaçağ kasabası, odunu ve taşı kendi elinle toplayarak başlıyor. Yavaş yavaş toplamayı otomasyona çeviriyor, bunu yapacak işçiler alıyorsun; sonunda hammadde sen dokunmadan geliyor.',
      },
      {
        en: 'From there the town fills in. You farm, you keep and slaughter animals and sell what comes off them, and you fish. Those materials go into real buildings: a mill, a brewery, an inn.',
        tr: 'Ondan sonra kasaba kendini dolduruyor. Tarla kuruyorsun, hayvan besleyip kesiyor ve çıkanı satıyorsun, balık tutuyorsun. O hammaddeler de gerçek yapılara dönüşüyor: değirmen, bira üretim hanesi, han.',
      },
      {
        en: 'Push far enough and a smithy goes up, and the town stops only feeding itself and starts producing fighters.',
        tr: 'Yeterince ilerlersen demirci kuruluyor ve kasaba sadece kendini doyurmayı bırakıp savaşçı üretmeye başlıyor.',
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
