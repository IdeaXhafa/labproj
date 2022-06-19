import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditFaculty extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/fk",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            FId:event.target.FId.value,
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
                                <h3 className="modal-title">Edit this University</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                                <Form.Group controlId="FId">
                                                    <Form.Label>FId</Form.Label>
                                                    <Form.Control type="text" name="FId" 
                                                    required disabled 
                                                    defaultValue={this.props.faid}
                                                    placeholder="FId"/>
                                                </Form.Group>

                                                <Form.Group controlId="FName">
                                                    <Form.Label>FName</Form.Label>
                                                    <Form.Control type="text" name="FName" 
                                                    required 
                                                    defaultValue={this.props.faname}
                                                    placeholder="FName"/>
                                                </Form.Group>

                                                <Form.Group controlId="Pros">
                                                    <Form.Label>Pros</Form.Label>
                                                    <Form.Control type="text" name="Pros" 
                                                    required 
                                                    defaultValue={this.props.fapros}
                                                    placeholder="Pros"/>
                                                </Form.Group>

                                                <Form.Group controlId="Cons">
                                                    <Form.Label>Cons</Form.Label>
                                                    <Form.Control type="text" name="Cons" 
                                                    required 
                                                    defaultValue={this.props.facons}
                                                    placeholder="Cons"/>
                                                </Form.Group>

                                                <Form.Group controlId="StudentCapacity">
                                                    <Form.Label>StudentCapacity</Form.Label>
                                                    <Form.Control type="text" name="StudentCapacity" 
                                                    required 
                                                    defaultValue={this.props.fastudents}
                                                    placeholder="StudentCapacity"/>
                                                </Form.Group>

                                                <Form.Group controlId="Criter">
                                                    <Form.Label>Criter</Form.Label>
                                                    <Form.Control type="text" name="Criter" 
                                                    required 
                                                    defaultValue={this.props.facriter}
                                                    placeholder="Criter"/>
                                                </Form.Group>

                                                <Form.Group controlId="Price">
                                                    <Form.Label>Price</Form.Label>
                                                    <Form.Control type="text" name="Price" 
                                                    required 
                                                    defaultValue={this.props.faprice}
                                                    placeholder="Price"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Faculty
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