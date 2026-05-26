# Santec Group – Website

Czysta, modułowa aplikacja **Next.js 14 (App Router) + React 18 + TypeScript + TailwindCSS**.
Hosting: **Vercel**. Repo: **Git**.

## Stack & filozofia

- App Router + Server Components, hydratacja klienta tylko tam, gdzie potrzebna (`'use client'`).
- TailwindCSS + dark theme (`#0B0F0E`) z akcentami **brand-red** i **brand-green**.
- i18n po stronie klienta (kontekst React) – domyślny język **DE**, dostępne **DE / FR / IT / EN**.
- Brak danych wrażliwych w kodzie. Wszystkie konfigurowalne wartości w `.env.local` (gitignored).
- Łatwe rozwijanie: jasna struktura `components/{layout,sections,ui,seo}` + `i18n/locales`.

## Struktura
```
src/
├── app/
│   ├── layout.tsx          # root layout, metadata, JSON-LD, I18nProvider
│   ├── page.tsx            # strona główna (komponuje sekcje)
│   ├── globals.css
│   ├── robots.ts           # sterowane ENV NEXT_PUBLIC_ALLOW_INDEXING
│   ├── sitemap.ts
│   └── api/contact/route.ts
├── components/
│   ├── layout/  (Header, Footer, LanguageSwitcher)
│   ├── sections/ (Hero, Sanierung, Gebaeudetechnik, UeberUns, Prozess, Kontakt)
│   ├── ui/  (Button, Container, Logo)
│   └── seo/ (JsonLd)
├── i18n/
│   ├── config.ts           # lista locale + DEFAULT_LOCALE = 'de'
│   ├── types.ts            # typ Dictionary (kontrakt tłumaczeń)
│   ├── dictionaries.ts
│   ├── I18nProvider.tsx
│   └── locales/{de,fr,it,en}.ts
└── lib/
    ├── env.ts              # jedyne miejsce czytające process.env
    └── seo.ts              # JSON-LD LocalBusiness + meta robots
```

## Start lokalny
```bash
cp .env.example .env.local        # uzupełnij wartości lokalnie
npm install
npm run dev                       # http://localhost:3000
```

## Indeksowanie w Google – jeden przełącznik
Plik `.env.local` (lub Vercel → Project Settings → Environment Variables):

| Wartość | Efekt |
|---|---|
| `NEXT_PUBLIC_ALLOW_INDEXING=false` | `robots.txt: Disallow: /` + `<meta name="robots" content="noindex,nofollow">`. Sitemap pusta. |
| `NEXT_PUBLIC_ALLOW_INDEXING=true`  | `robots.txt: Allow: /` + meta `index,follow`. Sitemap aktywny. |

Po zmianie wartości – **redeploy** (Vercel) lub restart `npm run dev`.

## Lokalne SEO (JSON-LD)
Schema typu `LocalBusiness` jest renderowane w `app/layout.tsx` przez `<JsonLd />` z danymi z `lib/env.ts` (NIP-owe rzeczy = ENV, nie hardcode).
Plik do edycji: `src/lib/seo.ts` → `buildLocalBusinessJsonLd()`.

## Tłumaczenia
- Domyślny język: **`de`** (`src/i18n/config.ts: DEFAULT_LOCALE`).
- Wybór użytkownika zapisywany w `localStorage` (`santec.locale`). SSR zawsze renderuje DE → zgodnie z wymaganiem.
- Dodanie nowego języka: utwórz `src/i18n/locales/<kod>.ts`, dopisz do `LOCALES` i `dictionaries`.

## Formularz kontaktowy
- Endpoint: `POST /api/contact` (`src/app/api/contact/route.ts`).
- Bez `MAIL_PROVIDER_API_KEY` działa w trybie log-only (waliduje, loguje – bez wysyłki).
- Sekrety **wyłącznie po stronie serwera** (bez prefiksu `NEXT_PUBLIC_`).

## Deploy na Vercel
1. `git init && git add . && git commit -m "init"` → push do GitHub.
2. W Vercel: *Import Project* → wybierz repo.
3. Skopiuj zmienne z `.env.example` do *Environment Variables* (Production / Preview).
4. Deploy. Pierwszy deploy w trybie **noindex**.
5. Gdy strona gotowa → ustaw `NEXT_PUBLIC_ALLOW_INDEXING=true` i redeploy.

## Skrypty
```
npm run dev          # dev server
npm run build        # build produkcyjny
npm run start        # uruchom build
npm run lint         # eslint
npm run seo:enable   # przypomnienie jak włączyć indeksowanie
npm run seo:disable  # przypomnienie jak wyłączyć indeksowanie
```

## Bezpieczeństwo
- `.env*` w `.gitignore`.
- Nagłówki bezpieczeństwa w `vercel.json`.
- `process.env` czytane wyłącznie w `src/lib/env.ts`.
