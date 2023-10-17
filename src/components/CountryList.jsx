import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, loading } = useCities();

  let countries = cities.map((x) => {
    return { country: x.country, emoji: x.emoji };
  });
  countries = [...new Set(countries)];
  if (loading) return <Spinner />;

  if (!countries.length)
    return <Message message="Add your first city by clicking on the map." />;
  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}

export default CountryList;
