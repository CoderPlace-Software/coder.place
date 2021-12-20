import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { SiUpwork } from 'react-icons/si';

// image objects
import ivan from '@public/images/team/ivan-m.jpg';
import ihor from '@public/images/team/ihor.jpeg';
import yulia from '@public/images/team/yulia.jpg';
import lviv from '@public/images/lviv1.jpg';

export const general = {
  calendlyUrl: 'https://calendly.com/coderplace/30min',
  linkedInUrl: 'https://www.linkedin.com/company/coderplace-software',
  upworkUrl: 'https://www.upwork.com/ag/coderplace/',
  githubUrl: 'https://github.com/coderplace-software',
  facebookUrl: 'https://facebook.com/CoderPlace.software',
  instagramUrl: 'https://instagram.com/CoderPlace.software',
  messengerUrl: 'https://m.me/coderplace.software',
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
    url: '#',
  },
  {
    icon: 'icon-front-end', // 'icon-color-sample',
    title: 'Data Science & Machine Learning',
    description:
      'We help businesses to empower their capabilities using NPL and CV',
    url: '#',
  },
  {
    icon: 'icon-online-shopping',
    title: 'Quality Assurance',
    description:
      'We provide full cycle of development together with quality assurance that ensures correctness of the application',
    url: '#',
  },
];

export const techStack = [
  { title: 'React', icon: 'fa-react', url: '#' },
  { title: 'Angular', icon: 'fa-angular', url: '#' },
  { title: 'JS/TS', icon: 'fa-js', url: '#' },
  { title: 'Python', icon: 'fa-python', url: '#' },
  { title: 'Node.js', icon: 'fa-node-js', url: '#' },
  // { title: 'HTML5', icon: 'fa-html5', url: '#' },
  { title: 'AWS', icon: 'fa-aws', url: '#' },
  // { title: 'G Cloud', icon: 'fa-google', url: '#' },
  // { title: 'CSS3', icon: 'fa-css3', url: '#' },
];

export const team = [
  {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Matiishyn',
    role: 'Co-founder',
    position: 'JavaScript Expert',
    photoUrl: '/images/team/ivan-m.jpg',
    photoObj: ivan,
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
    photoObj: ihor,
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
    photoObj: yulia,
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
  photoObj: lviv,
  phone: null,
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

export const companySocials = [
  {
    iconCustom: SiUpwork,
    customStyle: { width: 22, height: 22 },
    url: general.upworkUrl,
  },
  { icon: faLinkedinIn, url: general.linkedInUrl },
  { icon: faGithub, url: general.githubUrl },
  { icon: faFacebook, url: general.facebookUrl },
  { icon: faInstagram, url: general.instagramUrl },
];

export const menu = [
  {
    url: '#services',
    title: 'Services',
  },
  {
    url: '#team',
    title: 'Team',
  },
  {
    url: '#portfolio',
    title: 'Portfolio',
  },
  {
    url: '#blog',
    title: 'Blog',
  },
  {
    url: '#contact',
    title: 'Contact',
  },
];
