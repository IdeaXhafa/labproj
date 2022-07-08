import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddInfo extends Component{
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
        fetch("http://localhost:5000/api/info",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
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
                        <h3 className="modal-title">Add Info</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>Focus:</Form.Label>
                                <Form.Control type="text" name="Focus" 
                                                required placeholder="Focus"/>

                                <Form.Label>Kurs:</Form.Label>
                                    <Form.Control type="text" name="Kurs" 
                                                required placeholder="Kurs"/>

                                <Form.Label>Price:</Form.Label>
                                    <Form.Control type="text" name="Price" 
                                                required placeholder="Price"/>

                                <Form.Label>Place:</Form.Label>
                                    <Form.Control type="text" name="Place" 
                                                required placeholder="Place"/>
                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Info
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