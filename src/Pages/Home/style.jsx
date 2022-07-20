import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    gap: 30px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    align-items: center;
    max-width: 400px;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
`

export const Title = styled.h1`
    font-size: 2.5rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 400;
    span{
        color: #C85311;
    }
`

export const Typograph = styled.p`
    font-size: 2.1rem;
    font-weight: 400;
`
