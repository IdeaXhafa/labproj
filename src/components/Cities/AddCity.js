import React,{Component} from "react";
import {Button,Form, Image} from 'react-bootstrap';
import './citystyling.css';
import {Modal} from 'reactstrap';

export class AddCity extends Component{
    constructor(props){
        super(props);
        //this.handleSubmit=this.handleSubmit.bind(this)
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    // imagesrc = process.env.REACT_APP_PHOTOPATH + this.filename;
    imagescr = "http://localhost:5000/Photos/"+this.filename;

    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen : !super.state.isModalOpen
            }
        })
    }

    // handleSubmit(event){
    //     event.preventDefault();
    //     fetch("http://localhost:5000/api/city",{
    //     method:"POST",
    //     headers:{
    //         'Accept':'application/json',
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({
    //         CityName:event.target.CityName.value,
    //         Country:event.target.Country.value,
    //         CityPopulation:event.target.CityPopulation.value,
    //         CityLocation:event.target.CityLocation.value,
    //         //FileName:this.filename
    //         FileName:event.target.FileName.value
    //     })
    // })
    // .then(res=>res.json())
    // .then((result)=>{
    //     alert(result);
    // },
    // (error)=>{
    //     alert('Insertion failed!');
    // })
    // }

    // handleFileSelected(event){
    //     event.preventDefault();
    //     this.CityName=event.target.CityName.value;
    //     this.Country=event.target.Country.value;
    //     this.CityPopulation=event.target.CityPopulation.value;
    //     this.CityLocation=event.target.CityLocation.value;
    //     this.filename=event.target.files[0].name;
    //     const formData = new FormData();
    //     formData.append(
    //         "myFile",
    //         event.target.files[0],
    //         event.target.files[0].name,
    //         event.target.CityName,
    //         event.target.Country,
    //         event.target.CityPopulation,
    //         event.target.CityLocation
    //     );
    //     fetch("http://localhost:5000/api/city/",{
    //         method:'POST',
    //         body:formData
    //     })
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         //this.imagesrc="http://localhost:5000/Photos/"+result;
    //         alert(result);
    //     },
    //     (error)=>{
    //         alert('photo insertion failed');
    //     })
    // }

    handleFileSelected(event) {
        var data = new FormData();
        var imagedata = document.querySelector('input[type="file"]').files[0];
        data.append("data", imagedata);

        fetch("http://localhost:5000/api/city/", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "type": "formData"
      },
      body: data
    }).then(res=>res.json())
        .then((result)=>{
            //this.imagesrc="http://localhost:5000/Photos/"+result;
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
                                <Image width="200px" height="200px" src={"/images/" + this.filename}/>
                                <input onChange={this.handleFileSelected} type="File"/>
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