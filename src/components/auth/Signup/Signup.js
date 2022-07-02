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

import React, {useState} from "react";

export function Signup(){

    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")

    async function signUp(){
        let item={username,password}
        console.warn(item)

        let result = await fetch("http://localhost:5000/api/register", {
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result = await result.json()
        console.warn("result",result)
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Sign Up</h1>
            <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} className="form-control" />
            <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" />

            <button onClick={signUp} className="btn btn-primary">SIGN UP</button>

        </div>
    )
}

export default Signup;