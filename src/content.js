export const articles = [
  { id: 'ia-educacion', category: 'Inteligencia artificial', title: 'Aprender en tiempos de inteligencia artificial', description: 'Nuevas preguntas sobre cómo aprendemos, enseñamos y convivimos con la IA.', source: 'UNESCO · El Correo', url: 'https://courier.unesco.org/es/articles/podemos-seguir-aprendiendo-en-armonia-con-la-ia', visual: 'ai', label: 'IA', featured: true },
  { id: 'seguridad', category: 'Ciudadanía digital', title: 'Tu vida digital, más segura', description: 'Recomendaciones para reconocer estafas y proteger tu información en internet.', source: 'Argentina.gob.ar · Guía', url: 'https://www.argentina.gob.ar/seguridad/ciberdelito/recomendaciones-para-evitar-estafas-en-internet', visual: 'security', label: 'Seguridad' },
  { id: 'competencias', category: 'Educación', title: 'Las habilidades para un mundo con IA', description: 'Un marco de UNESCO para aprender a utilizar la inteligencia artificial de forma responsable.', source: 'UNESCO · 28 mayo 2025', url: 'https://www.unesco.org/es/articles/marco-de-competencias-para-estudiantes-en-materia-de-ia', visual: 'education', label: 'Aprender' },
  { id: 'ia-marco-pba', category: 'Gobierno digital', title: 'Buenos Aires regula el uso de la IA en el Estado', description: 'Un decreto provincial crea un registro obligatorio y principios de uso ético para ordenar la adopción de inteligencia artificial en la administración pública.', source: 'La Nación · Economía', url: 'https://www.lanacion.com.ar/economia/IA/la-provincia-de-buenos-aires-aprobo-un-marco-para-regular-el-uso-de-ia-en-la-administracion-publica-nid14072026/', visual: 'gov', label: 'Estado' },
  { id: 'congreso-ciudades', category: 'Gobierno digital', title: 'Ciudades inteligentes: qué se debatió en el primer Congreso Federal', description: 'Más de 300 ciudades y 50 intendentes se reunieron para pensar juntos la modernización de los gobiernos locales.', source: 'Buenos Aires Ciudad · Gobierno', url: 'https://buenosaires.gob.ar/gcaba_historico/noticias/jorge-macri-abrira-el-primer-congreso-federal-de-ciudades-inteligentes', visual: 'gov', label: 'Ciudades' },
  { id: 'alfabetizacion-mayores', category: 'Educación', title: 'La alfabetización digital como derecho de los adultos mayores', description: 'La norma que reconoce este derecho ya existe: el desafío ahora es hacerla efectiva en el día a día.', source: 'Infobae · Generación Silver', url: 'https://www.infobae.com/generacion-silver/2026/06/25/la-alfabetizacion-digital-como-derecho-de-los-adultos-mayores-la-norma-existe-el-desafio-es-hacerla-efectiva/', visual: 'education', label: 'Inclusión' },
];
export const newsCategories = ['Todas', ...new Set(articles.map(a => a.category))];
export const mission = 'Consolidar a Tinogasta como un municipio inteligente, seguro y conectado, brindando herramientas digitales que fomenten el desarrollo económico, la protección ciudadana y la eficiencia administrativa.';

// Herramientas digitales municipales que ya están operativas.
export const tools = [
  {
    id: 'portal-oficial', category: 'Gobierno digital', title: 'Portal oficial de Tinogasta',
    description: 'El sitio institucional del municipio: novedades, gestión y acceso a la información pública.',
    url: 'https://tinogasta.gob.ar', domain: 'tinogasta.gob.ar',
  },
  {
    id: 'visit-tinogasta', category: 'Turismo', title: 'Visit Tinogasta',
    description: 'Portal turístico con circuitos, alojamiento, gastronomía y agenda cultural, junto a la Secretaría de Turismo.',
    url: 'https://visittinogasta.tur.ar', domain: 'visittinogasta.tur.ar',
  },
  {
    id: 'invertir-tinogasta', category: 'Desarrollo económico', title: 'Invertir Tinogasta',
    description: 'Información para inversores sobre oportunidades productivas y proyectos estratégicos del departamento.',
    url: 'https://tinogasta.gob.ar/Invertir-Tinogasta/', domain: 'tinogasta.gob.ar/Invertir-Tinogasta',
  },
];
export const toolCategories = ['Todos', ...new Set(tools.map(t => t.category))];

// Iniciativas del Plan Estratégico 2026. No implican un estado de ejecución.
export const projects = [
  {
    id: 'sitios-oficiales', category: 'Gobierno digital', title: 'Una nueva cara digital para Tinogasta',
    description: 'Renovar los sitios oficiales para mejorar la experiencia del ciudadano y del turista, garantizar su operatividad y acercar nuevas herramientas de gestión y servicio.',
    sections: [
      { title: 'Portal tinogasta.gob.ar', items: ['Revisión de la arquitectura de la información.', 'Actualización de contenidos.', 'Rediseño de interfaz y experiencia de usuario para facilitar los trámites online.'] },
      { title: 'visittinogasta.tur.ar · Junto a la Secretaría de Turismo', items: ['Mapas interactivos de circuitos turísticos.', 'Agenda cultural y festividades.', 'Directorio actualizado de alojamiento y gastronomía.', 'Chatbot de atención rápida para consultas frecuentes.'] },
    ],
  },
  {
    id: 'mi-municipio', category: 'Gobierno digital', title: 'Mi Municipio',
    description: 'Una plataforma ciudadana integrada para centralizar los servicios municipales y facilitar el acceso de vecinos y contribuyentes.',
    sections: [{ title: 'Objetivos de la plataforma', items: ['Mayor accesibilidad y reducción de la atención presencial.', 'Trazabilidad de trámites y solicitudes.', 'Comunicación directa entre municipio y ciudadano.', 'Integración de la infraestructura tecnológica existente.', 'Escalabilidad para futuras iniciativas digitales y fortalecimiento del Municipio Inteligente.'] }],
  },
  {
    id: 'ecosistema-digital', category: 'Gobierno digital', title: 'Ecosistema digital municipal',
    description: 'Gestión, actualización e integración de las herramientas digitales que acompañan el trabajo municipal.',
    sections: [
      { title: 'Integraciones con Mi Municipio', items: ['TicketFlow: sistema de entradas.', 'Red Empleo.', 'MEDi.', 'Sistema de Tickets MDS.', 'Sistema RRHH: gestión de tarjetas y planillas de asistencia.', 'Sistema de Multas de Tránsito.'] },
      { title: 'Otras plataformas', items: ['Invertir Tinogasta: actualización de contenidos estratégicos.', 'CRM de Turismo (tinogasta.tur.ar): plataforma incluida en el plan; funcionalidades a definir.'] },
    ],
  },
  {
    id: 'tinogasta-segura', category: 'Protección ciudadana', title: 'Tinogasta + Segura',
    description: 'Una plataforma para educar, prevenir y asistir ante los delitos informáticos, con información cercana y herramientas de protección ciudadana.',
    sections: [
      { title: 'Plataforma de prevención', items: ['Módulo educativo sobre los tipos de ciberfraude.', 'Alertas tempranas con etiquetas de severidad baja, media y crítica.', 'Formulario de suscripción a reportes y noticias de estafas.', 'Orientación sobre los pasos a seguir si fuiste víctima.', 'Enlaces directos a centros de denuncia.'] },
      { title: 'Capacitaciones con la División de Ciberdelitos de la Policía de Catamarca', items: ['Ciclo de charlas para la ciudadanía, emprendedores, comercios y el sector turístico.', 'Charlas virtuales grabadas y disponibles en la plataforma.'] },
    ],
  },
  {
    id: 'id-digital', category: 'Desarrollo emprendedor', title: 'ID Digital Emprendedor',
    description: 'Profesionalizar la imagen de los emprendimientos locales para impulsar sus ventas y fortalecer su presencia digital.',
    sections: [{ title: 'Identidad y herramientas', items: ['Creación de logotipo y manual de marca básico para emprendimientos seleccionados.', 'Kit digital con plantillas editables para redes sociales.', 'Capacitaciones para utilizar las plantillas.'] }],
  },
  {
    id: 'capacitacion-continua', category: 'Educación e inclusión', title: 'Capacitación continua',
    description: 'Talleres destinados a emprendedores, turismo, comercios y estudiantes para aplicar herramientas digitales en la vida cotidiana y el trabajo.',
    sections: [{ title: 'Temáticas de los talleres', items: ['Cómo vender en Instagram.', 'Uso de WhatsApp Business.', 'Fotografía de producto con celular.', 'Uso de redes sociales.', 'IA administrativa: herramientas para agilizar el trabajo diario.'] }],
  },
  {
    id: 'tinoaprende', category: 'Educación e inclusión', title: 'TinoAprende',
    description: 'Campus Digital Municipal: un entorno virtual de autoaprendizaje, gratuito e integral, para democratizar el conocimiento, reducir la brecha digital y potenciar la empleabilidad.',
    sections: [
      { title: 'Escuela de Oficios Digitales', items: ['Diseño gráfico con IA: Canva y Midjourney.', 'Gestión de redes sociales.', 'Introducción a la programación.', 'Herramientas de oficina: Excel y Word.'] },
      { title: 'Escuela de Emprendedores', items: ['Finanzas básicas para negocios.', 'Cómo fijar precios.', 'Fotografía de producto con celular.'] },
      { title: 'Alfabetización Digital · Inclusión', items: ['Destinada a adultos mayores y personas desconectadas.', 'Perder el miedo al cajero automático.', 'Trámites a un clic: ANSES y PAMI.', 'Uso seguro de WhatsApp, en articulación con Tinogasta + Segura.'] },
      { title: 'Apoyo Escolar Clic', items: ['Clases de apoyo virtuales de nivel secundario en Matemáticas, Inglés y Lengua.'] },
    ],
  },
];
