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

// import React, {useState} from 'react';
// import './login.css'

// export function Login({Login, error}) {
//     const [details, setDetails] = useState({username: "", email:"", password:""});

//     const submitHandler = e => {
//         e.preventDefault();

//         Login(details);
//     }

//     return (
//         <form onSubmit={submitHandler}>
//             <div className="form-inner">
//                 <h1>Log in</h1>
//                 {(error != "") ? ( <div className="error">{error}</div>) : ""}
//                 <div className="form-group">
//                     <label htmlFor="name">Username:</label>
//                     <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
//                 </div>
//                 <input type="submit" value="LOGIN"/>
//             </div>
//         </form>
//     )
// }
// export default Login;


import React, {Component} from "react";

export class Login extends Component {
    constructor(){
        super();
        this.state={
            username:null,
            password:null,
            login:false,
            store:null
        }
    }

    componentDidMount(){
        this.storeCollector()
    }

    storeCollector(){
        let store=JSON.parse(localStorage.getItem('login'));
        if(store && store.login){
            this.setState({login:true,store:store})
        }
    }

    login(){
        fetch('http://localhost:5000/api/login/login' , {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'accept':'application/json'
            },
            body:JSON.stringify({
                username:this.state.username,
                password:this.state.password
        })
        }).then((response)=>{
            response.json().then((result)=>{
                console.warn("result",result);
                localStorage.setItem('loginToken',JSON.stringify({
                    login:true,
                    store:result.token
                }))
                // this.setState({login:true})
                this.storeCollector()
            })
        })
    }

    post(){
        let token = "Bearer" + localStorage.getItem('loginToken');
        fetch('http://localhost:5000/api/student' , {
            method:"POST",
            headers:{
                'Authorization':token
            },
            body:JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((result)=>{
                this.setState({
                    response:result.message
                })
                console.warn("result",result);
                
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                
                    <div>
                    <input type="text" onChange={(event)=>{this.setState({username:event.target.value})}}/> <br/>
                    <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/> <br/>

                    <button onClick={()=>{this.login()}}>Log in</button>
                </div>
            </div>
        )
    }
}




