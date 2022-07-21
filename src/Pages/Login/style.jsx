import styled, { keyframes } from "styled-components"
import login from "../../assets/login.svg"

export const Container = styled.div`
    height: 100vh;
    display: flex;
`

export const BackGround = styled.div`
    @media screen and (min-width: 1100px) {
        height: 100vh;
        width: 100%;
        background: url(${login}) no-repeat center var(--black);
    }  
`

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }

    to{
        opacity: 1;
        transform: translateX(0px);
    }
`

export const AnimationContainer = styled.div`
     height: 100vh;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;

     animation: ${appearFromLeft} 1.5s;

     form{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    h1{
        text-align: center;
        font-size: 2.8rem;
        font-weight: 400;
    }

    @media screen and (max-width: 405px){
        form{
            width: 350px;
        }
    }

    @media screen and (max-width: 355px){
        form{
            width:275px;
        }
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 5.5rem; 
    text-align: center;
    margin-top: 10px;
    gap: 15px;

    a{
        color: var(--orange);
    }
`