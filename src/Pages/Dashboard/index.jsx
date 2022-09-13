import {Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Container, InputContainer, TasksContainer, InputFilterContainer} from './style';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Card from '../../Components/Card';
import {FiEdit2} from "react-icons/fi";
import {api} from "../../Services/api";
import {useEffect, useState} from "react";
import { toast } from "react-toastify";

function DashBoard({authenticated}){
    const [tasks, setTasks] = useState([])
    const [token] = useState(
        JSON.parse(localStorage.getItem("@Doit:token")) || ""
    )
    const {register, handleSubmit} = useForm()
    
    const loadTasks = (isCompleted = false) => {
        api.get("task",{
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                completed: isCompleted,
            },
        })
        .then((response) => {
            
            const apiTasks = response.data.data.map((task) => ({
                ...task,
                createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }),
            }));
            
            setTasks(apiTasks);
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        loadTasks();
    }, [])

    const handleTask = ({task}) => {
        if(!task){
            return toast.error("Complete o campo para enviar uma tarefa");
        }

        api.post("task", 
        {
            description: task
        }, 
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },        
        ).then(response => loadTasks())
    }

    const handleCompleted = (id) => {
        const newTasks = tasks.filter(task => task._id !== id);

        api.put(`/task/${id}`, {completed: true}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => setTasks(newTasks))
    }

    const handleDelete = (id) => {
        const newTasks = tasks.filter(task => task._id !== id);

        api.delete(`/task/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => setTasks(newTasks))
    }

    if(!authenticated){
        return <Redirect to="/login"/>
    }    

    return (
        <Container>
            <InputContainer onSubmit={handleSubmit(handleTask)}>
            <time>7 de maio de 2021</time>
            <section>
                <Input
                 icon={FiEdit2}
                 placeholder="Nova tarefa"
                 register={register} 
                 nameRegister="task"
                 />
                 <Button type="submit">Adicionar</Button>
            </section>
            </InputContainer>

            <InputFilterContainer>
                <Button onClick={() => loadTasks(null)}>Todas</Button>
                <Button onClick={() => loadTasks(false)}>Incompleta</Button>
                <Button onClick={() => loadTasks(true)}>Completas</Button>
            </InputFilterContainer>

            <TasksContainer>
                {!!tasks && tasks.map((task) => {
                    return(
                        <Card 
                        key={task._id} 
                        title={task.description} 
                        date={task.createdAt}
                        completed={task.completed} 
                        onClick={() => handleCompleted(task._id)}
                        onClickDelete={() => handleDelete(task._id)}
                        />
                    )                    
                })}
            </TasksContainer>
        </Container>
    )
}

export default DashBoard;