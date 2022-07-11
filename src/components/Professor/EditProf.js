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

        var imagedata = document.querySelector('input[type="file"]').files[0];

        console.log(imagedata)

        const formData = new FormData();
        formData.append("ProfId", event.target.ProfId.value);
        formData.append("ProfName", event.target.ProfName.value);
        formData.append("Email", event.target.Email.value);
        formData.append("DrejtimiName", event.target.DrejtimiName.value);
        formData.append("Drejtimi", event.target.Drejtimi.value);
        formData.append("School", event.target.School.value);
        formData.append("Pervoja", event.target.Pervoja.value);
        formData.append("Quote", event.target.Quote.value);
        formData.append("fileName", imagedata);

        fetch("http://localhost:5000/api/profesor/",{
            method:'PUT',
            body:formData,
            headers:{
                'Authorization':token
            },
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('update failed');
        })
    }

    render(){
        return(
                <Modal isOpen={true}>
                    <div className="container">
                        <div className="modal-content" style={{height:'800px'}}>
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
                                    <div>
                                    <input type="File"/>
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