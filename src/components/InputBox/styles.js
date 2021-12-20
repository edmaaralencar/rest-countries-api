import styled from 'styled-components';

import arrowDownIcon from '../../assets/images/chevron-down.svg';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        background-color: ${(props) => props.theme.elementColor};
        padding: 1.8rem 2.5rem;
        display: flex;
        border-radius: 8px;
        box-shadow: 0 0 12px -5px rgb(0 0 0 / 20%);

        input {
            margin-left: 1rem;
            width: 100%;
            background: transparent;
            border: 0;
            padding-left: 1rem;
            outline: transparent;
            width: 35rem;
            font-size: 1.6rem;
            font-weight: 600;
            color: #9c9c9c;

            &::placeholder {
                color: #9c9c9c;
            }
        }
    }

    select {
        background-color: ${(props) => props.theme.elementColor};
        padding: 1.8rem 4.5rem 1.8rem 2.5rem;
        display: flex;
        border-radius: 8px;
        box-shadow: 0 0 12px -5px rgb(0 0 0 / 20%);
        border: 0;
        outline: transparent;
        font-size: 1.6rem;
        font-weight: 600;
        color: #9c9c9c;

        -webkit-appearance: none;
        -moz-appearance: none;

        background-image: url(${arrowDownIcon});
        background-repeat: no-repeat;
        background-position-x: 90%;
        background-position-y: center;
    }
`;
