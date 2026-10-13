# Vitrines

Landing pages em Astro + Tailwind v4. Cada LP é uma rota estática.

## Nova LP
1. Crie `src/lps/<slug>.ts` exportando um `LandingPage` (veja `prepara-ia-tres-lagoas.ts`).
2. Registre em `src/lps/index.ts`. A rota `/<slug>` sai automática.

`pnpm dev` · `pnpm build` · `SITE_URL=https://seu-dominio pnpm build`
