import React from "react";
import './css/displayList.css'


function DisplayList(props){

    return(
        <div>
            {props.list.map((myValues)=>(
                <div key={myValues.id}>
                    <div className="priority-type">
                        <div>
                             <h3>
                            {myValues.task}
                            </h3>
                        </div>

                        <div>
                            <h3>
                            {myValues.time}
                            </h3>
                        </div>

                        <div>
                            <h3>
                            {myValues.date}
                            </h3>
                        </div>

                        <div className={myValues.priority}></div>

                    </div>


                </div>
            ))}
        </div>
        

    );

}

export default DisplayList;
