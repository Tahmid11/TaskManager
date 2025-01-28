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

  const deleteATask=(taskToDelete)=>{
    // Goes through the array and KEEPS every item whose ID does not match the id of the task I want to delete
    // so if oneTask.id === taskToDelete,id then it's skipped over and left out the new array
    // React re-renders using this new filtered array since theres a new Array which triggers React to update UI
    
    setNewTasks(previousTasks.filter((oneTask)=>{return oneTask.id!==taskToDelete.id}));
   
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
