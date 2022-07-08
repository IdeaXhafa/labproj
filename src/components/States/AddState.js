import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddState extends Component{
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
        fetch("http://localhost:5000/api/country",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            CountryName:event.target.CountryName.value,
            CountryLocation:event.target.CountryLocation.value,
            CapitalCity:event.target.CapitalCity.value,
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
                        <h3 className="modal-title">Add a State</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>State Name:</Form.Label>
                                <Form.Control type="text" name="CountryName" 
                                                required placeholder="CountryName"/>

                                <Form.Label>Location:</Form.Label>
                                    <Form.Control type="text" name="CountryLocation" 
                                                required placeholder="CountryLocation"/>

                                <Form.Label>Capital City:</Form.Label>
                                    <Form.Control type="text" name="CapitalCity" 
                                                required placeholder="CapitalCity"/>
                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add State
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