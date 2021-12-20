import { useEffect, useState } from 'react';
import { Container } from './styles';

import InputBox from '../../components/InputBox';
import CountryItem from '../../components/CountryItem';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);

    return (
        <Container>
            <InputBox countries={countries} setFilteredCountries={setFilteredCountries} />
            <div className="countries-list">
                {filteredCountries.length === 0
                    ? countries.map((country) => (
                          <CountryItem
                              key={country.name.common}
                              country={country}
                          />
                      ))
                    : filteredCountries.map((filteredCountry) => (
                          <CountryItem
                              key={filteredCountry.name.common}
                              country={filteredCountry}
                          />
                    ))}
            </div>
        </Container>
    );
};

export default Home;
