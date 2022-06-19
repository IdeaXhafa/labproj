import React, {Component} from 'react'
import { CityContainer, CityH1, CityH2,
        CityIcon, CityPP, CityCard, CitiesWrapper,
        CityP, CityIdP, OptionsP, CountryP } from './CityElements'

// import './images/ano.png'

import { Button, ButtonToolbar ,Image} from 'react-bootstrap'
import axios from 'axios'
import { EditCity } from './EditCity'
// const image = './images/ano.png'

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
            if(window.confirm('Are you sure you want to delete this City?')){
                fetch("http://localhost:5000/api/city/"+ciid,{
                    method:'DELETE',
                    header:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }
                })
            }
        }

    render(){
        return (
            <div>
                <CityCard>
                {/* <CityIcon src={Icon1}/> */}
                {/* <CityIcon>{this.imagesrc}</CityIcon> */}
                <Image width="100px" height="100px" {...this.imagesrc}/>
                {/* <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload File</button> */}
                <CityIdP key={this.props.CityId}/>
                    <CityH2>{this.props.CityName}</CityH2>
                    <CountryP>{this.props.Country}</CountryP>
                    <CityPP>{this.props.CityPopulation}</CityPP>
                    <CityP>{this.props.CityLocation}</CityP> 
                    
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