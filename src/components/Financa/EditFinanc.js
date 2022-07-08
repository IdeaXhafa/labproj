import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditFinanc extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/financa",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            FId:event.target.FId.value,
            Puna:event.target.Puna.value
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
                                <h3 className="modal-title">Edit this Finance</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="FId">
                                                    <Form.Label>FId</Form.Label>
                                                    <Form.Control type="text" name="FId" 
                                                    required disabled 
                                                    defaultValue={this.props.fid}
                                                    placeholder="FId"/>
                                                </Form.Group>

                                                <Form.Group controlId="Puna">
                                                    <Form.Label>Puna</Form.Label>
                                                    <Form.Control type="text" name="Puna" 
                                                    required 
                                                    defaultValue={this.props.fpuna}
                                                    placeholder="Puna"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Finance
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