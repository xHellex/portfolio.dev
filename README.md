# Felipe Peñaloza - Front-End Developer Portfolio 🚀

![Astro](https://img.shields.io/badge/Astro-4.15-FF7E33?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3.25-3068b7?style=for-the-badge&logo=zod&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-1.62-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)

Un portafolio personal moderno diseñado para destacar 10 años de experiencia en desarrollo Front-End. Construido con una arquitectura robusta, SSG ultrarrápido y control de calidad automatizado.

[🌍 **Ver Portafolio en Vivo**](https://portfolio-felipe-penaloza.netlify.app/)

## 🌟 Características Principales

- **Arquitectura de Tipado Estricto:** Código migrado a Strict TypeScript (`noImplicitAny`, `strict: true`). Cero types-casting inseguros.
- **Validación Zod en Tiempo de Ejecución:** Los datos de entrada (CV y proyectos en ambos idiomas) pasan por un esquema estricto (`cvSchema.ts`), rompiendo el build inmediatamente si falta una propiedad crítica. Asegura 100% de integridad en los Props inyectados en la UI.
- **Flujos Testeados End-To-End (E2E):** Suite de Playwright que valida aserciones de enrutamiento estricto, switches de traducción Multi-Idioma (i18n ES/EN) y visualización responsiva a escala (Mobile vs Desktop Layouts).
- **Diseño Asimétrico "Modern Retro":** 
  - Panel "Hero" adhesivo a la izquierda (*Bento Grid Style*).
  - Efectos *Glassmorphism* y micro-animaciones al desplazarse (`IntersectionObserver`, resplandores Cyan/Neon, Hover effects).
- **SEO & OpenGraph Escalar:** Metadatos globales dinámicamente alimentados para generar tarjetas legibles y altamente interactivas en LinkedIn, Slack o Twitter.

## 🛠️ Stack Tecnológico

- **Framework Core:** [Astro](https://astro.build)
- **Estilos:** Tailwind CSS 
- **Validación de Datos:** Zod
- **Testing:** Playwright 

## 🚀 Instalación y Desarrollo Local

Clona el repositorio e instala las dependencias para correr el servidor local:

```bash
# 1. Clona el proyecto
git clone https://github.com/xHellex/portfolio.dev.git

# 2. Entra en el directorio
cd portfolio.dev

# 3. Instala dependencias
npm install
```

### Comandos Principales

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el compilado estático para producción y ejecuta TypeScript Check (`astro check`) |
| `npm run preview` | Previsualiza tu build de producción de manera local |
| `npm run test:e2e` | Ejecuta la suite de Playwright completa y emite el reporte de control de calidad E2E |

## 📁 Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos accesibles y Favicon
├── src/
│   ├── components/         # Bloques modulares (Astro) -> Header, Hero, Sections.
│   ├── data/               # Bases de datos semánticas -> cv.json y cv-en.json
│   ├── icons/              # Componentes funcionales SVG puros
│   ├── layouts/            # Archivos meta/genéricos (Head, Global CSS)
│   ├── lib/                # Utilidades -> Parseo Zod cvData.ts
│   ├── pages/              # Rutas generadas: / (ES), /en (EN), /cv (Imprimible)
│   └── cvSchema.ts         # Contrato central estricto de tipos de Interfaz
├── tests/
│   └── e2e/                # Archivos de Testing automatizado (Playwright Specs)
└── tsconfig.json           # Configuración de compilador en modo Strict
```

## � Documentación Continua

Las modificaciones relevantes desde la planeación original pueden encontrarse en el historial de Artifacts en la configuración base si ha sido implementada. Todo el flujo E2E ha sido documentado localmente en logs de reportería Playwright.

---
*Construido por **Felipe Peñaloza Oyarzún***