import {Container} from './style'
import {FiClipboard, FiCalendar} from "react-icons/fi"
import Button from "../Button"

function Card({title, date, completed, onClick}){

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
            <Button completed={completed} onClick={onClick}>{isCompleted()}</Button>
        </Container>
    )
} 

export default Card;