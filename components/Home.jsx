import { useContext, useEffect, useState } from 'react';
import CountriesContainer from './CountriesContainer';
import Search from './Search';
import Sort from './Sort';
import { useTheme } from '../hooks/useTheme';

const Home = () => {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('');
  const [isDark] = useTheme();
  // const windowSize = useWindowSize();
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-sort">
        <Search setQuery={setQuery} />
        <Sort setSort={setSort} />
      </div>
      {/* <h1 style={{ textAlign: 'center' }}>
        {windowSize.width}x{windowSize.height}
      </h1> */}
      <CountriesContainer query={query} sort={sort} />
    </main>
  );
};

export default Home;
