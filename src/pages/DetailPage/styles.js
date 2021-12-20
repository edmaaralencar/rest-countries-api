import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    margin-top: 6rem;
    width: 90%;
`;

export const LinkButton = styled(Link)`
    text-decoration: none;
    padding: 1.2rem 3.5rem;
    background-color: ${(props) => props.theme.elementColor};
    color: ${(props) => props.theme.textColor};
    box-shadow: 0 0 12px -5px rgb(0 0 0 / 20%);
    font-size: 1.8rem;
    width: 14rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 8px;
`;

export const DetailContainer = styled.div`
    margin-top: 6rem;
    display: flex;
    gap: 8rem;

    .detail-img {
        flex: 1;

        img {
            width: 100%;
            height: 40rem;
        }
    }
`;

export const DetailContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${(props) => props.theme.textColor};

    h2 {
        font-weight: 800;
        font-size: 4rem;
    }

    .detail-info {
        display: flex;
        margin-top: 3rem;

        div {
            flex: 1;
            font-size: 1.6rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            strong {
                font-weight: 600;

                span {
                    font-weight: 300;
                    margin-left: .5rem;
                }
            }
        }
    }

    .detail-border {
        margin-top: 6rem;

        strong {
            font-weight: 600;
            font-size: 1.6rem;

            span {
                font-size: 1.2rem;
                border-radius: .5rem;
                margin-left: 1rem;
                font-weight: 300;
                background: ${props => props.theme.elementColor};
                color: ${props => props.theme.textColor};
                padding: .5rem 2rem;
            }
        }
    }
`;
