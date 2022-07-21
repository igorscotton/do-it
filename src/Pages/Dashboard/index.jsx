import {useParams} from "react-router-dom";

function DashBoard(){
    const {id} = useParams();

    return (
        <div>DashBoard</div>
    )
}

export default DashBoard;