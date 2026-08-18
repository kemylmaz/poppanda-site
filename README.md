# poppanda.net

Kemal Yılmaz'ın portföy sitesi. Astro ile kurulu statik site; İngilizce kök
dizinde (`/`), Türkçe `/tr/` altında. Her sayfa bir kez yazılır, iki dil aynı
görünümleri paylaşır.

## Çalıştırma

```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ klasörüne statik çıktı
```

## İçerik nasıl eklenir

Neredeyse her şey tek bir dosyada: `src/data/projects.ts`.

**Yeni oyun:** `games` dizisine bir nesne ekle. `slug` otomatik olarak
`/games/<slug>` ve `/tr/games/<slug>` sayfalarını üretir. `featured: true`
dersen ana sayfada da görünür.

**Yeni blog yazısı:** `src/content/blog/` altına `yazi-adi.tr.md` ve `yazi-adi.en.md`
oluştur. `sablon.tr.md` dosyasını kopyalaman en kolayı — içindeki `draft` satırını
`false` yaptığın an yayına girer. Video paylaşacaksan `youtube` alanına videonun
kimliğini yaz (`youtube.com/watch?v=` sonrası gelen kısım).

**Görseller:** `public/media/` altına koy, veriye `/media/dosya.png` diye
referans ver.

**Arayüz metinleri:** `src/i18n/ui.ts`. **Biyografi:** `src/views/About.astro`.
**E-posta ve sosyal linkler:** `src/data/projects.ts` içindeki `site` nesnesi.

## Yayın

Cloudflare Pages'e bağlıdır. `main` dalına her push otomatik yayınlanır.
Build komutu `npm run build`, çıktı dizini `dist`.
