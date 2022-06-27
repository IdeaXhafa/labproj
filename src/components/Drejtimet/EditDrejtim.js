import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './drejtimet.css';

export class EditDrejtim extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/drejtimi",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            DrejtimiId:event.target.DrejtimiId.value,
            DrejtimiName:event.target.DrejtimiName.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Update failed!');
    })
    }

    render(){
        return(
                <Modal isOpen={true}>
                    <div className="container">
                        <div className="modal-content" >
                            <div className="modal-header">
                                <h3 className="modal-title">Edit this Drejtim</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="DrejtimiId">
                                                    <Form.Label>DrejtimiId</Form.Label>
                                                    <Form.Control type="text" name="DrejtimiId" 
                                                    required disabled 
                                                    defaultValue={this.props.drid}
                                                    placeholder="DrejtimiId"/>
                                                </Form.Group>

                                                <Form.Group controlId="DrejtimiName">
                                                    <Form.Label>DrejtimiName</Form.Label>
                                                    <Form.Control type="text" name="DrejtimiName" 
                                                    required 
                                                    defaultValue={this.props.drname}
                                                    placeholder="DrejtimiName"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Drejtim
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