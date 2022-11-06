import styled from "styled-components";

export const Container = styled.div`
    width: 10rem;
    height: 3rem;

    border-radius: 2rem;
    padding: 0 1.5rem;

    background-color: white;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    transition: background-color 0.2s;

    div {
        height: 1.5rem;
        width: 1.5rem;
        background-color: green;
    }

    p {

    }

    :hover {
        cursor: pointer;
        background-color: #F3EFEF;
    }
`;