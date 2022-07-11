import { Modal } from "reactstrap";
import React,{Component} from "react";
import './style.css';
import {Form} from 'react-bootstrap';

export class AddFaculty extends Component{
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

        var imagedata = document.querySelector('input[type="file"]').files[0];

        console.log(imagedata)

        const formData = new FormData();
        formData.append("FName", event.target.FName.value);
        formData.append("Pros", event.target.Pros.value);
        formData.append("Cons", event.target.Cons.value);
        formData.append("StudentCapacity", event.target.StudentCapacity.value);
        formData.append("Criter", event.target.Criter.value);
        formData.append("Price", event.target.Price.value);
        formData.append("fileName", imagedata);

        fetch("http://localhost:5000/api/fk/",{
            method:'POST',
            body:formData,
            headers:{
                'Authorization':token
            },
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('photo insertion failed');
        })
    }

    render(){
        return(
            <Modal isOpen={true}>
            <div className="container" style={{height:'650px'}} >
                <div className="modal-content" style={{height:'600px'}}>
                    <div className="modal-header">
                        <h3 className="modal-title">Add a Faculty</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>FName:</Form.Label>
                                <Form.Control type="text" name="FName" 
                                                required placeholder="FName"/>

                                <Form.Label>Pros:</Form.Label>
                                    <Form.Control type="text" name="Pros" 
                                                required placeholder="Pros"/>

                                <Form.Label>Cons:</Form.Label>
                                    <Form.Control type="text" name="Cons" 
                                                required placeholder="Cons"/>

                                <Form.Label> StudentCapacity:</Form.Label>
                                    <Form.Control type="text" name="StudentCapacity" 
                                                required placeholder="StudentCapacity"/>

                                <Form.Label> Criter:</Form.Label>
                                    <Form.Control type="text" name="Criter" 
                                                required placeholder="Criter"/>

                                <Form.Label>Price:</Form.Label>
                                    <Form.Control type="text" name="Price" 
                                                required placeholder="Price"/>
                            </div>

                            <div>
                                <input type="File"/>
                            </div>

                            <div>
                                <button type="submit" className="add-btn" style={{left:'330px',bottom:'10px'}}>
                                Add Faculty
                                </button>
                            </div>

                            <div className="modal-footer">
                                <button onClick={this.props.onClose } style={{left:'100px'}}>Close</button>
                            </div> 
                        </Form>
                    </div>
                </div>
            </div>
            </Modal>
        )
    }
}