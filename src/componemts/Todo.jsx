import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Todo(){

    const [todo,setTodo] = useState([])
    const [inputValue,setInputValue] = useState("")

    const onchangeHandler = (e) =>{
        setInputValue(e.target.value)

    }

    const addNote = () =>{
        
        if(inputValue){
        setTodo([...todo,inputValue])
        setInputValue('')
        }
    }

    const handleDelete = index =>{
        console.log(index)
        const newArr = [...todo]
        console.log(newArr)
        newArr.splice(index,1)
        console.log(newArr)
        setTodo(newArr)
    }


    return(
        <div className="mt-3">
        <h1 style={{fontFamily:"cursive"}}>Todo App</h1>
        <div className="row d-flex justify-content-center">
        <input className="form-control w-50"
        type="text"
        value={inputValue}
        onChange={onchangeHandler}
        placeholder="Enter a Task"
        /></div><br/>
        <Button className="mt-2" onClick={addNote}>Add Note</Button>
        {
            todo.map((item,index)=>
            <div>
            <li className="mt-3" key={index}>
                <span>{item}</span>
                <Button className="btn btn-danger ms-3 btn-sm" onClick={()=>handleDelete(index)}>Delete</Button>
                </li>
                </div>
                )
        }
        
        </div>
    )
}
export default Todo;