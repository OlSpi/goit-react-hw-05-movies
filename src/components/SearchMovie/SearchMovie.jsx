import css from '../SearchMovie/SearchMovie.module.css';

const { useState } = require('react');

const SearchMovie = ({ search }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    search({ searchQuery: query });
    setQuery('');
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <span>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
          value={query}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SearchMovie;
