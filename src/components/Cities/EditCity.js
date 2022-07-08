import React,{Component} from "react";
import {Form, Image} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './citystyling.css';

export class EditCity extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    //filename = "ano.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.filename;
    // imagescr = "http://localhost:5000/Photos/"+this.filename;

    handleSubmit(event){
        let token = "Bearer " + localStorage.getItem('loginToken');
        event.preventDefault();
        fetch("http://localhost:5000/api/city",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            CityId:event.target.CityId.value,
            CityName:event.target.CityName.value,
            Country:event.target.Country.value,
            CityPopulation:event.target.value.CityPopulation,
            CityLocation:event.target.CityLocation.value,
            FileName:this.filename
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

    handleFileSelected(event){
        event.preventDefault();
        this.filename=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );
        fetch("http://localhost:5000/api/city/SaveFile",{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc="http://localhost:5000/Photos/"+result;
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
                                       <Image width="200px" height="200px" 
                                       src={process.env.REACT_APP_PHOTOPATH+this.props.filename}/>
                                       <input onChange={this.handleFileSelected} type="File"/>
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