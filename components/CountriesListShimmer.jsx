import './Shimmer.css';
const CountriesListShimmer = () => {
  // const array = new Array(10).fill('')
  //            or
  // const array = Array.from({length:10})
  return (
    <div className="countries-container">
      {Array.from({ length: 12 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
};

export default CountriesListShimmer;
