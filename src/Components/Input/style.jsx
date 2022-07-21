import styled from "styled-components";

export const Container = styled.div`
    text-align: left;

    label{
        line-height: 25px;
        font-weight: 400;
    }
`

export const InputContainer = styled.div`
    background: var(--white);
    border-radius: 10px;
    border: 2px solid var(--gray);
    color: var(--gray);
    padding: 0.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    transition: 0.4s;
    flex: 1;
    gap: 15px;
    
    input{
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--black);

        &::placeholder{
            color: var(--gray);
        }
    }
`