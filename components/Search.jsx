const Search = ({setQuery}) => {
  return (
    <form className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass" />
      </button>
      <input
        onChange={(e)=>{setQuery(`${e.target.value}`.toLowerCase())}}
        id="country-search"
        name="country-search"
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default Search;
