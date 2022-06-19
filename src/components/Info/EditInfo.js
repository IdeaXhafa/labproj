import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditInfo extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/info",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            InfoId:event.target.InfoId.value,
            Focus:event.target.Focus.value,
            Kurs:event.target.Kurs.value,
            Price:event.target.Price.value,
            Place:event.target.Place.value
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
                                <h3 className="modal-title">Edit this Info</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="InfoId">
                                                    <Form.Label>InfoId</Form.Label>
                                                    <Form.Control type="text" name="InfoId" 
                                                    required disabled 
                                                    defaultValue={this.props.infid}
                                                    placeholder="InfoId"/>
                                                </Form.Group>

                                                <Form.Group controlId="Focus">
                                                    <Form.Label>Focus</Form.Label>
                                                    <Form.Control type="text" name="Focus" 
                                                    required 
                                                    defaultValue={this.props.inffocus}
                                                    placeholder="Focus"/>
                                                </Form.Group>

                                                <Form.Group controlId="Kurs">
                                                    <Form.Label>Kurs</Form.Label>
                                                    <Form.Control type="text" name="Kurs" 
                                                    required 
                                                    defaultValue={this.props.infkurs}
                                                    placeholder="Kurs"/>
                                                </Form.Group>

                                                <Form.Group controlId="Price">
                                                    <Form.Label>Price</Form.Label>
                                                    <Form.Control type="text" name="Price" 
                                                    required 
                                                    defaultValue={this.props.infprice}
                                                    placeholder="Price"/>
                                                </Form.Group>

                                                <Form.Group controlId="Place">
                                                    <Form.Label>Place</Form.Label>
                                                    <Form.Control type="text" name="Place" 
                                                    required 
                                                    defaultValue={this.props.innfplace}
                                                    placeholder="Place"/>
                                                </Form.Group>
                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Info
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