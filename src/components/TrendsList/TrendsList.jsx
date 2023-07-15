import { useLocation } from 'react-router-dom';
import css from './TrendsList.module.css';
import { StyledLink } from 'components/styled';
import PropTypes from 'prop-types';

const TrendList = ({ trends }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.list}>
        {trends.map(trend =>
          trend.title ? (
            <li className={css.listItem} key={trend.id}>
              <StyledLink to={`/movies/${trend.id}`} state={{ from: location }}>
                <p>{trend.title}</p>
              </StyledLink>
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

export default TrendList;

TrendList.propTypes = {
  trends: PropTypes.array,
};
