import {React, useState } from "react";
import Todoform from "./components/todoform/Todoform";
import Todo from "./components/todo/Todo";

function App() {
  let [todos ,setTodos] = useState([]); // why let /be can you change for (if) fx;
  const addTodo =(todo)=>{
    setTodos([todo, ...todos]);
};
const handleDelete = (id)=>{
setTodos(todos.filter((todo)=> todo.id !== id))
};
//three btn
const [todoToShow,setTodoToShow] = useState("all");
 const updateTodoToShow =(s)=>{
  setTodoToShow(s)
 };

//  finshtask
 const toggleComplete = (id)=> {

    setTodos(
      //loop
      todos.map((todo) => {
        //if
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };

        } else {
          return todo; // same

        }
      })
    );




  };






//  if condation for three btn
if (todoToShow === "active") {
  todos =todos.filter((todo)=>!todo.complete);   //filter becose target a tasks  uncomblte===true becose value comblte =false 
}else if(todoToShow === "complete"){
  todos =todos.filter((todo)=> todo.complete) //just comblete
     

}

  return (
    <div className="container">
       <Todoform onSubmit={addTodo}/>

         {todos.map((todo) => (
           <Todo
            todo={todo} 
            key={todo.id}
            onDelete={() =>  handleDelete(todo.id)}
            toggleComplete ={()=> toggleComplete(todo.id)}
            
            />
))}
    <div>
        <button className='update-btn btn'onClick={()=> updateTodoToShow("all")}>all</button>
        <button className='update-btn btn'onClick={()=> updateTodoToShow("active")}>active</button>
        <button className='update-btn btn'onClick={()=> updateTodoToShow("complete")}>complete</button>
     </div>
     <button>Remove all comblete todos</button>
     <button>toggle All Complete</button>




    </div>
  )
}

export default App;
