import Loader from 'components/Loader/Loader';
import TrendsList from 'components/TrendsList/TrendsList';
import { Container } from 'components/styled';
import { useEffect, useState } from 'react';
import { getTrends } from 'services/getMovies';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getTrends();
        setTrends(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}

      <Container>
        <h2>Trending today</h2>

        <TrendsList trends={trends} />
      </Container>
    </>
  );
};

export default Home;
