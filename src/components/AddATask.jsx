import { useState } from "react";
import Display from "./DisplayTasks";

const AddTask = () =>{

    const [task, setTask] = useState('');
    
    const handleSubmit =()=>{
        <Display action={task}/>
        
    }

    return (
        <>
        <div>
            <h1>Add a new task:</h1>
            <form onSubmit={handleSubmit}>
                <input 
                value={task}
                onChange={(input)=>{setTask(input.target.value)}}
                />
                <input type="submit" />
                </form>
        </div>
        <Display/>
        </>
    )
};

export default AddTask;