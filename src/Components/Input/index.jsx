import { Container, InputContainer } from './style'


function Input({label, icon: Icon, register, nameRegister, errors,  ...rest}){
    return (
        <Container>
            <label>{label} - <span>{!!errors && errors}</span> </label>
            <InputContainer isErrored={!!errors}>
                {Icon && <Icon/>}
                <input {...register(nameRegister)} type="text"  {...rest}/>
            </InputContainer>
        </Container>
    )
}

export default Input;