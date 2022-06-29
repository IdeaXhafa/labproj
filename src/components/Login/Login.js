// import React,{Component} from "react";
// import {Table} from 'react-bootstrap';
// import {Button,ButtonToolbar} from 'react-bootstrap';
// import { Form } from "react-bootstrap";

// export class Login extends Component{

//         constructor(props){
//             super(props);
//             this.state={logs:[], Username:[]}
//         }

//         refreshList(){
//             fetch(
//                 "http://localhost:5000/api/login")
//             .then(response=>response.json())
//             .then(data=>{
//                 this.setState({logs:data});
//             });
//         }

//         componentDidMount(){
//             this.refreshList();
//         }
//         componentDidUpdate(){
//             this.refreshList();
//         }

//         deleteL(logid){
//             if(window.confirm('Are you sure you want to delete this Department?')){
//                 fetch("http://localhost:5000/api/login/"+logid,{
//                     method:'DELETE',
//                     header:{
//                         'Accept':'application/json',
//                         'Content-Type':'application/json'
//                     }
//                 })
//             }
//         }

//     render(){
//         const {logs,logid,logname,logemail,logpass}=this.state;

//         return(
//             <div>
//                     <Form style={{backgroundColor:'#d3d3d3'}}>
//                     <label style={{backgroundColor:'blue',alignItems:'center'}}>
//                         {logs.map(log=>
//                             <div key={log.LoginId} style={{top : '200px', left: '300px'}}>
//                                 {/* <input>{log.LoginId}</input><br/> */}
//                                 <input type='text' value={log.Username} style={{alignItems:'center'}}></input><br/>
//                                 <input type='text' value={log.Email}></input><br/>
//                                 <input type='text' value={log.Password}></input><br/>
                                
//                                 <button type="submit">Log in</button>

//                                         <Button className="mr-2" variant="danger"
//                                         onClick={()=>this.deleteL(log.LoginId)}>
//                                                 Delete
//                                         </Button>
//                             </div>
//                             )}
//                     </label>
//                     </Form>
//             </div>
//         )
//     }
// }

import React, {useState} from 'react';
import './login.css'

export function Login({Login, error}) {
    const [details, setDetails] = useState({username: "", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h1>Log in</h1>
                {(error != "") ? ( <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Username:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}
export default Login;



