import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const general = {
  calendlyUrl: 'https://calendly.com/coderplace/30min',
};

export const projectsCompleted = 36;

// icons:
// icon-front-end, icon-color-sample, icon-online-shopping

export const services = [
  {
    icon: 'icon-graphic-design',
    title: 'Web development',
    description:
      'We use the cutting-edge technologies and reliable solutions for web development',
    url: '',
  },
  {
    icon: 'icon-front-end', // 'icon-color-sample',
    title: 'Data Science & Machine Learning',
    description:
      'We help businesses to empower their capabilities using NPL and CV',
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
      {
        type: 'website',
        icon: faPaperPlane,
        url: 'https://matiishyn.dev',
      },
      {
        type: 'email',
        icon: faEnvelope,
        url: 'mailto:ivan@coder.place',
      },
      {
        type: 'linkedin',
        icon: faLinkedinIn,
        url: 'https://www.linkedin.com/in/matiishyn/',
      },
      {
        type: 'instagram',
        icon: faInstagram,
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
        type: 'email',
        icon: faEnvelope,
        url: 'mailto:ihor@coder.place',
      },
      {
        type: 'linkedin',
        icon: faLinkedinIn,
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
        type: 'email',
        icon: faEnvelope,
        url: 'mailto:hello@coder.place',
      },
      {
        type: 'linkedin',
        icon: faLinkedinIn,
        url: 'https://www.linkedin.com/in/zaborska/',
      },
      {
        type: 'instagram',
        icon: faInstagram,
        url: 'https://www.instagram.com/yulia_zaborska/',
      },
    ],
  },
];

export const office = {
  location: 'Lviv, Ukraine',
  address: '64a Kulparkivska str',
  email: 'hello@coder.place',
  photoUrl: '/images/lviv1.jpg',
};

export const projects = [
  {
    id: 1,
    title: 'Coupons Marketplaces',
    description: 'Chrome Extension, API, Public Website',
    url: '#',
    imageUrl: '/images/projects/chrome-ext-1.png',
    tech: ['React'],
  },
  {
    id: 2,
    title: 'E-commerce website',
    description: 'E-commerce website, Admin website, API',
    url: '#',
    imageUrl: '/images/projects/ecommerce.webp',
    tech: ['React'],
  },
  {
    id: 3,
    title: 'Web Trading Platform',
    description: 'Trading Platform, API',
    url: '#',
    imageUrl: '/images/projects/trading2.jpg',
    tech: ['React'],
  },
];
