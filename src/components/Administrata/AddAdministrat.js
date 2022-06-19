import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddAdministrat extends Component{
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
        fetch("http://localhost:5000/api/Administrata",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
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
                        <h3 className="modal-title">Add Administrate</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>Themeluesi:</Form.Label>
                                <Form.Control type="text" name="Themeluesi" 
                                                required placeholder="Themeluesi"/>

                                <Form.Label>Description:</Form.Label>
                                    <Form.Control type="text" name="Description" 
                                                required placeholder="Description"/>

                                <Form.Label>Email:</Form.Label>
                                    <Form.Control type="text" name="Email" 
                                                required placeholder="Email"/>

                                <Form.Label>NrTel:</Form.Label>
                                    <Form.Control type="text" name="NrTel" 
                                                required placeholder="NrTel"/>

                                <Form.Label>Administarta:</Form.Label>
                                    <Form.Control type="text" name="Administarta" 
                                                required placeholder="Administarta"/>
                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Administrate
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