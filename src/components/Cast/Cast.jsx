import CastItem from 'components/CastItem/CastItem';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'services/getMovies';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await getMoviesCredits(movieId);

        setCredits(response);
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
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <ul>
        <CastItem casts={credits} />
      </ul>
    </>
  );
};

export default Cast;
