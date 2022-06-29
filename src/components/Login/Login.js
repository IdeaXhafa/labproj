// import React, { Component } from 'react'
// import { Form } from 'react-bootstrap';

// export class Login extends Component {

//     constructor(props){
//         super(props);

//         this.state = {
//             log: [],
//             LogId : [],
//             Username : [],
//             Email: [],
//             Password : []
//             //isEditModalOpen : false
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     refreshList(){
//         fetch(
//             "http://localhost:5000/api/login")
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({log:data});
//         });
//     }

//     deleteLogin(logid){
//       if(window.confirm('Are you sure you want to delete this Login information?')){
//           fetch("http://localhost:5000/api/login/"+logid,{
//               method:'DELETE',
//               header:{
//                   'Accept':'application/json',
//                   'Content-Type':'application/json'
//               }
//           })
//       }
//   }
    
//     handleSubmit(event){
//         event.preventDefault();
//         fetch("http://localhost:5000/api/login",{
//         method:"POST",
//         headers:{
//             'Accept':'application/json',
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             Username:event.target.Username.value,
//             Email:event.target.Email.value,
//             Password:event.target.Password.value
//         })
//     })
//     .then(res=>res.json())
//     .then((result)=>{
//         alert(result);
//     },
//     (error)=>{
//         alert('Insertion failed!');
//     })
//     }


//   render(){
//     const{log,logid,logname,logemail,logpass}=this.state;
//   return (
//     <div>
//       <Form onSubmit={this.handleSubmit}>
//         <div>
//           {log.map(logs=>
            
//               <div key={logs.LogId}>
//               <label>Username={logs.Username}
//               <input
//                 type="text" name="Username" 
//                 />
//               </label>
//               <label>{logs.Email}
//               <input
//                 type="text" name="Email" 
//                 />
//               </label>
//               <label>{logs.Password}
//               <input
//                 type="text" name="Password" 
//                 />
//               </label>
//               </div>
//           )}
//         </div>

//               <button type="submit">Log in</button>
//       </Form>
//     </div>
//   )}  
// }

import React,{Component} from "react";
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import { Form } from "react-bootstrap";

export class Login extends Component{

        constructor(props){
            super(props);
            this.state={logs:[], Username:[]}
        }

        refreshList(){
            fetch(
                "http://localhost:5000/api/login")
            .then(response=>response.json())
            .then(data=>{
                this.setState({logs:data});
            });
        }

        componentDidMount(){
            this.refreshList();
        }
        componentDidUpdate(){
            this.refreshList();
        }

        deleteL(logid){
            if(window.confirm('Are you sure you want to delete this Department?')){
                fetch("http://localhost:5000/api/login/"+logid,{
                    method:'DELETE',
                    header:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }
                })
            }
        }

    render(){
        const {logs,logid,logname,logemail,logpass}=this.state;

        return(
            <div>
                    <Form style={{backgroundColor:'#d3d3d3'}}>
                    <label style={{backgroundColor:'blue',alignItems:'center'}}>
                        {logs.map(log=>
                            <div key={log.LoginId} style={{top : '200px', left: '300px'}}>
                                {/* <input>{log.LoginId}</input><br/> */}
                                <input type='text' value={log.Username} style={{alignItems:'center'}}></input><br/>
                                <input type='text' value={log.Email}></input><br/>
                                <input type='text' value={log.Password}></input><br/>
                                
                                <button type="submit">Log in</button>

                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deleteL(log.LoginId)}>
                                                Delete
                                        </Button>
                            </div>
                            )}
                    </label>
                    </Form>
            </div>
        )
    }
}




