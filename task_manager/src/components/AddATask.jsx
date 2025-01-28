import { useState } from "react";
import Display from './DisplayTasks';

const AddTask = ({handlingTaskUpdate}) =>{

    const [task, newTask] = useState('');

    // Check why there is an event being passed into onSubmit or just know it
    // Why is it that I have to do e.preventDefault? WHat is it doing?

    
    const handleSubmit = (e)=>{
        // You use prevent default to use your own logic instead and stops a page reload
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
            // Onsubmit naturally passes in the event object
            // Browser passes a an event object to the handle Submit
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