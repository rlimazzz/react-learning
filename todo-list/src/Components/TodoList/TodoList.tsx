import { useState } from "react"
import './todostyles.css'

function TodoList() {
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState<string>('')

    function handleInputChange(event : React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value) 
    }

    function addTask() {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index : number) {
        const updatedTasks = tasks.filter((_,idx) => idx !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index : number) {
        const updatedTasks: string[] = [...tasks]
        
        if(index > 0) {
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
        }

        setTasks(updatedTasks)
    }

    function moveTaskDown(index : number) {
        const updatedTasks: string[] = [...tasks]

        if(index >= 0 && index != updatedTasks.length - 1) {
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
        }

        setTasks(updatedTasks)
    }

    return(
        <div className="to-do-list">
            <h1>Todo-list</h1>

            <div>
                <input
                    type ="text"
                    placeholder="Type your task"
                    value={newTask}
                    onChange={handleInputChange}/>
                <button 
                    className="add-button"
                    onClick={addTask}
                    >
                    ADD
                </button>
            </div>

            <ol>
                {tasks.map((element, index) => 
                    <li key={index}>
                        <span className="text">{element}</span>
                        <button 
                            className="delete-button"
                            onClick={() => deleteTask(index)} 
                        >
                            DELETE
                        </button>
                        <button 
                            className="move-up-button"
                            onClick={() => moveTaskUp(index)}
                        >
                            UP
                        </button>
                        <button 
                            className="move-down-button"
                            onClick={() => moveTaskDown(index)}
                        >
                            DOWN
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default TodoList