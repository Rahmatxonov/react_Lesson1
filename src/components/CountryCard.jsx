import myStyles from "./Country.module.css";

const CountryCard = (props) => {
  console.log(props.countryData);

  const { name, flags, population, region } = props.countryData;

  return (
    <div className={myStyles.box}>
      <img
        className={myStyles.countryFlags}
        src={flags.png}
        alt={name.common}
      />
      <h2>{name.common}</h2>
      <h4>Region: {region}</h4>
      <h5>Population: {population}</h5>
    </div>
  );
};

export default CountryCard;
