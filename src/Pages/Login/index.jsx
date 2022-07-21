import {Container, BackGround, Wrapper, AnimationContainer, ButtonWrapper} from "./style"
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import { Link } from "react-router-dom"
import { FiMail, FiLock } from 'react-icons/fi'

function Login(){
    return (
        <Container>            
            <Wrapper>
                <AnimationContainer>
                    <form action="">
                        <h1>Login</h1>
                        <Input icon={FiMail} label="Email" placeholder="Seu email"/>
                        <Input icon={FiLock} label="Senha" placeholder="Sua senha ultra secreta"/>
                        <ButtonWrapper>
                            <Button>Enviar</Button>
                            <p>Não tem conta? <Link to="/signup">Faça seu cadastro</Link></p>
                        </ButtonWrapper>
                    </form>
                </AnimationContainer>
            </Wrapper>
            <BackGround/>
        </Container>
    )
}

export default Login;