import {useHistory} from 'react-router-dom'


function Login(){
    const btn ={
        width:'130px',
        height:'30px',
        marginTop:'30px',
        backgroundColor:'aqua',
        border:'1px dotted black',
        borderRadius:'16px'
    }

    let history= useHistory();
    const login =(()=>{
        history.push('./home');
    })

    return(
        <div className='Container'>
            <div className='wrapper'>
            <h1>Log In </h1>

            <input type="Email" placeholder='Enter Your Email'/><br></br>
            <input type="Password" placeholder='Enter Your Password'/><br></br>
            
            
            <button style={btn} onClick={login}>Log In</button>
            </div>
            

        </div>
        

    )
}




export default Login;