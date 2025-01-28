import { useState } from "react";

const Display = ({singleTask, deleteATask})=>{

    return(
        <div>
            <ul>
                {
                    singleTask.map((task)=>{
                        return(
                            <li 
                                key={task.id}
                            >
                                {task.task}
                                <button 
                                    variant="outlined"
                                    // Gives the function the right object to delete the task
                                    onClick={()=>{deleteATask(task)}}
                                > 
                                    Delete Task
                                
                                </button>
                            
                            </li> 

                        )
                    })
                }
                
            </ul>
                    
        </div>
    )
}

export default Display;