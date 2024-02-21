import React, {useState} from "react";
import TodoItem from './TodoItem'

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Project meeting',
            completed: true
        },
        {
            id: 2,
            text: 'Do homework',
            completed: false
        }
    ]);

    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function updateTask(id, newText) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, text: newText}
            } else {
                return task;
            }
        }));
        
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed}
            } else {
                return task;
            }
        }));     
    }
    return (
        <div className="todo-list">
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                />
            <button class="button is-info" onClick={() => addTask(text)}>Add</button>
            </div>

            {tasks.map(task => (
                <TodoItem
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
                />
            ))}

        </div>
    );
}

export default TodoList;