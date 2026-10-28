# Photo Gallery

Photo gallery built with React, Vite, TypeScript and Tailwind CSS. It fetches 30 photos from the Picsum Photos API, filters them by author, and stores favourites in `localStorage`.

## Scripts

```
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

## Structure

```
src/
  main.tsx
  app.tsx
  hooks/use-fetch-photos.ts
  reducers/favourites-reducer.ts
  components/gallery.tsx
  components/photo-card.tsx
  components/search-bar.tsx
```
