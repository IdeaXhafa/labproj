import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditAdministrat extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/Administrata",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            AdministrataId:event.target.AdministrataId.value,
            Themeluesi:event.target.Themeluesi.value,
            Description:event.target.Description.value,
            Email:event.target.Email.value,
            NrTel:event.target.NrTel.value,
            Administarta:event.target.Administarta.value
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
                                <h3 className="modal-title">Edit this Administrate</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="AdministrataId">
                                                    <Form.Label>AdministrataId</Form.Label>
                                                    <Form.Control type="text" name="AdministrataId" 
                                                    required disabled 
                                                    defaultValue={this.props.adid}
                                                    placeholder="AdministrataId"/>
                                                </Form.Group>

                                                <Form.Group controlId="Themeluesi">
                                                    <Form.Label>Themeluesi</Form.Label>
                                                    <Form.Control type="text" name="Themeluesi" 
                                                    required 
                                                    defaultValue={this.props.adthemeluesi}
                                                    placeholder="Themeluesi"/>
                                                </Form.Group>

                                                <Form.Group controlId="Description">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control type="text" name="Description" 
                                                    required 
                                                    defaultValue={this.props.addescription}
                                                    placeholder="Description"/>
                                                </Form.Group>

                                                <Form.Group controlId="Email">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="text" name="Email" 
                                                    required 
                                                    defaultValue={this.props.ademail}
                                                    placeholder="Email"/>
                                                </Form.Group>

                                                <Form.Group controlId="NrTel">
                                                    <Form.Label>NrTel</Form.Label>
                                                    <Form.Control type="text" name="NrTel" 
                                                    required 
                                                    defaultValue={this.props.adtel}
                                                    placeholder="NrTel"/>
                                                </Form.Group>

                                                <Form.Group controlId="Administarta">
                                                    <Form.Label>Administarta</Form.Label>
                                                    <Form.Control type="text" name="Administarta" 
                                                    required 
                                                    defaultValue={this.props.adadmin}
                                                    placeholder="Administarta"/>
                                                </Form.Group>
                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Administrate
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