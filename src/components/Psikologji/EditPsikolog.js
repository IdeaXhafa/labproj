import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditPsikolog extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/psikologji",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            PsikoId:event.target.PsikoId.value,
            Name:event.target.Name.value,
            Nr_Tel:event.target.Nr_Tel.value,
            Price:event.target.Price.value,
            Koha:event.target.Koha.value
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
                                <h3 className="modal-title">Edit this Psychologist</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="PsikoId">
                                                    <Form.Label>PsikoId</Form.Label>
                                                    <Form.Control type="text" name="PsikoId" 
                                                    required disabled 
                                                    defaultValue={this.props.psikoid}
                                                    placeholder="PsikoId"/>
                                                </Form.Group>

                                                <Form.Group controlId="Name">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" name="Name" 
                                                    required 
                                                    defaultValue={this.props.psikoname}
                                                    placeholder="Name"/>
                                                </Form.Group>

                                                <Form.Group controlId="Nr_Tel">
                                                    <Form.Label>Nr_Tel</Form.Label>
                                                    <Form.Control type="text" name="Nr_Tel" 
                                                    required 
                                                    defaultValue={this.props.psikotel}
                                                    placeholder="Nr_Tel"/>
                                                </Form.Group>

                                                <Form.Group controlId="Price">
                                                    <Form.Label>Price</Form.Label>
                                                    <Form.Control type="text" name="Price" 
                                                    required 
                                                    defaultValue={this.props.psikoprice}
                                                    placeholder="Price"/>
                                                </Form.Group>

                                                <Form.Group controlId="Koha">
                                                    <Form.Label>Koha</Form.Label>
                                                    <Form.Control type="text" name="Koha" 
                                                    required 
                                                    defaultValue={this.props.psikokoha}
                                                    placeholder="Koha"/>
                                                </Form.Group>
                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Psychologist
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