import { Container } from './styles'

import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';

const InputBox = ({ setFilteredCountries, countries }) => {
    const [countryName, setCountryName] = useState('')

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const handleSelectInput = (event) => {
        if (event.target.value === 'All') {
            setFilteredCountries(countries)
            return
        }
        
        fetch(`https://restcountries.com/v3.1/region/${event.target.value}`)
            .then(response => response.json())
            .then(data => setFilteredCountries(data))
    }

    const handleTextInput = (event) => {
        setCountryName(event.target.value)

        if (countryName === '') {
            setFilteredCountries([])
            return
        }

        const filteredCountries = countries.filter(country => {
            return country.name.common.toLowerCase().includes(countryName.toLowerCase())
        })

        return setFilteredCountries(filteredCountries)
    }

    return (
        <Container>
            <div>
                <FiSearch color="#9c9c9c" size={25} />
                <input value={countryName} onChange={handleTextInput} placeholder="Search for a country..." type="text" />
            </div>
            <select onChange={handleSelectInput}>
                {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                ))}
            </select>
        </Container>
    );
};

export default InputBox;
