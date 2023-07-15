import Loader from 'components/Loader/Loader';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/getMovies';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await getMoviesReviews(movieId);

        setReviews(response);
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

      {!isLoading && reviews.length === 0 ? (
        <div>We don't have any reviews for this movie</div>
      ) : (
        <ul>
          <ReviewItem reviews={reviews} />
        </ul>
      )}
    </>
  );
};
export default Reviews;
