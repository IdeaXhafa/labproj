import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';
import { Login } from "../auth/Login/Login";

export class AddAsistent extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen : !super.state.isModalOpen
            }
        })
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/asistent",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            AsistentName:event.target.AsistentName.value,
            Age:event.target.Age.value,
            Specializim:event.target.Specializim.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('You do not have the authorization for this action!');
    })
    }

    render(){
        return(
            <Modal isOpen={true}>
            <div className="container">
                <div className="modal-content" style={{height:'400px'}} >
                    <div className="modal-header">
                        <h3 className="modal-title">Add an Asistent</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>AsistentName:</Form.Label>
                                <Form.Control type="text" name="AsistentName" 
                                                required placeholder="AsistentName"/>

                                <Form.Label>Age:</Form.Label>
                                <Form.Control type="text" name="Age" 
                                                required placeholder="Age"/>

                                <Form.Label>Specializim:</Form.Label>
                                <Form.Control type="text" name="Specializim" 
                                                required placeholder="Specializim"/>

                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Asistent
                                </button>
                            </div> 

                            <div className="modal-footer">
                                <button onClick={this.props.onClose } className="button">Close</button>
                            </div> 
                        </Form>
                    </div>
                </div>
            </div>
            </Modal>
        )
    }
}