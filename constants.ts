
import { SectionData } from './types';

export const SECTIONS_DATA: SectionData[] = [
  {
    id: 'about',
    title: {
      pt: 'Quem sou eu',
      en: 'Who I Am',
    },
    paragraphs: {
      pt: [
        'Sou estudante de Ciência da Computação, fascinado pelo que a tecnologia é capaz de realizar de verdade, além das tendências passageiras.',
        'No meu tempo livre, gosto de programar, aprender coisas novas e jogar.',
        'Quero dedicar meus primeiros anos de vida adulta inteiramente à minha evolução pessoal e profissional, construindo conhecimento sólido e experiências que façam sentido para mim e para o mundo ao meu redor.',
      ],
      en: [
        'I am a Computer Science student, fascinated by what technology can truly achieve, beyond fleeting trends.',
        'In my free time, I enjoy programming, learning new things, and gaming.',
        'I want to dedicate my early adult years entirely to my personal and professional growth, building solid knowledge and experiences that are meaningful to me and the world around me.',
      ],
    },
    imageUrl: 'https://avatars.githubusercontent.com/u/201322894?v=4',
  },
  {
    id: 'skills',
    title: {
      pt: 'Habilidades',
      en: 'Skills',
    },
    paragraphs: {
      pt: [
        'Sou um iniciante ainda na programação, mas minha jornada começou cedo.',
        'Com apenas 12 anos, comecei a estudar Lua por pura brincadeira, e foi ali que a paixão por criar soluções nasceu.',
        'Atualmente, estou focado em construir uma base sólida, estudando ativamente as seguintes tecnologias:',
      ],
      en: [
        'I am still a beginner in programming, but my journey started early.',
        'At just 12 years old, I started learning Lua for fun, and that\'s where my passion for creating solutions was born.',
        'Currently, I am focused on building a solid foundation, actively studying the following technologies:',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1920&auto=format&fit=crop',
    skills: [
      { name: 'TypeScript', iconUrl: 'https://skillicons.dev/icons?i=ts&theme=dark' },
      { name: 'JavaScript', iconUrl: 'https://skillicons.dev/icons?i=js&theme=dark' },
      { name: 'C', iconUrl: 'https://skillicons.dev/icons?i=c&theme=dark' },
      { name: 'SQL', iconUrl: 'https://skillicons.dev/icons?i=mysql&theme=dark' },
    ],
  },
  {
    id: 'interests',
    title: {
      pt: 'Interesses',
      en: 'Interests',
    },
    paragraphs: {
      pt: [
        'Tenho grande interesse por programação e matemática, áreas que me desafiam e me permitem criar soluções práticas e eficientes.',
        'Sou apaixonado por filmes e jogos de terror, especialmente os retrô, que valorizam atmosfera e criatividade acima de gráficos.',
        'Gosto de me comunicar, fazer networking e trocar ideias com pessoas que compartilham da mesma paixão por tecnologia e desafios.',
        'Tenho facilidade em liderar projetos, organizar equipes e tomar decisões, sempre buscando aprender e evoluir junto com quem caminha ao meu lado.',
      ],
      en: [
        'I have a great interest in programming and mathematics, areas that challenge me and allow me to create practical and efficient solutions.',
        'I am passionate about horror movies and games, especially retro ones that value atmosphere and creativity over graphics.',
        'I enjoy communicating, networking, and exchanging ideas with people who share the same passion for technology and challenges.',
        'I find it easy to lead projects, organize teams, and make decisions, always seeking to learn and grow alongside those who walk with me.',
      ],
    },
    imageUrl: 'https://images.stockcake.com/public/f/0/6/f06df0a9-588c-45b3-b670-92b498d9b7a1_large/group-study-session-stockcake.jpg',
  },
  {
    id: 'philosophy',
    title: {
      pt: 'Filosofia',
      en: 'Philosophy',
    },
    paragraphs: {
      pt: [
        'Acredito que o que define alguém é a forma como reage às dificuldades. Prefiro focar no que posso controlar, aprender com os obstáculos e manter a calma no caos.',
        'Pra mim, disciplina, foco e clareza valem mais do que qualquer impulso. E acima de tudo, quero entender como as coisas funcionam. Não confio no que não posso decifrar.',
      ],
      en: [
        'I believe that what defines someone is how they react to difficulties. I prefer to focus on what I can control, learn from obstacles, and remain calm in chaos.',
        'For me, discipline, focus, and clarity are worth more than any impulse. And above all, I want to understand how things work. I don\'t trust what I can\'t decipher.',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'contact',
    title: {
      pt: 'Onde Estou',
      en: 'Where I Am',
    },
    paragraphs: {
      pt: [
        'Conecte-se comigo. Estou sempre aberto a novas oportunidades, colaborações e um bom papo sobre tecnologia e desenvolvimento.',
        'Vamos trocar ideias e construir algo juntos.',
      ],
      en: [
        'Connect with me. I am always open to new opportunities, collaborations, and a good chat about technology and development.',
        'Let\'s exchange ideas and build something together.',
      ],
    },
    imageUrl: 'https://avatars.githubusercontent.com/u/201322894?v=4',
    socials: [
      { name: 'GitHub', url: 'https://github.com/sl4apdev', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3291/3291695.png' },
      { name: 'Instagram', url: 'https://instagram.com/esthevan.dev', iconUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png' },
    ],
  },
];