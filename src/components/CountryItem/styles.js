import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.elementColor};
    box-shadow: 0 0 12px -5px rgb(0 0 0 / 20%);
    border-radius: 1rem;

    img {
        width: 100%;
        height: 16rem;
    }

    .country-info {
        padding: 2rem;

        h2 {
            font-size: 2rem;
        }

        .country-detail-list {
            margin: 1.5rem 0;
            display: flex;
            flex-direction: column;
            gap: .5rem;

            .country-detail {
                strong {
                    font-size: 1.4rem;
                }

                span {
                    margin-left: .5rem;
                    font-size: 1.6rem;
                }
            }
        }
    }
`