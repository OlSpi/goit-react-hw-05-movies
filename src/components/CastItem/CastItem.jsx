import PropTypes from 'prop-types';

const CastItem = ({ casts }) => {
  return (
    <>
      {casts.map(cast =>
        cast.profile_path ? (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt={cast.name}
            />
            <p>{cast.name}</p>

            <p>{cast.character}</p>
          </li>
        ) : null
      )}
    </>
  );
};

export default CastItem;

CastItem.propTypes = {
  casts: PropTypes.array,
};
