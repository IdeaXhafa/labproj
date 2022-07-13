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

        var imagedata = document.querySelector('input[type="file"]').files[0];

        console.log(imagedata)

        const formData = new FormData();
        formData.append("Punet", event.target.Punet.value);
        formData.append("Price", event.target.Price.value);
        formData.append("Kerkesa", event.target.Kerkesa.value);
        formData.append("fileName", imagedata);

        fetch("http://localhost:5000/api/punadhepraktika/",{
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
            alert('insertion failed');
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
                                <input type="File"/>
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