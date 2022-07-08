import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditState extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/country",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            CountryId:event.target.CountryId.value,
            CountryName:event.target.CountryName.value
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
                                <h3 className="modal-title">Edit this State</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="CountryId">
                                                    <Form.Label>CountryId</Form.Label>
                                                    <Form.Control type="text" name="CountryId" 
                                                    required disabled 
                                                    defaultValue={this.props.coid}
                                                    placeholder="CountryId"/>
                                                </Form.Group>

                                                <Form.Group controlId="CountryName">
                                                    <Form.Label>CountryName</Form.Label>
                                                    <Form.Control type="text" name="CountryName" 
                                                    required 
                                                    defaultValue={this.props.coname}
                                                    placeholder="CountryName"/>
                                    </Form.Group>
                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Country
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