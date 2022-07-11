import React,{Component} from "react";
import {Form, Image} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './citystyling.css';

export class EditCity extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();

        var imagedata = document.querySelector('input[type="file"]').files[0];

        console.log(imagedata)

        const formData = new FormData();
        formData.append("CityId", event.target.CityId.value);
        formData.append("CityName", event.target.CityName.value);
        formData.append("Country", event.target.Country.value);
        formData.append("CityPopulation", event.target.CityPopulation.value);
        formData.append("CityLocation", event.target.CityLocation.value);
        formData.append("fileName", imagedata);

        fetch("http://localhost:5000/api/city/",{
            method:'PUT',
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
                    <div className="container">
                        <div className="modal-content" >
                            <div className="modal-header">
                                <h3 className="modal-title">Edit this City</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                                <Form.Group controlId="CityId">
                                                    <Form.Label>CityId</Form.Label>
                                                    <Form.Control type="text" name="CityId" 
                                                    required disabled 
                                                    defaultValue={this.props.ciid}
                                                    placeholder="CityId"/>
                                                </Form.Group>

                                                <Form.Group controlId="CityName">
                                                    <Form.Label>CityName</Form.Label>
                                                    <Form.Control type="text" name="CityName" 
                                                    required 
                                                    defaultValue={this.props.ciname}
                                                    placeholder="CityName"/>
                                                </Form.Group>

                                                <Form.Group controlId="Country">
                                                    <Form.Label>Country</Form.Label>
                                                    <Form.Control type="text" name="Country" 
                                                    required 
                                                    defaultValue={this.props.country}
                                                    placeholder="Country"/>
                                                </Form.Group>

                                                <Form.Group controlId="CityPopulation">
                                                    <Form.Label>CityPopulation</Form.Label>
                                                    <Form.Control type="text" name="CityPopulation" 
                                                    required 
                                                    defaultValue={this.props.cipopulation}
                                                    placeholder="CityPopulation"/>
                                                </Form.Group>

                                                <Form.Group controlId="CityLocation">
                                                    <Form.Label>CityLocation</Form.Label>
                                                    <Form.Control type="text" name="CityLocation" 
                                                    required 
                                                    defaultValue={this.props.cilocation}
                                                    placeholder="CityLocation"/>
                                                </Form.Group>
                                    </div>

                                    <div>
                                       <input type="File"/>
                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit" className="update-btn">
                                                        Update City
                                                    </button>
                                                </Form.Group>

                                                <div className="modal-edit-footer">
                                                    <button onClick={this.props.onClose} className="close-button">Close</button>
                                                </div> 
                                </Form>
                            </div>
                        </div>
                    </div>
                </Modal>
        )
    }
}