import React, { useState } from 'react'

const InputArea = (props) => {

    const [inputText,setInputText]=useState("");

    const handleChange = (e) => {

        const newValue=e.target.value;

        setInputText(newValue);

    }

  return (
    <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button 
        onClick={()=>{
            props.addItem(inputText);
            setInputText("");
        }}
        >
        <span>Add</span>
    </button>
    </div>
  )
}

export default InputArea