import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditProf extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/profesor",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            ProfId:event.target.ProfId.value,
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
                                <h3 className="modal-title">Edit this Prof</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="ProfId">
                                                    <Form.Label>ProfId</Form.Label>
                                                    <Form.Control type="text" name="ProfId" 
                                                    required disabled 
                                                    defaultValue={this.props.profid}
                                                    placeholder="ProfId"/>
                                                </Form.Group>

                                                <Form.Group controlId="ProfName">
                                                    <Form.Label>ProfName</Form.Label>
                                                    <Form.Control type="text" name="ProfName" 
                                                    required 
                                                    defaultValue={this.props.profname}
                                                    placeholder="ProfName"/>
                                                </Form.Group>

                                                <Form.Group controlId="Email">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="text" name="Email" 
                                                    required 
                                                    defaultValue={this.props.profemail}
                                                    placeholder="Email"/>
                                                </Form.Group>

                                                <Form.Group controlId="DrejtimiName">
                                                    <Form.Label>DrejtimiName</Form.Label>
                                                    <Form.Control type="text" name="DrejtimiName" 
                                                    required 
                                                    defaultValue={this.props.profdrejtiminame}
                                                    placeholder="DrejtimiName"/>
                                                </Form.Group>

                                                <Form.Group controlId="Drejtimi">
                                                    <Form.Label>Drejtimi</Form.Label>
                                                    <Form.Control type="text" name="Drejtimi" 
                                                    required 
                                                    defaultValue={this.props.profdrejtimi}
                                                    placeholder="Drejtimi"/>
                                                </Form.Group>

                                                <Form.Group controlId="School">
                                                    <Form.Label>School</Form.Label>
                                                    <Form.Control type="text" name="School" 
                                                    required 
                                                    defaultValue={this.props.profschool}
                                                    placeholder="School"/>
                                                </Form.Group>

                                                <Form.Group controlId="Pervoja">
                                                    <Form.Label>Pervoja</Form.Label>
                                                    <Form.Control type="text" name="Pervoja" 
                                                    required 
                                                    defaultValue={this.props.profpervoja}
                                                    placeholder="Pervoja"/>
                                                </Form.Group>

                                                <Form.Group controlId="Quote">
                                                    <Form.Label>Quote</Form.Label>
                                                    <Form.Control type="text" name="Quote" 
                                                    required 
                                                    defaultValue={this.props.profquote}
                                                    placeholder="Quote"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Prof
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