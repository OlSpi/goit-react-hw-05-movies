import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGZmMTg3MzZjZTY2MDU0OTFjOGRiOGU5NTM4ZmNiZiIsInN1YiI6IjY0YWFhYTI0YjY4NmI5MDBhZjllMzAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZFHoZbG_T5mmqJXFYzBCzmy8I8U9mbqm_qZxq2TKF-I',
  },
};

export const getTrends = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  const { results } = response.data;

  return results;
};

export const getMovies = async query => {
  const respons = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  const { results } = respons.data;

  return results;
};

export const getMoviesDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  const { data } = response;
  return data;
};

export const getMoviesCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  const { cast } = response.data;
  return cast;
};

export const getMoviesReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  const { results } = response.data;
  return results;
};
