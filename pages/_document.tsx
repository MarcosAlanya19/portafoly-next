/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta property='og:title' content='Marcos - Portafolio' />
        <meta property='og:type' content='portafolio' />
        <meta
          property='og:url'
          content='https://marcos-alanya-portafolio.vercel.app/'
          />
        <meta
          property='og:image'
          content='https://lh3.googleusercontent.com/pw/AJFCJaXnWYKCg3tI1K8WbxFuVAsymSILKcXaKyYO4PU3_zMC0GKDjZugpg9Fr86_wSkw7gSW0ZQngIp9ySnSZztEUxww3iV8QLj88-tSdustGEXreYUxYMk9_lJKHe0M52T706d6wPPPs6zeLiTmBHbHZrwozw=w778-h973-s-no?authuser=0'
        />
        <meta
          property='og:description'
          content='Soy Marcos, un desarrollador fullstack con experiencia en la creación de aplicaciones web. Explora mi portafolio para ver mis proyectos, habilidades en desarrollo frontend y backend, y mi pasión por la tecnología.'
          />
        <meta
          property='og:keywords'
          content='Marcos Alanya,Marcos Alanya Pacheco,Desarrollador Fullstack, Portafolio, Desarrollo web, Frontend, Backend, Aplicaciones web, Programador, Fullstack, Frontend, Estudiante, Ingeniero de sistemas, Proyectos, Experiencia, Habilidades, Tecnologías, Diseño web, Desarrollo web, Aplicaciones, Sitios web'
          />
        <meta name='robots' content='index,follow' />
        <title>MarcosAlanya-Portafolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
