import {Container, BackGround, Wrapper, AnimationContainer, ButtonWrapper} from "./style"
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import { Link, useHistory } from "react-router-dom"
import { FiMail, FiLock } from "react-icons/fi"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import {api} from "../../Services/api"
import {toast} from "react-toastify"

function Login(){

    const history = useHistory();

    const schema = yup.object().shape({
        email: yup.string().required("Campo Obrigatório!"),
        password: yup.string().required("Campo Obrigatório!")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const handleLogin = async (data) => {
        const response = await api.post("user/login", data)
        
        const newUser = await response.data;

        if(!!newUser){
            toast.success("Seu login foi realizado com sucesso")
            return history.push(`/dashboard/${newUser._id}`)    
        }else{
            toast.error("Algo deu errado, tente novamente!")
        }
    }

    return (
        <Container>            
            <Wrapper>
                <AnimationContainer>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <h1>Login</h1>
                        <Input 
                            register={register} 
                            nameRegister={"email"} 
                            errors={errors.email?.message} 
                            icon={FiMail} label="Email" 
                            placeholder="Seu email"/>
                        <Input 
                            register={register} 
                            nameRegister={"password"} 
                            errors={errors.password?.message} 
                            icon={FiLock} label="Senha" 
                            placeholder="Sua senha ultra secreta"/>
                        <ButtonWrapper>
                            <Button type="submit">Enviar</Button>
                            <p>
                                Não tem conta?  
                                <Link to="/signup"> Faça seu cadastro </Link>
                            </p>
                        </ButtonWrapper>
                    </form>
                </AnimationContainer>
            </Wrapper>
            <BackGround/>
        </Container>
    )
}

export default Login;