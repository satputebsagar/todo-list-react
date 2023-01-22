import React,{useState} from 'react'
import TodoItem from './components/TodoItem'
import InputArea from './components/InputArea'
const App = () => {
  
  const [items,setItems]=useState([
    "Input Items & click Add Button",
    "Click on item to Delete"
  ]);

  function addItem(inputText){
    setItems((prevItems)=>{
      return [...prevItems,inputText];
    });
  }

  function deleteItem(id){
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index !==id;
      });
    });
  }
  
  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-do List</h1>
      </div>
      <InputArea addItem={addItem}/>
    <div>
      <ul>
        {items.map((todoItem,index)=>(
          <TodoItem id={index} text={todoItem} onChecked={deleteItem}/>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default App