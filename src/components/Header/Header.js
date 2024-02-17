import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // Navegación
  const navigate = useNavigate();

  return (
    <nav className='navigation'>
      <button className="navigation__link" onClick={() => navigate(-1)}>Atrás</button>
      <NavLink  to="/">Home</NavLink>
      <NavLink to="/noticias" end>Noticias</NavLink>
      <NavLink to="/noticias/sport">Deportes</NavLink>
      <NavLink to="/noticias/economics">Economia</NavLink>
      <NavLink to="/noticias/tech">Tecnología</NavLink>
      <button className="navigation__link" onClick={() => navigate(1)}>Adelante</button>
    </nav>
  );
}

export default Header;