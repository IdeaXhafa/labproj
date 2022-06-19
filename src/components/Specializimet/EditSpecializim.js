import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditSpecializim extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/specializimet",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            SpecializimiId:event.target.SpecializimiId.value,
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
                                <h3 className="modal-title">Edit this Specalization</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="SpecializimiId">
                                                    <Form.Label>SpecializimiId</Form.Label>
                                                    <Form.Control type="text" name="SpecializimiId" 
                                                    required disabled 
                                                    defaultValue={this.props.specid}
                                                    placeholder="SpecializimiId"/>
                                                </Form.Group>

                                                <Form.Group controlId="SpecializimiName">
                                                    <Form.Label>SpecializimiName</Form.Label>
                                                    <Form.Control type="text" name="SpecializimiName" 
                                                    required 
                                                    defaultValue={this.props.specname}
                                                    placeholder="SpecializimiName"/>
                                                </Form.Group>

                                                <Form.Group controlId="Drejtimi">
                                                    <Form.Label>Drejtimi</Form.Label>
                                                    <Form.Control type="text" name="Drejtimi" 
                                                    required 
                                                    defaultValue={this.props.specdrejtim}
                                                    placeholder="Drejtimi"/>
                                                </Form.Group>

                                                <Form.Group controlId="DrejtimiName">
                                                    <Form.Label>DrejtimiName</Form.Label>
                                                    <Form.Control type="text" name="DrejtimiName" 
                                                    required 
                                                    defaultValue={this.props.specdrejtimname}
                                                    placeholder="DrejtimiName"/>
                                                </Form.Group>

                                                <Form.Group controlId="Advantages">
                                                    <Form.Label>Advantages</Form.Label>
                                                    <Form.Control type="text" name="Advantages" 
                                                    required 
                                                    defaultValue={this.props.specpro}
                                                    placeholder="Advantages"/>
                                                </Form.Group>

                                                <Form.Group controlId="Disadvantages">
                                                    <Form.Label>Disadvantages</Form.Label>
                                                    <Form.Control type="text" name="Disadvantages" 
                                                    required 
                                                    defaultValue={this.props.speccon}
                                                    placeholder="Disadvantages"/>
                                                </Form.Group>

                                                <Form.Group controlId="Popularity">
                                                    <Form.Label>Popularity</Form.Label>
                                                    <Form.Control type="text" name="Popularity" 
                                                    required 
                                                    defaultValue={this.props.specpopularity}
                                                    placeholder="Popularity"/>
                                                </Form.Group>

                                                <Form.Group controlId="Jobs">
                                                    <Form.Label>Jobs</Form.Label>
                                                    <Form.Control type="text" name="Jobs" 
                                                    required 
                                                    defaultValue={this.props.specjobs}
                                                    placeholder="Jobs"/>
                                                </Form.Group>

                                                <Form.Group controlId="Payment">
                                                    <Form.Label>Payment</Form.Label>
                                                    <Form.Control type="text" name="Payment" 
                                                    required 
                                                    defaultValue={this.props.specpayment}
                                                    placeholder="Payment"/>
                                                </Form.Group>
                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit" className="update-btn">
                                                        Update Specalization
                                                    </button>
                                                </Form.Group>

                                                <div className="modal-footer">
                                                    <button onClick={this.props.onClose} className="button">Close</button>
                                                </div> 
                                </Form>
                            </div>
                        </div>
                    </div>
                </Modal>
        )
    }
}