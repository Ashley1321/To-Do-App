import AddList from "./addList";
import DisplayList from './displayList';

function home(props){
    return(
        <div className="container">
            <AddList add={props.add}/>
            <DisplayList list={props.list}/>

        </div>
    )
}



export default home;