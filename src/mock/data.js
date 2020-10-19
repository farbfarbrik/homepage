import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sascha Dörnath | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Sascha',
  subtitle: 'I like to make magic happen with code',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'I am a Full Stack Web Developer with focus on front end development. With every line of code, I strive to make the web a more beautiful place.',
  paragraphTwo:
    'I am passionate about building scalable software, creating solutions for real world problems and learning every day to grow as a professional in the web development field.',
  paragraphThree:
    'Current Tech Stack: Javascript, Typescript, React, Angular, HTML, CSS, NodeJS, Express, PostgreSQL, MongoDB, Agile, Git',
  resume: 'https://drive.google.com/file/d/1mFiP8tFVK4VYjCnjmLKAMJqdT0_JdnD9/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'face-recognition.png',
    title: 'Face Recognition',
    info:
      'A full-stack web app that allows you to detect faces on any image. The face recognition is achieved by using the clarifai API. User authentication was implemented by myself.',
    info2:
      'I used React, Node, Express.js and PostgreSQL for creating this app. The app is hosted on Heroku.',
    url: 'https://face-recognition-4.herokuapp.com/',
    repo: 'https://github.com/farbfarbrik/face-recognition',
  },
  {
    id: nanoid(),
    img: 'mission-control.png',
    title: 'Space Control Center',
    info:
      'A full-stack web app that uses the SpaceX API to query all upcoming and previous space missions. Schedule your own space flights missions to one of the habitable kepler exoplants!',
    info2: 'I used Javascript, CSS, HTML and Deno for creating this app. The app is hosted on AWS.',
    url: 'http://ec2-18-185-172-189.eu-central-1.compute.amazonaws.com:8000/index.html',
    repo: 'https://github.com/farbfarbrik/space-control-center',
  },
  {
    id: nanoid(),
    img: 'paint-online.png',
    title: 'Paint Online',
    info:
      'A front end app that uses the HTML canvas element to create a paint clone in the browser. The app uses localStorage in order to store and retrieve your drawing.',
    info2: 'I used Javascript, CSS, HTML for creating this app.',
    url: 'https://farbfarbrik.github.io/paint-online/',
    repo: 'https://github.com/farbfarbrik/paint-online',
  },
  {
    id: nanoid(),
    img: 'video-player.png',
    title: 'Custom Video Player',
    info: 'A custom built Video Player that has all features of a modern web video player.',
    info2: 'I used Javascript, CSS, HTML for creating this app.',
    url: 'https://farbfarbrik.github.io/video-player/',
    repo: 'https://github.com/farbfarbrik/video-player',
  },
  {
    id: nanoid(),
    img: 'cookbook.png',
    title: 'Cookbook',
    info:
      'A full-stack web app that allow you to manage your recipes in this cookbook. The app has i18n support to switch between German and English.',
    info2:
      'I used Angular, Typescript and Firebase for creating this app. The app is hosted on Firebase.',
    url: 'https://cookbook-1a1b6.web.app/auth',
    repo: 'https://github.com/farbfarbrik/Cookbook',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's get in touch",
  email: 'sascha.doernath@gmx.de',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sascha-d%C3%B6rnath-a69054b4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/farbfarbrik',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
