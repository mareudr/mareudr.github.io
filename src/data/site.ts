import type { ImageMetadata } from 'astro';
import heroFull from '../assets/images/hero/hero-full.jpg';

export type Locale = 'en' | 'es';

export type NavItem = {
  href: string;
  label: string;
};

export type SocialItem = {
  href: string;
  label: string;
};

export type SiteCopy = {
  siteTitle: string;
  siteTagline: string;
  nav: NavItem[];
  mobileMenuLabel: string;
  footerNote: string;
  heroName: string;
  heroImage: ImageMetadata;
  heroTitle: string;
  heroBody: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutBody: string;
  aboutLink: string;
  blogEyebrow: string;
  blogTitle: string;
  blogEmpty: string;
  blogLink: string;
  contactEyebrow: string;
  contactTitle: string;
  contactBody: string;
  projectsTitle: string;
  projectsEmpty: string;
  categoryLabels: Record<string, string>;
  allLabel: string;
  filterByTagLabel: string;
  routes: {
    home: string;
    about: string;
    projects: string;
    blog: string;
    contact: string;
  };
  pageDescriptions: {
    home: string;
    about: string;
    projects: string;
    blog: string;
    contact: string;
  };
  placeholderPageLabel: string;
  placeholderPageBody: string;
  social: SocialItem[];
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    siteTitle: 'María E. Da Ré',
    siteTagline: 'Artist and restorer',
    nav: [
      { href: '/en/', label: 'Home' },
      { href: '/en/about/', label: 'About' },
      { href: '/en/projects/', label: 'Projects' },
      { href: '/en/blog/', label: 'Blog' },
      { href: '/en/contact/', label: 'Contact' },
    ],
    mobileMenuLabel: 'Menu',
    footerNote: 'Placeholder bilingual portfolio scaffold built in Astro.',
    heroName: 'María E. Da Ré',
    heroImage: heroFull,
    heroTitle: 'Restoration, conservation, and original work presented with restraint.',
    heroBody:
      'This first version introduces a calm bilingual structure for future project case studies, studio writing, and professional contact information.',
    heroPrimaryCta: 'View projects',
    heroSecondaryCta: 'Read about the practice',
    aboutEyebrow: 'About',
    aboutTitle: 'A measured presentation for careful work.',
    aboutBody:
      'The site is being shaped around process, documentation, and visual clarity. Placeholder copy stands in for the future professional biography and restoration approach.',
    aboutLink: 'Open About page',
    blogEyebrow: 'Journal',
    blogTitle: 'Latest notes from the studio',
    blogEmpty: 'Posts will appear here once the first articles are published.',
    blogLink: 'Visit blog',
    contactEyebrow: 'Contact',
    contactTitle: 'Reach out through email or professional networks.',
    contactBody:
      'The contact form is intentionally omitted in this first version. For now, the site points visitors to direct contact channels.',
    projectsTitle: 'Projects',
    projectsEmpty: 'No projects found in this category.',
    categoryLabels: {
      restauracion: 'Restoration',
      conservacion: 'Conservation',
      'original-work': 'Original work',
    },
    allLabel: 'All',
    filterByTagLabel: 'Filter by tag',
    projectDetailsLabel: 'Details',
    backToProjectsLabel: 'Back to projects',
    backToBlogLabel: 'Back to blog',
    clientLabel: 'Client',
    dateLabel: 'Date',
    categoryLabel: 'Category',
    tagsLabel: 'Tags',
    routes: {
      home: '/en/',
      about: '/en/about/',
      projects: '/en/projects/',
      blog: '/en/blog/',
      contact: '/en/contact/',
    },
    pageDescriptions: {
      home: 'Portfolio of Maru, focused on restoration, conservation, and original artistic work.',
      about: 'Learn about the professional practice, background, and approach to art restoration.',
      projects: 'A curated selection of restoration, conservation, and original art projects.',
      blog: 'Notes, reflections, and updates from the studio.',
      contact: 'Get in touch for professional inquiries or collaborations.',
    },
    placeholderPageLabel: 'In progress',
    placeholderPageBody:
      'This route already exists so navigation remains valid while the full page is being built.',
    social: [
      { href: 'mailto:hello@example.com', label: 'Email' },
      { href: 'https://instagram.com/', label: 'Instagram' },
      { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
      { href: 'https://www.behance.net/', label: 'Behance' },
    ],
  },
  es: {
    siteTitle: 'María E. Da Ré',
    siteTagline: 'Restauradora, Conservadora, Realizadora y Artista',
    nav: [
      { href: '/es/', label: 'Inicio' },
      { href: '/es/about/', label: 'Sobre mí' },
      { href: '/es/projects/', label: 'Proyectos' },
      { href: '/es/blog/', label: 'Blog' },
      { href: '/es/contact/', label: 'Contacto' },
    ],
    mobileMenuLabel: 'Menú',
    footerNote: 'Estructura bilingüe placeholder construida en Astro.',
    heroName: 'María E. Da Ré',
    heroImage: heroFull,
    heroTitle: 'Restauración, conservación y obra original presentadas con sobriedad.',
    heroBody:
      'Esta primera versión define una estructura bilingüe serena para futuros casos de estudio, textos de taller e información profesional de contacto.',
    heroPrimaryCta: 'Ver proyectos',
    heroSecondaryCta: 'Leer sobre la práctica',
    aboutEyebrow: 'Sobre mí',
    aboutTitle: 'Una presentación cuidada para un trabajo meticuloso.',
    aboutBody:
      'El sitio se está organizando alrededor del proceso, la documentación y la claridad visual. Por ahora, el texto es temporal y luego será reemplazado por la biografía profesional y el enfoque de trabajo.',
    aboutLink: 'Abrir página Sobre mí',
    blogEyebrow: 'Bitácora',
    blogTitle: 'Últimas notas del taller',
    blogEmpty: 'Las entradas aparecerán aquí cuando se publiquen los primeros artículos.',
    blogLink: 'Ir al blog',
    contactEyebrow: 'Contacto',
    contactTitle: 'Contacto directo por correo y redes profesionales.',
    contactBody:
      'El formulario se omite a propósito en esta primera versión. Por ahora, el sitio deriva a canales de contacto directos.',
    projectsTitle: 'Proyectos',
    projectsEmpty: 'No se encontraron proyectos en esta categoría.',
    categoryLabels: {
      restauracion: 'Restauración',
      conservacion: 'Conservación',
      'original-work': 'Obra original',
    },
    allLabel: 'Todos',
    filterByTagLabel: 'Filtrar por etiqueta',
    projectDetailsLabel: 'Detalles',
    backToProjectsLabel: 'Volver a proyectos',
    backToBlogLabel: 'Volver al blog',
    clientLabel: 'Cliente',
    dateLabel: 'Fecha',
    categoryLabel: 'Categoría',
    tagsLabel: 'Etiquetas',
    routes: {
      home: '/es/',
      about: '/es/about/',
      projects: '/es/projects/',
      blog: '/es/blog/',
      contact: '/es/contact/',
    },
    pageDescriptions: {
      home: 'Portafolio de Maru, enfocado en restauración, conservación y obra artística original.',
      about: 'Información sobre la práctica profesional, trayectoria y enfoque en restauración de arte.',
      projects: 'Una selección de proyectos de restauración, conservación y obra original.',
      blog: 'Notas, reflexiones y novedades desde el taller.',
      contact: 'Contacto para consultas profesionales o colaboraciones.',
    },
    placeholderPageLabel: 'En desarrollo',
    placeholderPageBody:
      'Esta ruta ya existe para que la navegación sea válida mientras se construye el contenido completo.',
    social: [
      { href: 'mailto:hello@example.com', label: 'Correo' },
      { href: 'https://instagram.com/', label: 'Instagram' },
      { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
      { href: 'https://www.behance.net/', label: 'Behance' },
    ],
  },
};

export const alternateLocale: Record<Locale, Locale> = {
  en: 'es',
  es: 'en',
};
