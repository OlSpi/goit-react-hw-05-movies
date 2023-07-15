import css from '../MovieCard/MovieCards.module.css';
import PropTypes from 'prop-types';

const MovieCard = ({ title, overview, img, userScore, genres }) => {
  const formatUserScore = Math.round(userScore) * 10;

  return (
    <div className={css.movieCard}>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w200${img}`}
        alt={title}
      />
      <div>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>
          <span>User Score:</span>
          {formatUserScore}%
        </p>
        <h3 className={css.titleSecond}>Owerview</h3>
        <p className={css.text}>{overview}</p>
        <h3 className={css.titleSecond}>Genres</h3>
        <div className={css.genres}>
          {genres.map(genre => (
            <p className={css.genre} key={genre.id}>
              {genre.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  img: PropTypes.string,
  userScore: PropTypes.number,
  genres: PropTypes.array,
};
