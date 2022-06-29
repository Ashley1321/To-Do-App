import logo from './logo.svg';
import './App.css';

import {useState} from 'react';
import Home from './components/home'
import Login from './components/login';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  const [PriorityType, setPriorityType] = useState([]);

  const addPriority = ((task,time,date,priority)=>{

    setPriorityType((myValues)=>[...myValues, {
      id:myValues.length,
      task:task,
      time:time,
      date:date,
      priority:priority
    }])
    console.log(PriorityType);

  })
  

  return (
    <Router>
      <Switch>
         <Route exact path="/" component={Login}></Route>
         <Route path="/home">
         <Home list={PriorityType} add={addPriority} />
         </Route>
         <Login />

      </Switch>
      
    </Router>

  );
}

export default App;
