export const general = {
  calendlyUrl: 'https://calendly.com/coderplace/30min',
};

// icons:
// icon-front-end, icon-color-sample, icon-online-shopping

export const services = [
  {
    icon: 'icon-graphic-design',
    title: 'Web development',
    description:
      'We us the cutting-edge technologies and reliable solutions for web development',
    url: '',
  },
  {
    icon: 'icon-front-end', // 'icon-color-sample',
    title: 'Data Science & Machine Learning',
    description: 'TODO',
    url: '',
  },
  {
    icon: 'icon-online-shopping',
    title: 'Quality Assurance',
    description:
      'We provide full cycle of development together with quality assurance that ensures correctness of the application',
    url: '',
  },
];

export const techStack = [
  { title: 'React', icon: 'fa-react' },
  { title: 'Angular', icon: 'fa-angular' },
  { title: 'JS/TS', icon: 'fa-js' },
  { title: 'Python', icon: 'fa-python' },
  { title: 'Node.js', icon: 'fa-node-js' },
  // { title: 'HTML5', icon: 'fa-html5' },
  { title: 'AWS', icon: 'fa-aws' },
  // { title: 'G Cloud', icon: 'fa-google' },
  // { title: 'CSS3', icon: 'fa-css3' },
];

export const team = [
  {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Matiishyn',
    role: 'Co-founder',
    position: 'JavaScript Expert',
    photoUrl: '/images/team/ivan-m.jpg',
    socials: [
      /*{
        type: 'website',
        icon: 'fa-paper-plane',
        url: 'https://matiishyn.dev',
      },*/
      {
        type: 'linkedin',
        icon: 'fa-linkedin-in',
        url: 'https://www.linkedin.com/in/matiishyn/',
      },
      {
        type: 'instagram',
        icon: 'fa-instagram',
        url: 'https://www.instagram.com/i.matiishyn/',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Ihor',
    lastName: 'Dehtiarenko',
    role: 'Co-founder',
    position: 'Python/ML Expert',
    photoUrl: '/images/team/ihor.jpeg',
    socials: [
      {
        type: 'linkedin',
        icon: 'fa-linkedin-in',
        url: 'https://www.linkedin.com/in/ihor-dehtiarenko/',
      },
    ],
  },
  {
    id: 3,
    firstName: 'Yuliia',
    lastName: 'Zaborska',
    position: 'QA Engineer',
    photoUrl: '/images/team/yulia.jpg',
    socials: [
      {
        type: 'linkedin',
        icon: 'fa-linkedin-in',
        url: 'https://www.linkedin.com/in/zaborska/',
      },
      {
        type: 'instagram',
        icon: 'fa-instagram',
        url: 'https://www.instagram.com/yulia_zaborska/',
      },
    ],
  },
];
