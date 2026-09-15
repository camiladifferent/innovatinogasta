# Innova Tinogasta

Sitio informativo de la Dirección de Modernización, desarrollado con React y Vite. Identidad visual proporcionada por el cliente, diseño adaptable y animaciones con soporte para movimiento reducido.

## Desarrollo

Requiere Node.js 22.12 o superior.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Contenido

Editar `src/content.js` para cargar novedades y proyectos. Las novedades iniciales son lecturas externas con atribución y enlaces a fuentes originales; no constituyen un feed automático. El portafolio muestra un estado de próxima publicación hasta que se carguen proyectos reales. No se inventan iniciativas, métricas ni contactos institucionales.

Los recursos originales de marca están en `public/brand/`. Los colores y estilos están en `src/styles.css`. Las fuentes se cargan desde Google Fonts con alternativas locales del sistema.

## Publicación

Importar el repositorio en Vercel: framework Vite, comando `npm run build`, directorio `dist`. La configuración está en `vercel.json`. También se puede publicar con `vercel --prod` después de iniciar sesión. No requiere variables de entorno, backend ni base de datos.

Para futuras publicaciones, validar los contenidos institucionales y ejecutar `npm run build` antes de desplegar.
