import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditRecom extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/recommandations",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            RecId:event.target.RecId.value,
            Name:event.target.Name.value,
            Recomm:event.target.Recomm.value
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
                                <h3 className="modal-title">Edit this Recommandation</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                                <Form.Group controlId="RecId">
                                                    <Form.Label>RecId</Form.Label>
                                                    <Form.Control type="text" name="RecId" 
                                                    required disabled 
                                                    defaultValue={this.props.recid}
                                                    placeholder="RecId"/>
                                                </Form.Group>

                                                <Form.Group controlId="Name">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" name="Name" 
                                                    required 
                                                    defaultValue={this.props.recname}
                                                    placeholder="Name"/>
                                                </Form.Group>

                                                <Form.Group controlId="Recomm">
                                                    <Form.Label>Recomm</Form.Label>
                                                    <Form.Control type="text" name="Recomm" 
                                                    required 
                                                    defaultValue={this.props.recomm}
                                                    placeholder="Recomm"/>
                                                </Form.Group>
                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Recommandation
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