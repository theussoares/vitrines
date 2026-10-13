import type { LandingPage } from '../lib/lp';

export const preparaIaTresLagoas: LandingPage = {
  slug: 'prepara-ia-tres-lagoas',
  seo: {
    title: 'Prepara IA Três Lagoas | Faculdade, cursos profissionalizantes e inglês',
    description:
      'A primeira escola com Inteligência Artificial em toda a metodologia. Faculdade, cursos profissionalizantes e inglês em Três Lagoas/MS. Fale com a secretaria.',
  },
  theme: { brand: '#e11d2a', brandDeep: '#7f0d14', glow: '#ff4d57' },
  brand: {
    name: 'Prepara IA',
    city: 'Três Lagoas',
    instagram: 'https://www.instagram.com/preparaia.treslagoas/',
    links: { label: 'Todos os links', href: 'https://bio.site/preparatreslagoas' },
  },
  whatsapp: {
    number: '5567991394358',
    display: '(67) 9139-4358',
    message: 'Olá! Vim pelo site da Prepara IA Três Lagoas e quero saber mais sobre os cursos.',
  },
  hero: {
    eyebrow: 'A primeira escola com IA em toda a metodologia',
    title: ['Aprenda com', 'Inteligência Artificial', 'e chegue na frente.'],
    text: 'Faculdade, cursos profissionalizantes e inglês em Três Lagoas. Uma escola que ensina o que o mercado pede, com IA presente em cada etapa do seu aprendizado.',
    primary: { label: 'Falar com a secretaria', href: '#contato' },
    secondary: { label: 'Ver cursos', href: '#cursos' },
    proof: ['+50 mil formados', 'Faculdade + Profissionalizantes + Inglês', '2 anos de Prepara IA'],
  },
  marquee: [
    'Profissional da saúde',
    'Rotinas administrativas',
    'Gestão de pessoas',
    'Designer gráfico',
    'Excel avançado e Power BI',
    'Faculdade Prepara',
    'Inglês',
    'Jovem Aprendiz',
  ],
  stats: [
    { value: 50, prefix: '+', suffix: ' mil', label: 'alunos formados' },
    { value: 2, suffix: ' anos', label: 'de Prepara IA em Três Lagoas' },
    { value: 3, label: 'caminhos: faculdade, cursos e inglês' },
    { value: 5, label: 'cursos profissionalizantes em destaque' },
  ],
  method: {
    title: 'IA não é enfeite. É o jeito de ensinar.',
    text: 'Somos a primeira escola a integrar Inteligência Artificial em toda a metodologia. Você aprende a profissão e aprende a usar a IA a seu favor nela.',
    items: [
      {
        icon: 'brain',
        title: 'IA em toda a metodologia',
        text: 'Ferramentas de IA fazem parte das aulas, não de um módulo isolado no fim do curso.',
      },
      {
        icon: 'target',
        title: 'Foco no mercado',
        text: 'Cursos escolhidos pelas áreas que mais empregam na região: saúde, administração, gestão e tecnologia.',
      },
      {
        icon: 'users',
        title: 'Suporte ao aluno',
        text: 'Secretaria pronta para tirar dúvidas, orientar a matrícula e acompanhar você durante o curso.',
      },
    ],
  },
  coursesSection: {
    title: 'Escolha por onde começar',
    text: 'Cursos profissionalizantes para quem quer entrar ou crescer no mercado de trabalho. Toque em um curso e fale direto com a secretaria.',
  },
  courses: [
    {
      title: 'Profissional da saúde',
      area: 'Áreas da saúde',
      icon: 'heart',
      blurb: 'Prepare-se para atuar em uma das áreas que mais contratam.',
    },
    {
      title: 'Rotinas administrativas',
      area: 'Comércio e serviços',
      icon: 'clipboard',
      blurb: 'Organização, atendimento e processos para qualquer empresa.',
    },
    {
      title: 'Gestão de pessoas',
      area: 'Comércio e serviços',
      icon: 'users',
      blurb: 'Lidere times, recrute e desenvolva talentos.',
    },
    {
      title: 'Designer gráfico',
      area: 'Tecnologia e informática',
      icon: 'pen',
      blurb: 'Crie peças e marcas que chamam atenção, com apoio de IA.',
    },
    {
      title: 'Excel avançado e Power BI',
      area: 'Tecnologia e informática',
      icon: 'chart',
      blurb: 'Dados, planilhas e dashboards que viram decisão.',
    },
  ],
  graduates: {
    title: 'Quem já passou por aqui, se formou.',
    text: 'Mais de 50 mil alunos formados. Esta pode ser a sua foto de beca e certificado na mão.',
    photos: [
      { src: '/lps/prepara-ia-tres-lagoas/formados/formado-01.webp', alt: 'Aluno formado da Prepara com beca, canudo e certificado' },
      { src: '/lps/prepara-ia-tres-lagoas/formados/formado-02.webp', alt: 'Aluno formado da Prepara segurando o certificado' },
      { src: '/lps/prepara-ia-tres-lagoas/formados/formado-03.webp', alt: 'Aluna formada da Prepara com beca e certificado' },
      { src: '/lps/prepara-ia-tres-lagoas/formados/formado-04.webp', alt: 'Aluno formado da Prepara sorrindo com o certificado' },
      { src: '/lps/prepara-ia-tres-lagoas/formados/formado-05.webp', alt: 'Aluna formada da Prepara com beca e canudo' },
      { src: '/lps/prepara-ia-tres-lagoas/formados/formado-06.webp', alt: 'Aluna formada da Prepara com certificado' },
      { src: '/lps/prepara-ia-tres-lagoas/formados/formado-07.webp', alt: 'Aluna formada da Prepara na cerimônia de entrega do certificado' },
    ],
  },
  highlights: [
    {
      tag: 'Faculdade',
      title: 'Faculdade Prepara',
      text: 'Ensino superior com a mesma metodologia que une prática, mercado e Inteligência Artificial.',
      icon: 'cap',
      cta: { label: 'Quero saber da faculdade', href: '#contato' },
    },
    {
      tag: 'Inglês',
      title: '1 mês de curso de inglês grátis',
      text: 'Comece agora, sem pagar o primeiro mês. Consulte na secretaria as condições da campanha.',
      icon: 'globe',
      cta: { label: 'Garantir meu mês grátis', href: '#contato' },
    },
    {
      tag: 'Jovem Aprendiz',
      title: 'Aprenda, trabalhe e conquiste seu futuro',
      text: 'Programa para jovens com experiência, qualificação e suporte na entrada no mercado de trabalho.',
      icon: 'rocket',
      cta: { label: 'Quero ser Jovem Aprendiz', href: '#contato' },
    },
  ],
  steps: [
    { title: 'Chame a secretaria', text: 'Conte seu objetivo pelo WhatsApp e receba informações do curso ideal.' },
    { title: 'Escolha seu curso', text: 'Tire todas as dúvidas sobre grade, horários e condições antes de decidir.' },
    { title: 'Faça sua matrícula', text: 'Matrícula simples e suporte do começo ao fim. É só começar.' },
  ],
  faq: [
    {
      q: 'Onde fica a Prepara IA?',
      a: 'Em Três Lagoas/MS. Chame a secretaria pelo WhatsApp para receber a localização e os horários de atendimento.',
    },
    {
      q: 'O que significa ter IA na metodologia?',
      a: 'Que as ferramentas de Inteligência Artificial fazem parte das aulas e das práticas de todos os cursos, para você sair sabendo usá-las na sua profissão.',
    },
    {
      q: 'Quais cursos posso fazer?',
      a: 'Profissional da saúde, Rotinas administrativas, Gestão de pessoas, Designer gráfico, Excel avançado e Power BI, além de inglês, Jovem Aprendiz e a Faculdade Prepara.',
    },
    {
      q: 'Como funciona o mês grátis de inglês?',
      a: 'É uma campanha de 1 mês de curso de inglês sem custo. Fale com a secretaria para conferir regras e disponibilidade.',
    },
    {
      q: 'Como faço a matrícula?',
      a: 'Pelo WhatsApp da secretaria ou pelo link de matrícula. Nossa equipe orienta cada passo.',
    },
  ],
  finalCta: {
    title: 'Seu próximo passo começa com uma mensagem.',
    text: 'A secretaria responde dúvidas, apresenta os cursos e cuida da sua matrícula.',
    button: 'Chamar no WhatsApp',
  },
};
