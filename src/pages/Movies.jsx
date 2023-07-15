import Loader from 'components/Loader/Loader';
import SearchList from 'components/SearchList/SearchList';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { Container } from 'components/styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/getMovies';

const Movies = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [arrayMovies, setArrayMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('searchQuery');

    if (!query) {
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getMovies(query);
        setArrayMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <Container>
        <SearchMovie search={setSearchParams} />
        <SearchList movies={arrayMovies} />
      </Container>
    </>
  );
};
export default Movies;
