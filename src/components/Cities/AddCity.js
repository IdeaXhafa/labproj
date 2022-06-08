import React,{Component} from "react";
import {Button,Row,Col,Form} from 'react-bootstrap';
import './citystyling.css';
import {Modal} from 'reactstrap';

export class AddCity extends Component{
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
        fetch("http://localhost:5000/api/city",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            CityName:event.target.CityName.value,
            Country:event.target.Country.value,
            CityPopulation:event.target.value.CityPopulation,
            CityLocation:event.target.CityLocation.value
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
                        <h3 className="modal-title">Add a City</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>City Name:</Form.Label>
                                <Form.Control type="text" name="CityName" 
                                                required placeholder="CityName"/>

                                <Form.Label>Country:</Form.Label>
                                <Form.Control type="text" name="Country" 
                                                required placeholder="Country"/>

                                <Form.Label>Population:</Form.Label>
                                <Form.Control type="text" name="CityPopulation" 
                                                required placeholder="CityPopulation"/>

                                <Form.Label>Location:</Form.Label>
                                    <Form.Control type="text" name="CityLocation" 
                                                required placeholder="CityLocation"/>
                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add City
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