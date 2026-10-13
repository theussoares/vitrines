import type { LandingPage } from '../lib/lp';
import { preparaIaTresLagoas } from './prepara-ia-tres-lagoas';
import { leoComunicacaoVisual } from './leo-comunicacao-visual';

// Cada landing page = um arquivo em src/lps + uma linha aqui. A rota sai do `slug`.
export const landingPages: LandingPage[] = [preparaIaTresLagoas, leoComunicacaoVisual];
