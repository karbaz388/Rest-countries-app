// import countriesData from '../countriesData.js';
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import CountriesListShimmer from './CountriesListShimmer';

const CountriesContainer = ({ query, sort }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []); //if a value present in the array useEffect runs when there is a change in the value

  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter((country) => {
              if (sort && query) {
                return country.region.toLowerCase().includes(sort) && country.name.common.toLowerCase().includes(query);
              } else if (sort) {
                return country.region.toLowerCase().includes(sort);
              }
              return country.name.common.toLowerCase().includes(query);
            })
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  flag={country.flags.png}
                  alt={country.flags.alt}
                  countryName={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default CountriesContainer;
