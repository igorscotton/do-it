import {Container, Wrapper, Title, Typograph} from "./style.jsx"
import Button from "../../Components/Button/index.jsx";
import {useHistory, Redirect} from "react-router-dom";

function Home({authenticated}){
    const history = useHistory();

    const handleNavigation = (path) => {
        return history.push(path)
    }

    if(authenticated){
        return <Redirect to="/dashboard"/>
    }

    return (
        <Container>
            <Wrapper>
                <Title>do<span>.</span>it</Title>
                <Typograph>Organize-se de forma fácil e efetiva</Typograph>
            </Wrapper>
            <Wrapper direction="row">
                <Button onClick={() => handleNavigation("/signup")} backgroundWhite>Cadastre-se</Button>
                <Button onClick={() => handleNavigation("/login")} >Login</Button>
            </Wrapper>
        </Container>
    )
}

export default Home;