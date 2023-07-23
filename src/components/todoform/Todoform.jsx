
import {React, useState,} from 'react'
import './Todoform.css'
import shortid from 'shortid';



const Todoform = (props) => {
    const [text ,setText]= useState("");

    const handleSubmit = (e)=>{//when clikd on btn submit the task
        e.preventDefault(); 
        props.onSubmit({ //from app.js
            id:shortid.generate(), //id form task throgh npm i shortid
            text: text, //task name
            complete :false ,//bollan value deffult
        });
         setText("")
    };

   const handleChange = (e) =>{
        setText(e.target.value)
    };
    // for final btn
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" className='input-field' onChange={handleChange} value={ text} />
            <button className='btn' onClick={handleSubmit}>add Todo</button>
        </form>




    </div>
  );
};

export default Todoform