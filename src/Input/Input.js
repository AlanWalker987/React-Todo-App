import React from 'react';
import './Input.css'

const Input = ({onSubmit, value, onChange}) => {
    return(
        <form onSubmit={onSubmit}>
            <input type="text" 
                   className="InputBar" 
                   placeholder="Enter task..." 
                   value={value} 
                   onChange={onChange}
            />
            <button className="SubmitBttn">Add Task</button>
        </form>
    )
}

export default Input