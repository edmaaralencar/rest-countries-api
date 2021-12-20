import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 10%);
    background-color: ${(props) => props.theme.elementColor};
`;

export const LogoLink = styled(Link)`
    font-weight: 800;
    font-size: 2.4rem;
    text-decoration: none;
    color: ${props => props.theme.textColor};
`;

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background: transparent;
        border: 0;
        font-size: 1.6rem;
        font-weight: 600;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`;
