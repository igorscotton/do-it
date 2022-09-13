import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 38px;
`

export const InputContainer = styled.form`
    flex: 1;
    margin-top: 32px;
    padding: 0 38px;

    section{
        display: flex;
        > div {
            max-width: 80%;
            flex: 1;
            margin-right: 16px;
        }

        button{
            max-width: 260px;
            height: 51.2px;
            margin: 0;
            align-self: flex-end;
        }
    }
`

export const TasksContainer = styled.div`
    padding: 0 38px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px 32px;
`

export const InputFilterContainer = styled.div`
    flex: 1;
    margin-top: 32px;
    padding: 0 38px;

    button {
        margin-right: 10px;
        padding: 5px 10px;

        &:focus{
            background-color: var(--orange);
        }
    }
`