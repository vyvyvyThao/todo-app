import React, {useState} from "react";

function TodoItem({ task, updateTask, deleteTask, toggleCompleted }) {
    // const [text, setText] = useState('')
    const [isEditing, setIsEditing] = useState(false);
    const [editInputValue, setEditInputValue] = useState('');

    function handleChange() {
        toggleCompleted(task.id);
    }

    function editText(text) {
        // var editBox = document.getElementById('editBox');
        // var editInput = document.getElementById('editInput');
    
        // editInput.value = text;
        // editBox.classList.remove('hidden');
        setEditInputValue(text);
        setIsEditing(true);
    }

    function saveText(id) {
        // var editableText = document.getElementById('editableText');
        // var editInput = document.getElementById('editInput');
        // var editBox = document.getElementById('editBox'); 

        // updateTask(id, editInput.value);
    
        // // editableText.textContent = ;
        // editBox.classList.add('hidden');

        // updateTask(task.id, text);

        updateTask(id, editInputValue);
        setIsEditing(false);

      }


    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            {task.completed ? (
                <p1>{task.text}</p1>
            ) : (
                <p2>{task.text}</p2>
            )}

            <div className="btn-group">
                <button onClick={() => editText(task.text)}>Edit</button>
                {isEditing && (
                    <div className="editBox">
                        <input 
                            type="text" 
                            value={editInputValue}
                            onChange={(e) => setEditInputValue(e.target.value)}
                        />
                        <button onClick={() => saveText(task.id)}>Save</button>
                    </div>
                )}
                
                <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
        </div>
    );
}

export default TodoItem;