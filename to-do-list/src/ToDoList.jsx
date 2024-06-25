import React , { useState } from 'react'

function ToDoList(){

    const [tasks , setTasks] = useState([]);
    const [newTask , setNewTask] = useState("");

    function handleInpurChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        const task = newTask;
        
        if(task.trim() !== ""){
            setTasks(prevTasks => ([...prevTasks , task]))
            setNewTask("");
        }
        
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_ , i) => i !== index)

        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){ 
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return( <div className='to-do-list'>

                <h2>TO DO LIST</h2>

                <div>
                    <input className='input-area' type="text" placeholder='Enter a task...' value={newTask} onChange={handleInpurChange}></input>
                    <button className='add-btn' onClick={addTask}>Add</button>
                </div>

                <ol className='list'>{tasks.map((element , index) => 
                    <li key={index}>
                        <span className='text'>{element}</span>
                        <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-btn' onClick={() => moveTaskUp(index)}>⬆</button>
                        <button className='move-btn' onClick={() => moveTaskDown(index)}>⬇</button>
                    </li>)}
                </ol>

            </div>);

}

export default ToDoList