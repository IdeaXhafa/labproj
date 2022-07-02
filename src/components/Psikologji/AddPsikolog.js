import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddPsikolog extends Component{
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
        event.preventDefault();
        fetch("http://localhost:5000/api/psikologji",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Name:event.target.Name.value,
            Nr_Tel:event.target.Nr_Tel.value,
            Price:event.target.Price.value,
            Koha:event.target.Koha.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        window.location.reload();
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
                        <h3 className="modal-title">Add a Psychologist</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" name="Name" 
                                                required placeholder="Name"/>

                                <Form.Label>Phone Number:</Form.Label>
                                    <Form.Control type="text" name="Nr_Tel" 
                                                required placeholder="Nr_Tel"/>

                                <Form.Label>Price:</Form.Label>
                                    <Form.Control type="text" name="Price" 
                                                required placeholder="Price"/>

                                <Form.Label>How much time the phycologist offers:</Form.Label>
                                    <Form.Control type="text" name="Koha" 
                                                required placeholder="Koha"/>
                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Psychologist
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