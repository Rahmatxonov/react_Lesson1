import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import myStyles from "./Country.module.css";

const FetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  const fetchData = async () => {
    try {
      let url = "https://restcountries.com/v3.1/all";

      if (searchCountry.trim()) {
        url = `https://restcountries.com/v3.1/name/${searchCountry}`;
      }

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setCountries(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchCountry(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [searchCountry]);
  return (
    <>
      <h1 className={myStyles.title}>Countries All</h1>
      <input
        className={myStyles.inputs}
        type="text"
        value={searchCountry}
        onChange={handleSearch}
        placeholder="Search countries..."
      />
      <div className={myStyles.card}>
        {filteredCountries.map((country, index) => (
          <CountryCard key={index} countryData={country} />
        ))}
      </div>
    </>
  );
};

export default FetchCountries;
