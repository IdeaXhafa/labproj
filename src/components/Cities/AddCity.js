import React,{Component} from "react";
import {Button,Form, Image} from 'react-bootstrap';
import './citystyling.css';
import {Modal} from 'reactstrap';

export class AddCity extends Component{
    constructor(props){
        super(props);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen : !super.state.isModalOpen,
                image : ''
            }
        })
    }

    handleFileSelected(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();

        var imagedata = document.querySelector('input[type="file"]').files[0];

        console.log(imagedata)

        const formData = new FormData();
        formData.append("CityName", event.target.CityName.value);
        formData.append("Country", event.target.Country.value);
        formData.append("CityPopulation", event.target.CityPopulation.value);
        formData.append("CityLocation", event.target.CityLocation.value);
        formData.append("fileName", imagedata);

        fetch("http://localhost:5000/api/city/",{
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
            <div className="container">
                <div className="modal-content" >
                    <div className="modal-header">
                        <h3 className="modal-title">Add a City</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleFileSelected}>

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
                                <input type="File"/>
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