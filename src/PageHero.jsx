import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PageHero({ eyebrow, title, description, crumb }) {
  return (
    <section className="page-hero reveal">
      <div className="page-crumb"><Link to="/">Inicio</Link><ArrowRight size={12}/><span>{crumb}</span></div>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}
