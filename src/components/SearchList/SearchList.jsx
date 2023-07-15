import { useLocation } from 'react-router-dom';
import css from './SearchList.module.css';
import { StyledLink } from 'components/styled';
import PropTypes from 'prop-types';

const SearchList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.list}>
        {movies.map(movie =>
          movie.title ? (
            <li className={css.listItem} key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <p className={css.title}>{movie.title}</p>
              </StyledLink>
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

export default SearchList;

SearchList.propTypes = {
  movies: PropTypes.array,
};
