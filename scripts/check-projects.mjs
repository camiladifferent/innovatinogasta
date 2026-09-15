import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: Projects } = await server.ssrLoadModule('/src/Projects.jsx');
  const html = renderToStaticMarkup(React.createElement(Projects));
  assert.equal((html.match(/class="strategic-card"/g) || []).length, 7);
  for (const title of ['Mi Municipio', 'TinoAprende', 'Tinogasta + Segura']) {
    assert.ok(html.includes(title), `Missing project: ${title}`);
  }
  console.log('PASS: Projects renders all seven initiatives without runtime errors.');
} finally {
  await server.close();
}
