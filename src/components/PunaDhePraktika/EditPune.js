import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditPune extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/punadhepraktika",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            PunaId:event.target.PunaId.value,
            Punet:event.target.Punet.value,
            Price:event.target.Price.value,
            Kerkesa:event.target.Kerkesa.value
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
                                <h3 className="modal-title">Edit this Job</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="AsistentId">
                                                    <Form.Label>PunaId</Form.Label>
                                                    <Form.Control type="text" name="PunaId" 
                                                    required disabled 
                                                    defaultValue={this.props.ppid}
                                                    placeholder="PunaId"/>
                                                </Form.Group>

                                                <Form.Group controlId="Punet">
                                                    <Form.Label>Punet</Form.Label>
                                                    <Form.Control type="text" name="Punet" 
                                                    required 
                                                    defaultValue={this.props.pppunet}
                                                    placeholder="Punet"/>
                                                </Form.Group>

                                                <Form.Group controlId="Price">
                                                    <Form.Label>Price</Form.Label>
                                                    <Form.Control type="text" name="Price" 
                                                    required 
                                                    defaultValue={this.props.ppprice}
                                                    placeholder="Price"/>
                                                </Form.Group>

                                                <Form.Group controlId="Kerkesa">
                                                    <Form.Label>Kerkesa</Form.Label>
                                                    <Form.Control type="text" name="Kerkesa" 
                                                    required 
                                                    defaultValue={this.props.ppkerkesa}
                                                    placeholder="Kerkesa"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Job
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