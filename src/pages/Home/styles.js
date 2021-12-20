import styled from 'styled-components';

export const Container = styled.main`
    width: 90%;
    margin: 0 auto;
    margin-top: 6rem;

    .countries-list {
        margin: 4rem 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8rem;
    }
`;

