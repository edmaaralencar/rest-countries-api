import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
    Container,
    DetailContainer,
    DetailContent,
    LinkButton,
} from './styles';

import { FaArrowLeft } from 'react-icons/fa';

const DetailPage = () => {
    const params = useParams();
    const [country, setCountry] = useState();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${params.id}`)
            .then((response) => response.json())
            .then((data) => setCountry(data[0]));
    }, [params.id]);

    return (
        <Container>
            {country && (
                <Container>
                    <LinkButton to="/">
                        <FaArrowLeft size={20} />
                        Back
                    </LinkButton>
                    <DetailContainer>
                        <div className="detail-img">
                            <img
                                src={country.flags.png}
                                alt={country.name.common}
                            />
                        </div>
                        <DetailContent>
                            <h2>{country.name.common}</h2>
                            <div className="detail-info">
                                <div>
                                    <strong>
                                        Native Name:
                                        <span>{Object.keys(country.name.nativeName)[0]}</span>
                                    </strong>
                                    <strong>
                                        Population: <span>{country.population}</span>
                                    </strong>
                                    <strong>
                                        Region: <span>{country.region}</span>
                                    </strong>
                                    <strong>
                                        Capital: <span>{country.capital[0]}</span>
                                    </strong>
                                </div>
                                <div>
                                    <strong>
                                        Top Level Domain:
                                        <span>{country.tld[0]}</span>
                                    </strong>
                                    <strong>
                                        Currencies:
                                        {Object.values(country.currencies).map(currency => <span key={currency.name}>{currency.name};</span> )}
                                    </strong>
                                    <strong>
                                        Languages:
                                        {Object.values(country.languages).map(lang => <span key={lang} >{lang};</span> )}
                                    </strong>
                                </div>
                            </div>

                            {country.borders && (
                                <div className="detail-border">
                                    <strong>Border Countries:
                                        {country.borders.map(border => <span key={border}>{border}</span>)}
                                    </strong>
                                </div>
                            )}

                        </DetailContent>
                    </DetailContainer>
                </Container>
            )}
        </Container>
    );
};

export default DetailPage;
