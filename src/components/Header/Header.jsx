import { NavStyledLink } from 'components/styled';
import css from '../Header/Header.module.css';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavStyledLink to="/">Home</NavStyledLink>
          <NavStyledLink to="/movies"> Movies</NavStyledLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
