# Strømforbrug.dk

Et site af [Elpriser.dk](https://elpriser.dk/): apparaternes strømforbrug, hvad det koster ved månedens marginalpris, og hvornår på
dagen det er billigst at bruge dem. Next.js 16, Tailwind v4, ISR. Hver pris kommer fra el-feed ved visningen; forbrugstallene er TypeScript.

- Regler og arkitektur: `CLAUDE.md`
- Metoden, som læseren ser den: `/metode/`
- Kommandoer: `npm run build` (med prebuild/postbuild-audits), `npm run audit`, `npm run deploy`, `npm run feed-sync`

Deploy sker kun via Vercel CLI — lokalt eller fra GitHub Actions (`.github/workflows/deploy.yml`, kræver `VERCEL_TOKEN`).
