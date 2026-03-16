import { Link } from 'react-router';

const CountryCard = ({ flag, alt, countryName, population, region, capital, data }) => {
  return (
    <Link to={`/${countryName}`} className="country" state={data}>
      <div className="country-card">
        <div className="img-container">
          <img src={flag} alt={alt} />
        </div>
        <div className="country-facts">
          <h3>{countryName}</h3>
          <p>
            <b>Population:</b> {new Intl.NumberFormat('en-IN').format(population)}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital[0] === undefined ? 'No Data' : capital.join(',')}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
