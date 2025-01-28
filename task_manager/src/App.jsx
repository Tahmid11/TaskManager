import { useState } from 'react'
import './App.css'
import AddTask from './components/AddATask'
import Display from './components/DisplayTasks';



function App() {


  const [settingTasks, setNewTasks] = useState([]);
    
  const addNewTask = (task)=>{
    setNewTasks(task);
  }

  return (
    <>
      <AddTask
        handlingTaskUpdate={addNewTask}
      />
      {settingTasks&& <Display/>}
    </>
  )
}

export default App
