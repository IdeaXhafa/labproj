import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddProf extends Component{
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
        event.preventDefault();
        fetch("http://localhost:5000/api/professor",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            ProfName:event.target.ProfName.value,
            Email:event.target.Email.value,
            DrejtimiName:event.target.DrejtimiName.value,
            Drejtimi:event.target.Drejtimi.value,
            School:event.target.School.value,
            Pervoja:event.target.Pervoja.value,
            Quote:event.target.Quote.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Insertion failed!');
    })
    }

    render(){
        return(
            <Modal isOpen={true}>
            <div className="container">
                <div className="modal-content" >
                    <div className="modal-header">
                        <h3 className="modal-title">Add a Prof</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>ProfName:</Form.Label>
                                <Form.Control type="text" name="ProfName" 
                                                required placeholder="ProfName"/>

                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="text" name="Email" 
                                                required placeholder="Email"/>

                                <Form.Label>DrejtimiName:</Form.Label>
                                <Form.Control type="text" name="DrejtimiName" 
                                                required placeholder="DrejtimiName"/>

                                <Form.Label>Drejtimi:</Form.Label>
                                <Form.Control type="text" name="Drejtimi" 
                                                required placeholder="Drejtimi"/>

                                <Form.Label>School:</Form.Label>
                                <Form.Control type="text" name="School" 
                                                required placeholder="School"/>

                                <Form.Label>Pervoja:</Form.Label>
                                <Form.Control type="text" name="Pervoja" 
                                                required placeholder="Pervoja"/>

                                <Form.Label>Quote:</Form.Label>
                                <Form.Control type="text" name="Quote" 
                                                required placeholder="Quote"/>

                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Prof
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