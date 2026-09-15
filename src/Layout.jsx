import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, MapPin } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/noticias', label: 'Noticias' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/herramientas', label: 'Herramientas' },
  { to: '/#nosotros', label: 'Nosotros', hashOnly: true },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrolled;
}

export default function Layout() {
  const [menu, setMenu] = useState(false);
  const scrolled = useScrolled();
  const location = useLocation();

  useEffect(() => {
    setMenu(false);
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) { requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' })); return; }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <div className="topbar"><span>Dirección de Modernización</span><span><MapPin size={12}/> Tinogasta, Catamarca, Argentina</span></div>
    <header className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="brand" aria-label="Innova Tinogasta, inicio"><img src="/brand/ICONO2.png" alt=""/><img src="/brand/LETRA.png" alt="Innova Tinogasta"/></Link>
      <nav aria-label="Navegación principal" className={menu ? 'open' : ''}>
        {navLinks.map(link => (
          link.hashOnly
            ? <Link key={link.to} to={link.to} onClick={() => setMenu(false)}>{link.label}</Link>
            : <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setMenu(false)}>{link.label}</NavLink>
        ))}
      </nav>
      <Link className="nav-cta" to="/proyectos">Explorá la innovación <ArrowUpRight size={17}/></Link>
      <button className="menu-toggle" aria-label={menu ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    </header>
    <main id="contenido"><Outlet/></main>
    <footer>
      <Link className="brand" to="/"><img src="/brand/LETRA.png" alt="Innova Tinogasta"/></Link>
      <p>Dirección de Modernización<br/>Tinogasta, Catamarca.</p>
      <span>© {new Date().getFullYear()} Innova Tinogasta</span>
      <button className="back-top" aria-label="Volver arriba" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </footer>
  </>;
}
