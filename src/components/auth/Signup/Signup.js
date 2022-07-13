
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

export default Signup;