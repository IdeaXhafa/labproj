import React, {Component} from 'react'
import { CityContainer, CityH1, CityH2,
        CityIcon, CityPP, CityCard, CitiesWrapper,
        CityP, CityIdP, OptionsP, CountryP } from './CityElements'


import { Button, ButtonToolbar ,Image} from 'react-bootstrap'
import axios from 'axios'
import { EditCity } from './EditCity'


export class City extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            CityId : [],
            CityName : [],
            Country : [],
            CityPopulation: [],
            CityLocation : [],
            FileName : [],
            imagesrc: [],
            isEditModalOpen : false
        };
    }

    imagesrc = process.env.REACT_APP_PHOTOPATH + this.props.FileName;

    toggleUserEditModal = ()=>{
        this.setState((state)=>{
            return{
                isEditModalOpen: !state.isEditModalOpen
            }
        })
    }

        //delete function
        deleteCity(ciid){
            let token = "Bearer " + localStorage.getItem('loginToken');
            if(window.confirm('Are you sure you want to delete this City?')){
                fetch("http://localhost:5000/api/city/"+ciid,{
                    method:'DELETE',
                    header:{
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization':token
                    }
                })
            }
        }

        // getPhoto(imagesrc){
        //         fetch("http://localhost:5000/api/city/SaveFile"+imagesrc,{
        //             method:'GET',
        //             header:{
        //                 'Accept':'application/json',
        //                 'Content-Type':'application/json'
        //             }
        //         })
        // }

        // refreshP(){
        //     fetch("http://localhost:5000/api/city/SaveFile")
        //     .then(response=>response.json())
        //     .then(data=>{
        //         this.setState({imagesrc:data});
        //     });
        // }


    render(){
        return (
            <div>
                <CityCard>
                {/* <CityIcon src={Icon1}/> */}
                <CityIcon src={"/images/" + this.props.FileName} ></CityIcon>
                {/* <Image width="100px" height="100px" {...this.imagesrc}/> */}
                {/* <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload File</button> */}
                {/* <CityIcon src={prishtina}/> */}
                <CityIdP key={this.props.CityId}/>
                    <CityH2>{this.props.CityName}</CityH2>
                    <CountryP>{this.props.Country}</CountryP>
                    <CityPP>City Population: {this.props.CityPopulation}</CityPP>
                    <CityP>Location: {this.props.CityLocation}</CityP> 
                    
                    <ButtonToolbar>
                        <Button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </Button> 
                        {this.state.isEditModalOpen ?
                        <EditCity
                        isEditModalOpen={this.state.isEditModalOpen}
                        ciid={this.props.CityId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <Button className="mr-2" variant="danger"
                            onClick={()=>this.deleteCity(this.props.CityId)}>
                                Delete
                        </Button>
                    </ButtonToolbar> 
                </CityCard>
            </div>
        )
}
}