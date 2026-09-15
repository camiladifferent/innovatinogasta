import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Landmark } from 'lucide-react';
import { articles, newsCategories } from '../content';
import PageHero from '../PageHero';
import useReveal from '../useReveal';

export default function Noticias() {
  useReveal();
  const [filter, setFilter] = useState('Todas');
  const filtered = filter === 'Todas' ? articles : articles.filter(a => a.category === filter);

  return (
    <section className="section noticias-page">
      <PageHero eyebrow="NOTICIAS DE TECNOLOGÍA" crumb="Noticias" title={<>Ideas que nos <em>mueven.</em></>} description="Tecnología en palabras simples: selección de lecturas sobre inteligencia artificial, ciudadanía digital, gobierno digital y educación." />
      <div className="filters" aria-label="Filtrar noticias">{newsCategories.map(f => <button key={f} aria-pressed={filter === f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}{f === 'Todas' && <span>{articles.length.toString().padStart(2, '0')}</span>}</button>)}</div>
      <p className="project-results" role="status">{filtered.length} {filtered.length === 1 ? 'nota' : 'notas'}{filter !== 'Todas' ? ` en ${filter}` : ''}</p>
      <div className="news-grid reveal">{filtered.map(article => <a className={'news-card '+article.visual} key={article.id} href={article.url} target="_blank" rel="noopener noreferrer"><div className="news-visual"><span className="visual-label">INNOVA / EXPLORA</span>{article.visual === 'ai' ? <div className="ai-sculpture"><span/><span/><span/><span/><span/></div> : article.visual === 'security' ? <ShieldCheck className="large-icon" strokeWidth={.8}/> : article.visual === 'gov' ? <Landmark className="large-icon" strokeWidth={.8}/> : <div className="education-art"><span>a</span><span>i</span><Sparkles/></div>}<span className="visual-bottom">{article.label}<ArrowUpRight size={20}/></span></div><div className="news-content"><span className="category">{article.category}</span><h3>{article.title}</h3><p>{article.description}</p><div className="article-source">{article.source}<ArrowUpRight size={17}/></div></div></a>)}</div>
      <p className="source-note">Selección de lecturas de fuentes externas. Cada nota abre su publicación original.</p>
    </section>
  );
}
