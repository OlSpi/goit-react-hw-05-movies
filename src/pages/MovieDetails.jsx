import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import NavMoviedetails from 'components/NavMovieDetails/NavMovieDetails';
import { ButtonLink, Container } from 'components/styled';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMoviesDetails } from 'services/getMovies';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getMoviesDetails(movieId);

        setMovie(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);
  return (
    <>
      <Container>
        <ButtonLink to={location.state?.from ?? '/'}>Go Back</ButtonLink>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        {movie && (
          <>
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              img={movie.poster_path}
              id={movie.id}
              userScore={movie.vote_average}
              genres={movie.genres}
            />
            <NavMoviedetails movieId={movie.id} />
          </>
        )}
      </Container>
    </>
  );
};

export default MovieDetails;
