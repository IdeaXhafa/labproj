import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditAsistent extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/asistent",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            AsistentId:event.target.AsistentId.value,
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
                        <div className="modal-content" >
                            <div className="modal-header">
                                <h3 className="modal-title">Edit this Asistent</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="AsistentId">
                                                    <Form.Label>AsistentId</Form.Label>
                                                    <Form.Control type="text" name="AsistentId" 
                                                    required disabled 
                                                    defaultValue={this.props.asiid}
                                                    placeholder="AsistentId"/>
                                                </Form.Group>

                                                <Form.Group controlId="AsistentName">
                                                    <Form.Label>AsistentName</Form.Label>
                                                    <Form.Control type="text" name="AsistentName" 
                                                    required 
                                                    defaultValue={this.props.asiname}
                                                    placeholder="AsistentName"/>
                                                </Form.Group>

                                                <Form.Group controlId="Age">
                                                    <Form.Label>Age</Form.Label>
                                                    <Form.Control type="text" name="Age" 
                                                    required 
                                                    defaultValue={this.props.asiage}
                                                    placeholder="Age"/>
                                                </Form.Group>

                                                <Form.Group controlId="Specializim">
                                                    <Form.Label>Specializim</Form.Label>
                                                    <Form.Control type="text" name="Specializim" 
                                                    required 
                                                    defaultValue={this.props.asispec}
                                                    placeholder="Specializim"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Asistent
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