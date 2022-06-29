import "../components/css/addList.css"
import React,{useState} from "react";

function AddList(props){

    const [task, setTask] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [priority, setPriority] = useState('')

    const add = (()=>{
        console.log(task);
        console.log(time);
        console.log(date);
        console.log(priority);


        props.add(task,time,date,priority);
      
        
    })
    


    return(
        <div>
            <h1>To Do List</h1>
            <input type="text" placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)}/><br></br>
            <input type="time" onChange={(e)=>setTime(e.target.value)}/><br></br>
            <input type="date" onChange={(e)=>setDate(e.target.value)}/><br></br>
            <select onChange={(e)=>setPriority(e.target.value)}>
                <option >Set Your Task Priority Here</option>
                <option value="Urgent">Urgent</option>
                <option value="High">High</option>
                <option value="Average">Average</option>
                <option value="Low">Low</option>
            </select>
            <button id="btn" onClick={add}>Add Task</button>
        </div>
    )
}



export default AddList;