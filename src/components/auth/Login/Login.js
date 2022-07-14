import React, {Component} from "react";
//import './loginStyle.css';
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
                localStorage.setItem('loginToken', result)
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
            <div className="center" style={{alignItems:'center'}}>
                <h1>Log In</h1>
                
                    <div className="txt_field">
                    <input type="text" id="username_field" onChange={(event)=>{this.setState({username:event.target.value})}}/> <br/>
                    </div>

                    <div className="txt_field">
                    <input type="password" id="password_field" onChange={(event)=>{this.setState({password:event.target.value})}}/> <br/>
                    </div>

                    <div className="button">
                    <button className="loginButton" onClick={()=>{this.login()}}>Log in</button>
                    </div>
            </div>
        )
    }
}




