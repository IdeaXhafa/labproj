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
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/specializime",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            SId:event.target.SId.value,
            SName:event.target.SName.value,
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
                                    <Form.Group controlId="SId">
                                                    <Form.Label>SId</Form.Label>
                                                    <Form.Control type="text" name="SId" 
                                                    required disabled 
                                                    defaultValue={this.props.specid}
                                                    placeholder="SId"/>
                                                </Form.Group>

                                                <Form.Group controlId="SName">
                                                    <Form.Label>SName</Form.Label>
                                                    <Form.Control type="text" name="SName" 
                                                    required 
                                                    defaultValue={this.props.specname}
                                                    placeholder="SName"/>
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