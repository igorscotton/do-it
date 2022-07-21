import {Container, Wrapper, Background, AnimationContainer, ButtonWrapper} from "./style"
import Button from "../../Components/Button"
import Input from "../../Components/Input";
import { Link } from "react-router-dom"
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

function SignUp(){
    return (
        <Container>
            <Background/>
            <Wrapper>
                <AnimationContainer>
                    <form action="">
                        <h1>Cadastro</h1>
                        <Input icon={FiUser} label="Nome" placeholder="Seu nome completo"/>
                        <Input icon={FiMail}  label="Email" placeholder="Seu melhor email"/>
                        <Input icon={FiLock}  label="Senha" placeholder="Uma senha bem segura" type="password"/>
                        <Input icon={FiLock}  label="Confirmação da senha" placeholder="Confirmação da senha" type="password"/>
                        <ButtonWrapper>
                            <Button>Enviar</Button>
                            <p>Já tem uma conta? Faça <Link to="/login">Login</Link> </p>
                        </ButtonWrapper>    
                    </form>
                </AnimationContainer>                
            </Wrapper>
        </Container>
    )
}

export default SignUp;