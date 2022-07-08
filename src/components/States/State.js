import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './StateElements'
// import Icon1 from '../../images/state-1.svg'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { EditState } from './EditState'
import { Fk } from '../Fk/Fk'

export class State extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            CountryId : [],
            CountryName : [],
            CountryLocation : [],
            CountryCapitalCity : [],
            isEditModalOpen : false
        };
    }
    
    toggleUserEditModal = ()=>{
        this.setState((state)=>{
            return{
                isEditModalOpen: !state.isEditModalOpen
            }
        })
    }

        //delete function
        deleteCountry(coid){
            let token = "Bearer " + localStorage.getItem('loginToken');
            if(window.confirm('Are you sure you want to delete this State?')){
                fetch("http://localhost:5000/api/country/"+coid,{
                    method:'DELETE',
                    header:{
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization':token
                    }
                })
            }
        }

    render(){
        return (
            <div className='holder'>
                {/* <StatesCard>
                <StateIcon src={Icon1}/>
                <StateIdP key={this.props.CountryId}/>
                    <StateH2>{this.props.CountryName}</StateH2>
                    <StateP>{this.props.CountryLocation}</StateP>
                    <CityP>{this.props.CapitalCity}</CityP>  
                    
                    <ButtonToolbar>
                        <Button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </Button> 
                        {this.state.isEditModalOpen ?
                        <EditState 
                        isEditModalOpen={this.state.isEditModalOpen}
                        coid={this.props.CountryId}
                        onClose={this.toggleUserEditModal}
                                            // coid={coid}
                                            // coname={coname}
                                            /> 
                        :''}

                        <Button className="mr-2" variant="danger"
                            onClick={()=>this.deleteCountry(this.props.CountryId)}>
                                Delete
                        </Button>
                    </ButtonToolbar> 
                </StatesCard> */}
                <div className="box" key={this.props.CountryId}>
                    <p> Place : {this.props.CountryName} </p>
                    <p> Location : {this.props.CountryLocation} </p>
                    <p> CapitalCity : {this.props.CapitalCity}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        {this.state.isEditModalOpen ?
                        <EditState 
                        isEditModalOpen={this.state.isEditModalOpen}
                        coid={this.props.CountryId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteCountry(this.props.CountryId)}>
                                Delete
                        </button>
                </div>
                
            </div>
        )
}
}