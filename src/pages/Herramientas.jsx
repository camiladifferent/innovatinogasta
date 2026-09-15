import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe2, Compass, TrendingUp } from 'lucide-react';
import { tools, toolCategories } from '../content';
import PageHero from '../PageHero';
import useReveal from '../useReveal';
import '../tools.css';

const icons = {
  'portal-oficial': Globe2,
  'visit-tinogasta': Compass,
  'invertir-tinogasta': TrendingUp,
};

export default function Herramientas() {
  useReveal();
  const [category, setCategory] = useState('Todos');
  const visible = tools.filter(tool => category === 'Todos' || tool.category === category);

  return (
    <section className="tools-page">
      <PageHero eyebrow="HERRAMIENTAS DIGITALES" crumb="Herramientas" title={<>Lo que ya está<br/><em>en funcionamiento.</em></>} description="Portales y servicios digitales del municipio, activos hoy para vecinos, vecinas y visitantes." />
      <div className="filters" aria-label="Filtrar herramientas por área">
        {toolCategories.map(item => (
          <button key={item} type="button" aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <p className="project-results" role="status">{visible.length} {visible.length === 1 ? 'herramienta activa' : 'herramientas activas'}</p>
      <div className="tools-grid reveal">
        {visible.map(tool => {
          const Icon = icons[tool.id] || Globe2;
          return (
            <a className="tool-card" key={tool.id} href={tool.url} target="_blank" rel="noopener noreferrer">
              <div className="tool-card-top"><span className="project-icon"><Icon size={22} strokeWidth={1.4}/></span><span className="tool-status"><span className="live-dot"/> En funcionamiento</span></div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <div className="article-source">{tool.domain}<ArrowUpRight size={17}/></div>
            </a>
          );
        })}
      </div>
      <p className="source-note">Sumamos nuevas herramientas a medida que se lanzan. ¿Querés ver lo que viene? <Link to="/proyectos">Conocé el Plan de Modernización 2026 <ArrowUpRight size={13}/></Link></p>
    </section>
  );
}
