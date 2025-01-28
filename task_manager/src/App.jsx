import { useState } from 'react'
import './App.css'
import AddTask from './components/AddATask'
import Display from './components/DisplayTasks';
import { v4 as uuidv4 } from 'uuid';

function App() {


  const [previousTasks, setNewTasks] = useState([]);
    
  // Check the logic of this properly???
  const addNewTask = (task)=>{
    setNewTasks([{id:uuidv4(), task: task},...previousTasks]);
  }

  const deleteATask=(task)=>{
    setNewTasks(previousTasks.filter((a)=>{return a.id!==task.id}));
   
  }

  return (
    <>
      <AddTask
        handlingTaskUpdate={addNewTask}
      />
      {
        previousTasks&& 
        <Display
          singleTask={previousTasks}
          deleteATask={deleteATask}
        />
      }
    </>
  )
}

export default App
