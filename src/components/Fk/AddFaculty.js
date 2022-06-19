import { Modal } from "reactstrap";
import React,{Component} from "react";
import './style.css';
import {Form} from 'react-bootstrap';

export class AddFaculty extends Component{
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
        fetch("http://localhost:5000/api/fk",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            FName:event.target.FName.value,
            Pros:event.target.Pros.value,
            Cons:event.target.Cons.value,
            StudentCapacity:event.target.StudentCapacity.value,
            Criter:event.target.Criter.value,
            Price:event.target.Price.value
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
                        <h3 className="modal-title">Add a Faculty</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>FName:</Form.Label>
                                <Form.Control type="text" name="FName" 
                                                required placeholder="FName"/>

                                <Form.Label>Pros:</Form.Label>
                                    <Form.Control type="text" name="Pros" 
                                                required placeholder="Pros"/>

                                <Form.Label>Cons:</Form.Label>
                                    <Form.Control type="text" name="Cons" 
                                                required placeholder="Cons"/>

                                <Form.Label> StudentCapacity:</Form.Label>
                                    <Form.Control type="text" name="StudentCapacity" 
                                                required placeholder="StudentCapacity"/>

                                <Form.Label> Criter:</Form.Label>
                                    <Form.Control type="text" name="Criter" 
                                                required placeholder="Criter"/>

                                <Form.Label>Price:</Form.Label>
                                    <Form.Control type="text" name="Price" 
                                                required placeholder="Price"/>
                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Faculty
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