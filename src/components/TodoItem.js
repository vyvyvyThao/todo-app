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
                <button class="button is-link is-outlined" onClick={() => editText(task.text)}>Edit</button>
                {isEditing && (
                    <div className="editBox">
                        <input 
                            type="text" 
                            value={editInputValue}
                            onChange={(e) => setEditInputValue(e.target.value)}
                        />
                        {/* <button id="saveButton" onClick={() => saveText(task.id)}>Save</button> */}
                        <button class="button is-success" onClick={() => saveText(task.id)}>
                            <span class="icon is-small">
                            <i class="fas fa-check"></i>
                            </span>
                            <span>Save</span>
                        </button>
                    </div>
                )}
                
                {/* <button id="deleteButton" onClick={() => deleteTask(task.id)}>X</button> */}
                <button id="deleteButton" class="button is-danger is-outlined" onClick={() => deleteTask(task.id)}>
                    <span>Delete</span>
                    <span class="icon is-small">
                    <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default TodoItem;