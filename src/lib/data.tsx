import { Github, LinkedinIcon, Figma } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/logo-php.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoSocket from '/public/images/logos/icon-golang.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-newus.jpg';
import LogoGreenApex from '/public/images/logos/logo-hicolleagues.png';
import LogoGreenApexLight from '/public/images/logos/logo-hicolleagues.png';
import LogoDotnpixel from '/public/images/logos/logo-binar.png';
import LogoDotnpixelLight from '/public/images/logos/logo-binar.png';

import ProjectFiskil from '/public/images/project-sikumba.png';
import ProjectWingie from '/public/images/project-sanitary.png';
import ProjectPepehousing from '/public/images/project-newus.png';
import ProjectMPP from '/public/images/project-mpp.png';


import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/luluagustin999',
  GITHUB_REPO: 'https://github.com/luluagustin999',
  LINKED: 'https://www.linkedin.com/in/luluagustin/',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/luluagustin999',
  },
  {
    icon: LinkedinIcon,
    url: 'linkedin.com/in/luluagustin/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'PHP Laravel',
    logo: LogoTypescript,
    url: 'https://www.php.net/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Go Lang',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://go.dev/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Fullstack Developer',
    startDate: new Date(2023, 12),
    currentlyWorkHere: true,
    summary: [
      'Acted as team lead in Newus Technology.',
      'Acted as project manager  in Newus Technology.',
      'Worked for various types of systems such as service systems, e-commerce systems, etc.',
      'Worked with a variety of technologies, including Express.js, PostgreSQL, Socket, and others.',
      'Handled sprint planning & task distribution.',
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Greenapex logo',
    position: 'Backend Developer',
    startDate: new Date(2022, 7),
    endDate: new Date(2022, 11),
    summary: [
      'Changing architecture from monolithic to microservice',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture.',
      'Create skema database.',
      'Worked on enterprise-level projects.',
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Dotnpixel logo',
    position: 'Full Stack Developer',
    startDate: new Date(2022, 1),
    endDate: new Date(2022, 6),
    summary: ['Intern as a full stack developer (React / Express).'],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Rumah Sanitary',
    description:
      'Rumah sanitary is a business directory that provides a variety of complete and quality sanitation needs such as water taps, showers, solar water heaters, electric water heaters, and others. We also provide tips and tricks on how to select, install and maintain sanitary equipment.',
    url: 'https://rumahsanitary.com/',
    previewImage: ProjectWingie,
    technologies: [
      'Laravel',
      'HTML',
      'CSS',
      'MySQl',
    ],
  },
  {
    name: 'SIKUMBA LAMPUNG',
    description:
      'SIKUMBA is the Calibration and Quality Testing Information Service System by UPTD BPSMB Lampung in response to the rapidly advancing information technology challenges to reach services such as testing, certification, and calibration available at UPTD BPSMB Lampung. ',
    url: 'https://sikumba.disperindag.lampungprov.go.id/',
    previewImage: ProjectFiskil,
    technologies: [
      'Laravel',
      'PostgreSQL',
      'AWS Strorage',
    ],
  },
  {
    name: 'Newus Company Profile',
    description:
      'The development of the Newus Tech company website aims to create an effective digital platform for showcasing the company&apos;s services, products, and values. The website is designed to provide a smooth, informative, and accessible user experience, reflecting Newus Tech&apos;s identity and professionalism',
    url: 'https://newus.id',
    previewImage: ProjectPepehousing,
    technologies: [
      'Next.js',
      'Express.js',
      'AWS Cloud',
      'MySQl',
    ],
  },
  {
    name: 'MPP Digital',
    description:
      'Here a revised description for MPP Digital that aligns with the concept of an integrated service submission system: MPP Digital is an integrated platform designed to streamline service submissions across various institutions, enabling both online and offline processes. With MPP Digital, users can easily access and apply for services from multiple government and private entities in a seamless, efficient manner. This platform empowers users to manage their submissions anytime, anywhere, reflecting Newus Tech commitment to providing innovative solutions for public service accessibility.',
    url: 'https://mpp.lampungtimurkab.go.id/',
    previewImage: ProjectMPP,
    technologies: [
      'Next.js',
      'Express.js',
      'AWS Cloud',
      'PostgreSQl',
      'Redis',
      'Notification Email',
      'Socket io'
    ],
  },
];
