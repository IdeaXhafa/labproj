import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddSpecializim extends Component{
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
        fetch("http://localhost:5000/api/specializimet",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            SpecializimiName:event.target.SpecializimiName.value,
            Drejtimi:event.target.Drejtimi.value,
            DrejtimiName:event.target.DrejtimiName.value,
            Advantages:event.target.Advantages.value,
            Disadvantages:event.target.Disadvantages.value,
            Popularity:event.target.Popularity.value,
            Jobs:event.target.Jobs.value,
            Payment:event.target.Payment.value
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
                        <h3 className="modal-title">Add a Specalization</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>SpecializimiName:</Form.Label>
                                <Form.Control type="text" name="SpecializimiName" 
                                                required placeholder="SpecializimiName"/>

                                <Form.Label>Drejtimi :</Form.Label>
                                    <Form.Control type="text" name="Drejtimi" 
                                                required placeholder="Drejtimi"/>

                                <Form.Label>DrejtimiName:</Form.Label>
                                    <Form.Control type="text" name="DrejtimiName" 
                                                required placeholder="DrejtimiName"/>

                                <Form.Label>Advantages:</Form.Label>
                                    <Form.Control type="text" name="Advantages" 
                                                required placeholder="Advantages"/>

                                <Form.Label>Disadvantages:</Form.Label>
                                    <Form.Control type="text" name="Disadvantages" 
                                                required placeholder="Disadvantages"/>

                                <Form.Label>Popularity:</Form.Label>
                                    <Form.Control type="text" name="Popularity" 
                                                required placeholder="Popularity"/>

                                <Form.Label>Jobs:</Form.Label>
                                    <Form.Control type="text" name="Jobs" 
                                                required placeholder="Jobs"/>

                                <Form.Label>Payment:</Form.Label>
                                    <Form.Control type="text" name="Payment" 
                                                required placeholder="Payment"/>
                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Specalization
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
