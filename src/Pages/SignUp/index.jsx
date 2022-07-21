import { Container, Wrapper, Background, AnimationContainer, ButtonWrapper } from "./style"
import Button from "../../Components/Button"
import Input from "../../Components/Input"
import { Link, useHistory} from "react-router-dom"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import {api} from "../../Services/api"
import {toast} from "react-toastify"

function SignUp(){

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup
            .string()
            .required("Campo Obrigatório!"),
        email: yup
            .string()
            .email("Email inválido")
            .required("Campo Obrigatório!"),
        password: yup
            .string()
            .required("Campo Obrigatório!")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,"Sua Senha deve conter ao menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um caractere especial!"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Senhas diferentes")
            .required("Campo Obrigatório!"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const handleSignUp = async (data) => {
        const {name, email, password} = data;
        const formatData = {
            name,
            email,
            password
        }
        
        const response = await api.post("user/register", formatData);

        const newUser = await response.data;

        if(!!newUser){
            toast.success("Seu registro foi realizado com sucesso")
            return history.push("/login")    
        }else{
            toast.error("Algo deu errado, tente novamente!")
        }
        
        
    }

    return (
        <Container>
            <Background/>
            <Wrapper>
                <AnimationContainer>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <h1>Cadastro</h1>
                        <Input 
                            register={register} 
                            nameRegister={"name"} 
                            errors={errors.name?.message} 
                            icon={FiUser} label="Nome" 
                            placeholder="Seu nome completo"
                        />
                        <Input 
                            register={register} 
                            nameRegister={"email"} 
                            errors={errors.email?.message} 
                            icon={FiMail}  label="Email" 
                            placeholder="Seu melhor email"
                        />
                        <Input 
                            register={register} 
                            nameRegister={"password"} 
                            errors={errors.password?.message} 
                            icon={FiLock}  label="Senha" 
                            placeholder="Uma senha bem segura" type="password"
                        />
                        <Input 
                            register={register} 
                            nameRegister={"confirmPassword"} 
                            errors={errors.confirmPassword?.message} 
                            icon={FiLock}  label="Confirmação da senha" 
                            placeholder="Confirmação da senha" 
                            type="password"
                        />
                        <ButtonWrapper>
                            <Button type="submit">Enviar</Button>
                            <p>
                                Já tem uma conta? 
                                Faça <Link to="/login">Login</Link> 
                            </p>
                        </ButtonWrapper>    
                    </form>
                </AnimationContainer>                
            </Wrapper>
        </Container>
    )
}

export default SignUp;