import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddPune extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen : !super.state.isModalOpen
            }
        })
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/punadhepraktika",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
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
                        <h3 className="modal-title">Add a Job</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>Punet:</Form.Label>
                                <Form.Control type="text" name="Punet" 
                                                required placeholder="Punet"/>

                                <Form.Label>Price:</Form.Label>
                                <Form.Control type="text" name="Price" 
                                                required placeholder="Price"/>

                                <Form.Label>Kerkesa:</Form.Label>
                                <Form.Control type="text" name="Kerkesa" 
                                                required placeholder="Kerkesa"/>

                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Job
                                </button>
                            </div> 

                            <div className="modal-footer">
                                <button onClick={this.props.onClose } className="button">Close</button>
                            </div> 
                        </Form>
                    </div>
                </div>
            </div>
            </Modal>
        )
    }
}