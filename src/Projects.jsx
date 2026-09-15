import { useState } from 'react';
import { ArrowDown, Globe2, Layers3, ShieldCheck, Sparkles, BookOpen, Cpu } from 'lucide-react';
import { mission, projects } from './content';
import './projects.css';

const icons = {
  'sitios-oficiales': Globe2,
  'mi-municipio': Layers3,
  'ecosistema-digital': Cpu,
  'tinogasta-segura': ShieldCheck,
  'id-digital': Sparkles,
  'capacitacion-continua': BookOpen,
  tinoaprende: BookOpen,
};

export default function Projects() {
  const [category, setCategory] = useState('Todos');
  const categories = ['Todos', ...new Set(projects.map(project => project.category))];
  const visible = projects.filter(project => category === 'Todos' || project.category === category);

  return (
    <section id="proyectos" className="projects-section">
      <div className="section-heading reveal">
        <div>
          <span className="eyebrow">02 / DE LAS IDEAS A LA ACCIÓN</span>
          <h2>Un plan para<br/><em>transformar Tinogasta.</em></h2>
        </div>
        <p>Plan Estratégico de Modernización<br/>Tinogasta 2026</p>
      </div>
      <div className="plan-mission reveal">
        <span className="small-label">NUESTRA MISIÓN</span>
        <p>{mission}</p>
        <span className="plan-year" aria-hidden="true">2026</span>
      </div>
      <div className="filters project-filters" aria-label="Filtrar proyectos por área">
        {categories.map(item => (
          <button key={item} type="button" aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <p className="project-results" role="status">{visible.length} {visible.length === 1 ? 'iniciativa' : 'iniciativas'} del Plan 2026</p>
      <div className="strategic-projects">
        {visible.map(project => {
          const Icon = icons[project.id];
          return (
            <article className="strategic-card" key={project.id} id={project.id}>
              <div className="project-card-top"><span className="project-icon"><Icon size={25} strokeWidth={1.4}/></span><span className="small-label">{project.category}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <details>
                <summary><span>Objetivos y acciones<span className="sr-only"> de {project.title}</span></span><ArrowDown size={16} aria-hidden="true"/></summary>
                <div className="project-details">
                  {project.sections.map(section => (
                    <div key={section.title}><h4>{section.title}</h4><ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul></div>
                  ))}
                </div>
              </details>
            </article>
          );
        })}
      </div>
      <p className="source-note">Iniciativas incluidas en el Plan Estratégico de Modernización Tinogasta 2026. Las acciones describen el alcance previsto de cada proyecto.</p>
    </section>
  );
}
