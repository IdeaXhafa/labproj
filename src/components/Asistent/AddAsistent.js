import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddAsistent extends Component{
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
        fetch("http://localhost:5000/api/asistent",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            AsistentName:event.target.AsistentName.value,
            Age:event.target.Age.value,
            Specializim:event.target.Specializim.value
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
                        <h3 className="modal-title">Add an Asistent</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>AsistentName:</Form.Label>
                                <Form.Control type="text" name="AsistentName" 
                                                required placeholder="AsistentName"/>

                                <Form.Label>Age:</Form.Label>
                                <Form.Control type="text" name="Age" 
                                                required placeholder="Age"/>

                                <Form.Label>Specializim:</Form.Label>
                                <Form.Control type="text" name="Specializim" 
                                                required placeholder="Specializim"/>

                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Asistent
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