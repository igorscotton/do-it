import {Container} from "./style";

function Button({children, backgroundWhite, ...rest}){
    return (
        <Container backgroundWhite={backgroundWhite} type="button" {...rest}>
            {children}
        </Container>
    )
}

export default Button;