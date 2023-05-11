export const config = {
  ROUTES: {
    INDEX: '/',
    CV: '',
    PROYECTS: '/proyectos',
    SKILLS: '',
  },
  IMG: {
    PROJECT: {
      GUITAR:
        'https://raw.githubusercontent.com/MarcosAlanya19/front-guitarLA-JAM/main/public/img/homepage.PNG',
      QUOTES:
        'https://raw.githubusercontent.com/MarcosAlanya19/front-create-quotes/main/public/img.png',
      ENCRYP:
        'https://raw.githubusercontent.com/MarcosAlanya19/Challenge-1-Oracle-One/main/public/img.PNG',
    },
    ABOUT_ME: '/img/about-me.png',
    ABOUT: '/img/about-light.jpg',
    ABOUT_DARK: '/img/test.jpg',
  },
  THEME: {
    BG: 'dark:bg-indigo-900',
    TEXT: 'text-white',
  },
  ENV: {
    SEND_EMAIL: {
      USER: process.env.API_SENDEMAIL_USER || '',
      PASSWORD: process.env.API_SENDEMAIL_PASSWORD || '',
    },
  },
};
