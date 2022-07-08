// import React, {useState} from 'react';
// import './signup.css'

// export function Signup({Signup, error}) {
//     const [details, setDetails] = useState({username: "", email:"", password:""});

//     const submitHandler = e => {
//         e.preventDefault();

//         Signup(details);
//     }

//     return (
//         <form onSubmit={submitHandler}>
//             <div className="form-inner">
//                 <h1>Sign up</h1>
//                 {(error != "") ? ( <div className="error">{error}</div>) : ""}
//                 <div className="form-group">
//                     <label htmlFor="name">Username:</label>
//                     <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
//                 </div>
//                 <input type="submit" value="SIGNUP"/>
//             </div>
//         </form>
//     )
// }
// export default Signup;

// import React, {useState} from "react";

// export function Signup(){

//     const [username,setUserName]=useState("")
//     const [password,setPassword]=useState("")
//     const [user,getCurrentUser]=useState("")

//     async function signUp(){
//         let item={username,password}
//         console.warn(item)

//         let result = await fetch("http://localhost:5000/api/register", {
//             method:"POST",
//             body:JSON.stringify(item),
//             headers:{
//                 "Content-Type":'application/json',
//                 "Accept":'application/json'
//             }
//         })
//         result = await result.json()
//         console.warn("result",result)
//     }

//     return (
//         <div className="col-sm-6 offset-sm-3">
//             <h1>Sign Up</h1>
//             <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} className="form-control" />
//             <br/>
//             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" />

//             <button onClick={signUp} className="btn btn-primary">SIGN UP</button>
//         </div>
//     )
// }

// export default Signup;

import React, {Component} from "react";

export class Signup extends Component {
    constructor(){
        super();
        this.state={
            username:null,
            password:null,
            signup:false,
            store:null
        }
    }

    componentDidMount(){
        this.storeCollector()
    }

    storeCollector(){
        let store=JSON.parse(localStorage.getItem('signup'));
        if(store && store.signup){
            this.setState({signup:true,store:store})
        }
    }

    signup(){
        fetch('http://localhost:5000/api/register/register' , {
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
                localStorage.setItem('signupToken',JSON.stringify({
                    signup:true,
                    store:result.token
                }))
                this.storeCollector()
            })
        })
    }

    // post(){
    //     let token = "Bearer" + localStorage.getItem('loginToken');
    //     fetch('http://localhost:5000/api/student' , {
    //         method:"POST",
    //         headers:{
    //             'Authorization':token
    //         },
    //         body:JSON.stringify(this.state)
    //     }).then((response)=>{
    //         response.json().then((result)=>{
    //             this.setState({
    //                 response:result.message
    //             })
    //             console.warn("result",result);
                
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                
                    <div>
                    <input type="text" onChange={(event)=>{this.setState({username:event.target.value})}}/> <br/>
                    <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/> <br/>

                    <button onClick={()=>{this.signup()}}>Sign Up</button>
                </div>
            </div>
        )
    }
}