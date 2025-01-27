import { useState } from "react";

const Display = ({action})=>{
    const [tasks, setTasks] = useState([]);

    if (action !== ''){
        setTasks(([...action]));
    }


    return(
        <div>
            {tasks? <p> {tasks}</p> : <p>false</p>}
        </div>
    )


}

export default Display;