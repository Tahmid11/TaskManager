import { useState } from "react";
import Display from './DisplayTasks';

const AddTask = ({handlingTaskUpdate}) =>{

    const [task, newTask] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (task!==null){
            handlingTaskUpdate(task);
        }
    }

    return (
        <>
        <div>
            <h1>Add a new task:</h1>
            <form 
                onSubmit={ 
                    handleSubmit                
                }>
                <input 
                    value={task}
                    onChange={(input)=>{newTask(input.target.value)}}
                />
                <input 
                    type="submit"                
                />
                </form>
        </div>
        
        </>
    )
};

export default AddTask;