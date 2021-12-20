import { Link } from 'react-router-dom';
import { Container } from './styles';

const CountryItem = ({ country }) => {
    return (
        <Container>
            <Link to={`/country/${country.name.common.toLowerCase()}`}>
                <img src={country.flags.png} alt="" />
            </Link>

            <div className="country-info">
                <h2>{country.name.common}</h2>
                <div className="country-detail-list">
                    <div className="country-detail">
                        <strong>Population:</strong>
                        <span>{country.population}</span>
                    </div>
                    <div className="country-detail">
                        <strong>Region:</strong>
                        <span>{country.region}</span>
                    </div>
                    <div className="country-detail">
                        <strong>Capital:</strong>
                        <span>{country.capital}</span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CountryItem;
