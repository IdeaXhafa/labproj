import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditKerkes extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/kerkesat",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            KId:event.target.KId.value,
            Kri:event.target.Kri.value,
            Des:event.target.Des.value
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
                                <h3 className="modal-title">Edit this Kerkes</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="KId">
                                                    <Form.Label>KId</Form.Label>
                                                    <Form.Control type="text" name="KId" 
                                                    required disabled 
                                                    defaultValue={this.props.kerid}
                                                    placeholder="KId"/>
                                                </Form.Group>

                                                <Form.Group controlId="Kri">
                                                    <Form.Label>Kri</Form.Label>
                                                    <Form.Control type="text" name="Kri" 
                                                    required 
                                                    defaultValue={this.props.ker}
                                                    placeholder="Kri"/>
                                                </Form.Group>

                                                <Form.Group controlId="Des">
                                                    <Form.Label>Des</Form.Label>
                                                    <Form.Control type="text" name="Des" 
                                                    required 
                                                    defaultValue={this.props.kerdes}
                                                    placeholder="Des"/>
                                                </Form.Group>
                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Kerkes
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