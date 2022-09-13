import {Container, ButtonContainer} from './style'
import {FiClipboard, FiCalendar, FiTrash2} from "react-icons/fi"
import Button from "../Button"

function Card({title, date, completed, onClick, onClickDelete}){

    const isCompleted = () => {
        return completed ? "Concluído" : "Concluir"
    }

    return (
        <Container>
            <span>
                <FiClipboard/> {title}
            </span>

            <hr/>

            <time>
                <FiCalendar/> {date}
            </time>
            <ButtonContainer>
                <Button completed={completed} onClick={onClick}>{isCompleted()}</Button>
                <Button onClick={onClickDelete} backgroundWhite={true}><FiTrash2/></Button>
            </ButtonContainer>            
        </Container>
    )
} 

export default Card;