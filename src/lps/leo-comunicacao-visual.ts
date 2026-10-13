import type { LandingPage } from '../lib/lp';

export const leoComunicacaoVisual: LandingPage = {
  slug: 'leo-comunicacao-visual',
  seo: {
    title: 'Léo Comunicação Visual | Adesivos, placas, banners e fachadas em Três Lagoas',
    description:
      'Comunicação que chama atenção. Adesivos, placas, banners, cartões de visita e fachadas em Três Lagoas/MS. Orçamento rápido no WhatsApp.',
  },
  theme: { brand: '#2f6bff', brandDeep: '#12307f', glow: '#7aa6ff' },
  brand: {
    name: 'Léo Comunicação Visual',
    city: 'Três Lagoas',
    logo: '/lps/leo-comunicacao-visual/logo.webp',
    instagram: 'https://www.instagram.com/leocomunicacaovisualtl/',
  },
  whatsapp: {
    number: '5567991616312',
    display: '(67) 99161-6312',
    message: 'Olá! Vim pelo site da Léo Comunicação Visual e quero um orçamento.',
  },
  ui: {
    schemaType: 'LocalBusiness',
    headerCta: 'Pedir orçamento',
    nav: [['#servicos', 'Serviços'], ['#diferenciais', 'Diferenciais'], ['#contato', 'Orçamento'], ['#faq', 'Dúvidas']],
    heroIcon: 'sign',
    heroCards: {
      big: '+1,4 mil',
      small: 'seguidores no Instagram',
      tag: ['Orçamento', 'rápido no WhatsApp'],
      pill: { icon: 'store', text: 'Adesivos · Placas · Banners' },
    },
    methodEyebrow: 'Por que a Léo',
    coursesEyebrow: 'Serviços',
    highlightsEyebrow: 'Para o seu negócio',
    highlightsTitle: 'Do cartão de visita à fachada completa.',
    stepsEyebrow: 'Como pedir',
    stepsTitle: 'Orçamento em três passos.',
  },
  hero: {
    eyebrow: 'Comunicação visual em Três Lagoas/MS',
    title: ['Comunicação que', 'chama atenção', 'e faz sua marca ser vista.'],
    text: 'Adesivos, placas, banners, cartões de visita e fachadas para o seu negócio aparecer. Orçamento rápido direto no WhatsApp.',
    primary: { label: 'Pedir orçamento', href: '#contato' },
    secondary: { label: 'Ver serviços', href: '#servicos' },
    proof: ['Adesivos, placas e banners', 'Orçamento rápido no WhatsApp', 'Atendimento em Três Lagoas/MS'],
  },
  marquee: ['Adesivos', 'Placas', 'Banners', 'Cartão de visita', 'Adesivo perfurado', 'Fachadas', 'Projeto completo'],
  stats: [
    { value: 476, label: 'trabalhos publicados no Instagram' },
    { value: 1464, label: 'seguidores acompanhando' },
    { value: 5, label: 'serviços em destaque' },
    { value: 1, label: 'WhatsApp para orçamento rápido' },
  ],
  method: {
    title: 'Sua marca na rua, do jeito certo.',
    text: 'Da ideia à instalação, a Léo cuida do visual do seu negócio para ele chamar atenção e ser lembrado.',
    items: [
      { icon: 'target', title: 'Feito para chamar atenção', text: 'Peças pensadas para destacar sua marca na fachada, no balcão e nas mãos do cliente.' },
      { icon: 'zap', title: 'Orçamento rápido', text: 'Mande a ideia pelo WhatsApp e receba o orçamento sem enrolação.' },
      { icon: 'store', title: 'Projeto completo', text: 'Do design à fachada: placas, adesivos e acabamento em um só lugar.' },
    ],
  },
  coursesSection: {
    title: 'O que fazemos',
    text: 'Toque em um serviço e peça seu orçamento direto no WhatsApp.',
  },
  courses: [
    { title: 'Adesivos', area: 'Recorte e impressão', icon: 'sticker', blurb: 'Adesivos para vitrines, veículos, embalagens e paredes.' },
    { title: 'Placas', area: 'Sinalização', icon: 'sign', blurb: 'Placas de identificação e sinalização para o seu espaço.' },
    { title: 'Banners', area: 'Impressão', icon: 'flag', blurb: 'Banners para promoções, eventos e inaugurações.' },
    { title: 'Cartão de visita', area: 'Papelaria', icon: 'card', blurb: 'Cartões que passam confiança desde o primeiro contato.' },
    { title: 'Adesivo perfurado', area: 'Vitrines e vidros', icon: 'dots', blurb: 'Comunique na vitrine sem perder a claridade.' },
  ],
  gallery: {
    eyebrow: 'Trabalhos',
    title: 'Trabalhos que já estão por aí.',
    text: 'Fachadas, cartões, placas e impressos feitos para negócios de Três Lagoas.',
    photos: [
      { src: '/lps/leo-comunicacao-visual/trabalhos/trabalho-fachada-pointbeer.webp', alt: 'Fachada e letreiro instalados na PointBeer', tag: 'Fachada e letreiro instalados' },
      { src: '/lps/leo-comunicacao-visual/trabalhos/trabalho-fachada-valedapedra.webp', alt: 'Fachada e adesivagem de vitrine da Vale da Pedra Foods', tag: 'Fachada e adesivagem de vitrine' },
      { src: '/lps/leo-comunicacao-visual/trabalhos/trabalho-cartoes-vamos.webp', alt: 'Cartões de visita impressos', tag: 'Cartões de visita' },
      { src: '/lps/leo-comunicacao-visual/trabalhos/trabalho-panfleto-marmitaria.webp', alt: 'Panfletos e cardápio impressos', tag: 'Panfletos e cardápio' },
      { src: '/lps/leo-comunicacao-visual/trabalhos/trabalho-plaquinha-pix.webp', alt: 'Plaquinha de Pix em acrílico', tag: 'Plaquinha de Pix em acrílico' },
      { src: '/lps/leo-comunicacao-visual/trabalhos/trabalho-quadro-pvc.webp', alt: 'Quadro decorativo em PVC', tag: 'Quadro decorativo em PVC' },
    ],
  },
  highlights: [
    {
      tag: 'Fachadas',
      title: 'Projeto completo de fachada',
      text: 'Design, placa e adesivação para a sua loja chamar atenção de longe.',
      icon: 'store',
      cta: { label: 'Quero uma fachada', href: '#contato' },
    },
    {
      tag: 'Orçamento',
      title: 'Orçamento rápido no WhatsApp',
      text: 'Envie medidas, ideia ou referência e receba o valor sem complicação.',
      icon: 'zap',
      cta: { label: 'Pedir orçamento agora', href: '#contato' },
    },
    {
      tag: 'Papelaria',
      title: 'Cartões e materiais da sua marca',
      text: 'Cartão de visita e materiais com a sua identidade, prontos para entregar.',
      icon: 'card',
      cta: { label: 'Quero meus cartões', href: '#contato' },
    },
  ],
  steps: [
    { title: 'Chame no WhatsApp', text: 'Conte o que você precisa e envie medidas ou referências.' },
    { title: 'Receba o orçamento', text: 'Valor e prazo claros antes de fechar.' },
    { title: 'Aprove e receba', text: 'Produção, acabamento e entrega do seu material.' },
  ],
  faq: [
    { q: 'Onde fica a Léo Comunicação Visual?', a: 'Em Três Lagoas/MS. Chame no WhatsApp para receber a localização e combinar o atendimento.' },
    { q: 'Quais serviços vocês fazem?', a: 'Adesivos, placas, banners, cartões de visita, adesivo perfurado e projetos completos de fachada.' },
    { q: 'Como peço um orçamento?', a: 'Pelo WhatsApp (67) 99161-6312. Envie a ideia, as medidas ou uma referência e retornamos rápido.' },
    { q: 'Vocês fazem o design da arte?', a: 'Consulte pelo WhatsApp: podemos conversar sobre o projeto e o que você já tem pronto.' },
  ],
  finalCta: {
    title: 'Vamos fazer sua marca ser vista?',
    text: 'Chame no WhatsApp e receba um orçamento rápido, sem compromisso.',
    button: 'Pedir orçamento no WhatsApp',
  },
};
