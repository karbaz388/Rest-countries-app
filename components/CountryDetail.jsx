import { useEffect, useState } from 'react';
import './CountryDetail.css';
import { Link, useLocation, useParams } from 'react-router';
import CountryDetailShimmer from './CountryDetailShimmer';

import { useTheme } from '../hooks/useTheme';

const CountryDetail = () => {
  const params = useParams().country;
  const { state } = useLocation();
  const [countryData, setCountryData] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [isDark] = useTheme();
  // const windowSize = useWindowSize();

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      population: new Intl.NumberFormat('en-IN').format(data.population),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital[0] ? data.capital.join(', ') : 'No Data',
      flag: data.flags.svg,
      alt: data.flags.alt,
      tld: data.tld[0] ? data.tld.join(', ') : 'No Data',
      nativeName: data.name.nativeName
        ? Object.values(data.name.nativeName)
            .map((el) => el.common)
            .join(', ')
        : 'No Data',
      currencies: data.currencies
        ? Object.values(data.currencies)
            .map((el) => el.name)
            .join(', ')
        : 'No Data',
      languages: data.languages ? Object.values(data.languages).join(', ') : 'No Data',
      borders: [],
    });
    if (data.borders) {
      // fetch(`https://restcountries.com/v3.1/alpha?codes=${data.borders.join(',')}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     data.map((border) => {
      //       setCountryData((prevState) => ({ ...prevState, borders: [...prevState.borders, border.name.common] }));
      //     });
      //   })
      //                         OR
      Promise.all(
        data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common);
        }),
      ).then((borders) => {
        setCountryData((prevState) => ({ ...prevState, borders }));
      });
    }
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${params}`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [params]);
  if (notFound) {
    return <div>Country not Found</div>;
  }
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      {/* <h1 style={{ textAlign: 'center' }}>
        {windowSize.width}x{windowSize.height}
      </h1> */}
      <div className="back">
        <div
          onClick={(e) => {
            history.back();
          }}
          className="back-btn"
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
        </div>
      </div>
      {!countryData.borders ? (
        <CountryDetailShimmer />
      ) : (
        <div className="country-box">
          <div className="flag-container">
            <img src={countryData.flag} alt={countryData.alt} />
          </div>
          <div className="country-details">
            <h3>{countryData.name}</h3>
            <div className="extra">
              <div className="extra1">
                <p>
                  <b>Native Name:</b> {countryData.nativeName || 'No Data'}
                </p>
                <p>
                  <b>Population:</b> {countryData.population}
                </p>
                <p>
                  <b>Region:</b> {countryData.region}
                </p>
                <p>
                  <b>Sub Region:</b> {countryData.subregion || 'No Data'}
                </p>
                <p>
                  <b>Capital:</b> {countryData.capital}
                </p>
              </div>
              <div className="extra2">
                <p>
                  <b>Top Level Domain:</b> {countryData.tld}
                </p>
                <p>
                  <b>Currencies:</b> {countryData.currencies || 'No Data'}
                </p>
                <p>
                  <b>Languages:</b> {countryData.languages || 'No Data'}
                </p>
              </div>
            </div>
            <p className="border-countries">
              <b>Border Countries:</b>
              {countryData.borders?.[0] !== undefined ? (
                countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))
              ) : (
                <span>No Data</span>
              )}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default CountryDetail;
