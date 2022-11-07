import styled from "styled-components";

export const Container = styled.div`
    height: 3rem;

    border-radius: 2rem;
    padding: 0 1.5rem;

    background-color: #00c04b;
    color: #FFFFFF;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    transition: opacity 0.2s, margin-top 0.2s;

    :hover {
        cursor: pointer;
        opacity: 0.8;
        margin-top: -5px;
    }
`;