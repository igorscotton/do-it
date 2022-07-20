import styled from "styled-components";

export const Container = styled.button`
    background-color: ${props => (props.backgroundWhite ? "#F5F5F5" : "#0C0D0D")};
    color: ${props =>  (props.backgroundWhite ? "#0C0D0D" : "#F5F5F5")};
    height: 45px;
    border-radius: 10px;
    border: 2px solid var(--black);
    font-size: 1.3rem;
    transition: 0.5s;
    flex-grow: 1;
    flex-basis: 0;

    :hover{
        border: 2px solid var(--orange);
    }
`