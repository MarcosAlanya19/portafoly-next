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
    ABOUT:
      'https://res.cloudinary.com/dltl0daa4/image/upload/v1683769799/portafolio/about-light_pzncmg.jpg',
    ABOUT_DARK:
      'https://res.cloudinary.com/dltl0daa4/image/upload/v1683769793/portafolio/test_csncyn.jpg',
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
