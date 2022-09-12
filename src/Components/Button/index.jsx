import {Container} from "./style";

function Button({children, backgroundWhite, completed, ...rest}){
    return (
        <Container disabled={completed ? "disabled" : null} backgroundWhite={backgroundWhite} backgroundGray={completed} type="button" {...rest}>
            {children}
        </Container>
    )
}

export default Button;