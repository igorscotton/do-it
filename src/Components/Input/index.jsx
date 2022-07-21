import { Container, InputContainer } from './style'


function Input({label, icon: Icon, ...rest}){
    return (
        <Container>
            <label>{label}</label>
            <InputContainer>
                {Icon && <Icon/>}
                <input type="text"  {...rest}/>
            </InputContainer>
        </Container>
    )
}

export default Input;