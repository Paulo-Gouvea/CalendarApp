import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: calc(100vh + 10rem);
    z-index: 10;
    background:rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    height: 26rem;
    width: 40rem;
    background-color: white;
    z-index: 15;
    border-radius: 16px;
    padding: 1.5rem;

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        div {
            height: 1.7rem;
            width: 1.7rem;
            display: flex;
            align-items: center;
            justify-content: center;

            transition: background-color 0.25s;

            :hover {
                cursor: pointer;
                background-color: #F3EFEF;
            }
        }
    }

    section {
        margin-top: 1.5rem;

        div {
            margin-bottom: 1.5rem;
        }
    }

    footer {
        margin-top: 3rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`;