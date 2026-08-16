const fs = require('fs');
const path = require('path');

const cvPath = path.join(__dirname, 'src', 'data', 'cv.json');
const cvEnPath = path.join(__dirname, 'src', 'data', 'cv-en.json');

// Read files
let cv = JSON.parse(fs.readFileSync(cvPath, 'utf8'));
let cvEn = JSON.parse(fs.readFileSync(cvEnPath, 'utf8'));

// 1. Update basics
cv.basics.label = "Desarrollador Front-End con 10 años de experiencia";
cvEn.basics.label = "Front-End Developer with 10 years of experience";

const newSummary = "Desarrollador Front-End con 10 años de experiencia construyendo interfaces web escalables, accesibles y centradas en el usuario. Especializado en plataformas enterprise y transaccionales — Liferay, AEM, Drupal y Salesforce Marketing Cloud — con foco en flujos de pago, accesibilidad WCAG y rendimiento. Complemento el frontend con backend en Java y Spring Boot para integrar APIs y participar en el ciclo completo del producto.";
cv.basics.summary = newSummary;
cv.basics.cvSummary = newSummary;

const newSummaryEn = "Front-End Developer with 10 years of experience building scalable, accessible, and user-centric web interfaces. Specialized in enterprise and transactional platforms — Liferay, AEM, Drupal, and Salesforce Marketing Cloud — focusing on payment flows, WCAG accessibility, and performance. I complement frontend skills with Java and Spring Boot backend development for API integration and participation in the full product lifecycle.";
cvEn.basics.summary = newSummaryEn;
cvEn.basics.cvSummary = newSummaryEn;

// 2. Update Work Experience
const newWork = [
  {
    "name": "Freelance",
    "position": "Desarrollador Web Independiente",
    "url": null,
    "startDate": "2026-04-01",
    "endDate": null,
    "summary": "Auditoría técnica y de seguridad de aplicación React + Node.js: identificación y corrección de vulnerabilidades críticas. Despliegue en cPanel. Mantención de sitios WordPress y Shopify.",
    "highlights": [
      "Auditoría técnica y de seguridad de aplicación React + Node.js: identificación y corrección de vulnerabilidades críticas (XSS almacenado, endpoints de escritura sin protección, manejo inseguro de sesión en cliente)",
      "Despliegue y puesta en producción de la aplicación Node.js sobre cPanel, resolviendo bugs de arranque y de servido de assets estáticos",
      "Mantención y optimización de sitios WordPress y tiendas Shopify para clientes recurrentes"
    ]
  },
  {
    "name": "Publicis Groupe",
    "position": "Webmaster",
    "url": null,
    "startDate": "2025-02-01",
    "endDate": "2026-04-01",
    "summary": "Desarrollo frontend de landings de concursos y formularios para campañas de marcas como Nescafé y Tarragona, integrando el flujo de datos con backend en Firebase.",
    "highlights": [
      "Desarrollo frontend de landings de concursos y formularios para campañas de marcas como Nescafé y Tarragona, integrando el flujo de datos con backend en Firebase",
      "Desarrollo de componentes personalizados para Drupal y mantenimiento de landings en Adobe Experience Manager (AEM), en experiencias multidispositivo",
      "Maquetación de correos electrónicos en HTML compatibles con múltiples clientes de correo, optimizados para Salesforce Marketing Cloud"
    ]
  },
  {
    "name": "Freelance",
    "position": "Desarrollador Web Independiente",
    "url": null,
    "startDate": "2024-02-01",
    "endDate": "2025-01-31",
    "summary": "Mantención y personalización de tiendas Shopify. Desarrollo de sitios WordPress para el sector inmobiliario.",
    "highlights": [
      "Mantención y personalización de tiendas Shopify: ajustes de theme, corrección de errores y mejoras de conversión",
      "Desarrollo de sitios WordPress para el sector inmobiliario, incluyendo themes a medida y fichas de propiedades",
      "Asistencia y reemplazos en campañas de email marketing para agencias, junto con formación autodidacta en desarrollo backend (Java, Spring Boot) y despliegue con Docker"
    ]
  },
  {
    "name": "IGT — Sencillito.com",
    "position": "Front-End Developer",
    "url": "https://www.sencillito.com",
    "startDate": "2021-07-01",
    "endDate": "2024-02-29",
    "summary": "Desarrollo y mantenimiento de componentes front-end sobre Liferay para una de las principales plataformas de pago de cuentas y recargas de Chile.",
    "highlights": [
      "Desarrollo y mantenimiento de componentes front-end sobre Liferay para una de las principales plataformas de pago de cuentas y recargas de Chile",
      "Optimización de los flujos del proceso de pago e implementación del reporte de errores dentro del flujo transaccional, mejorando la trazabilidad de fallos en producción",
      "Implementación del módulo de registro de cuenta corriente del usuario, habilitando el proceso de devoluciones automáticas",
      "Desarrollo de dos formatos de comprobante de pago: voucher general para pago presencial de cuentas y voucher doble para pagos FONASA",
      "Integración de medios de pago con pasarelas externas, validación de tarjetas en cliente y servidor, y cumplimiento de estándares de accesibilidad WCAG en los flujos críticos"
    ]
  },
  {
    "name": "Grupo B&L",
    "position": "Front-End Developer",
    "url": null,
    "startDate": "2018-07-01",
    "endDate": "2021-06-30",
    "summary": "Desarrollo, implementación y mantenimiento de sitios web para el sector inmobiliario en WordPress.",
    "highlights": [
      "Desarrollo, implementación y mantenimiento de sitios web para el sector inmobiliario en WordPress: themes personalizados desde cero y optimización de plugins",
      "Maquetación de sitios corporativos con HTML5, CSS3, Bootstrap y JavaScript, con diseño responsive multidispositivo",
      "Gestión de campañas en Mailchimp y Doppler, e integración de seguimiento con Google Analytics"
    ]
  },
  {
    "name": "Inventa S.A. \u00B7 Agencia Publis \u00B7 Xpectrum Technologies \u00B7 Digital Beat SpA",
    "position": "Diseñador y Desarrollador Web",
    "url": null,
    "startDate": "2015-01-01",
    "endDate": "2018-04-30",
    "summary": "Maquetación de sitios web, diseño y desarrollo de intranets corporativas y ejecución de campañas de email marketing.",
    "highlights": [
      "Maquetación de sitios web, diseño y desarrollo de intranets corporativas y ejecución de campañas de email marketing"
    ]
  }
];

const newWorkEn = [
  ...newWork
]; 
newWorkEn[0].position = "Independent Web Developer";
newWorkEn[2].position = "Independent Web Developer";
newWorkEn[5].position = "Web Designer & Developer";

cv.work = newWork;
cvEn.work = newWorkEn;

// 3. Update Projects
cv.projects = [
  {
    "name": "Microservicios Cloud Native",
    "isActive": true,
    "employer": "Proyecto Personal",
    "github": "https://github.com/xHellex",
    "description": "API REST en Java 21 con JWT y arquitectura Zero Trust",
    "highlights": [
      "Desplegada en AWS (EC2, S3, EFS, API Gateway)",
      "Mensajería con RabbitMQ y CI/CD en GitHub Actions"
    ],
    "url": null,
    "image": "/projects/sencillito-web.webp",
    "tags": ["Java", "Spring Boot"]
  },
  {
    "name": "Plataforma web con Quality Pipeline",
    "isActive": true,
    "employer": "Proyecto Personal",
    "github": "https://github.com/xHellex",
    "description": "Spring Boot + MySQL con CI/CD en Jenkins",
    "highlights": [
      "Análisis estático en SonarQube, escaneo con OWASP ZAP y Dependency-Check",
      "Cobertura sobre 60% con JaCoCo"
    ],
    "url": null,
    "image": "/projects/nescafe.webp",
    "tags": ["Java", "Spring Boot"]
  },
  {
    "name": "Sencillito.com",
    "isActive": true,
    "employer": "IGT",
    "github": null,
    "description": "Plataforma de pago de cuentas y recargas",
    "highlights": [
      "Implementación proceso de pago de cuentas",
      "Integración de servicios de pago de terceros vía API"
    ],
    "url": "https://www.sencillito.com",
    "image": "/projects/sencillito-web.webp",
    "tags": ["JavaScript", "Bootstrap", "Liferay"]
  },
  {
    "name": "Nescafé",
    "isActive": true,
    "employer": "Publicis Groupe",
    "github": null,
    "description": "Sitio web de la marca Nescafé",
    "highlights": [
      "Frontend landing pages",
      "Firebase backend integration"
    ],
    "url": "https://www.nescafe.com/cl/",
    "image": "/projects/nescafe.webp",
    "tags": ["JavaScript", "Bootstrap"]
  },
  {
    "name": "Copahue",
    "isActive": true,
    "employer": "Grupo B&L",
    "github": null,
    "description": "Inmobiliaria y constructora",
    "highlights": [
      "Rescate de sitio de intervención de terceros",
      "Desarrollo y mantenimiento"
    ],
    "url": "https://copahue.cl/",
    "image": "/projects/copahue.webp",
    "tags": ["JavaScript", "WordPress", "Bootstrap"]
  }
];

cvEn.projects = JSON.parse(JSON.stringify(cv.projects));

fs.writeFileSync(cvPath, JSON.stringify(cv, null, 2));
fs.writeFileSync(cvEnPath, JSON.stringify(cvEn, null, 2));

console.log('CVs updated successfully');
