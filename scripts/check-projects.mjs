import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: Proyectos } = await server.ssrLoadModule('/src/pages/Proyectos.jsx');
  const { default: Herramientas } = await server.ssrLoadModule('/src/pages/Herramientas.jsx');
  const { default: Noticias } = await server.ssrLoadModule('/src/pages/Noticias.jsx');

  const projectsHtml = renderToStaticMarkup(React.createElement(MemoryRouter, null, React.createElement(Proyectos)));
  assert.equal((projectsHtml.match(/class="strategic-card"/g) || []).length, 7);
  for (const title of ['Mi Municipio', 'TinoAprende', 'Tinogasta + Segura']) {
    assert.ok(projectsHtml.includes(title), `Missing project: ${title}`);
  }

  const toolsHtml = renderToStaticMarkup(React.createElement(MemoryRouter, null, React.createElement(Herramientas)));
  assert.equal((toolsHtml.match(/class="tool-card"/g) || []).length, 3);

  const newsHtml = renderToStaticMarkup(React.createElement(MemoryRouter, null, React.createElement(Noticias)));
  assert.equal((newsHtml.match(/class="news-card/g) || []).length, 6);

  console.log('PASS: Proyectos, Herramientas and Noticias render without runtime errors.');
} finally {
  await server.close();
}
