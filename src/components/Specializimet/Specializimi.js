import React, {Component} from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

import { EditSpecializim } from './EditSpecializim'
import './style.css'

export class Specializimi extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            SpecializimiId : [],
            SpecializimiName : [],
            Drejtimi : [],
            DrejtimiName : [],
            Advantages : [],
            Disadvantages : [],
            Popularity : [],
            Jobs : [],
            Payment : [],
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
        deleteSpec(specid){
            if(window.confirm('Are you sure you want to delete this Specilazation?')){
                fetch("http://localhost:5000/api/specializimet/"+specid,{
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
                <div className='holder'>
                    <div className="box" key={this.props.SpecializimiId}>
                        <p>{this.props.SpecializimiName}</p>
                        <p>{this.props.Drejtimi} , {this.props.DrejtimiName}, 
                        {this.props.Advantages}, {this.props.Disadvantages}, 
                        {this.props.Popularity}, {this.props.Jobs}, {this.props.Payment}</p>
    
                            <button className="mr-1" variant="info"
                                onClick={this.toggleUserEditModal}>
                                Edit
                            </button> 
                            
                            {this.state.isEditModalOpen ?
                            <EditSpecializim
                            isEditModalOpen={this.state.isEditModalOpen}
                            specid={this.props.SpecializimiId}
                            onClose={this.toggleUserEditModal}
                            /> 
                            :''}
    
                            <button className="mr-2" variant="danger"
                                onClick={()=>this.deleteSpec(this.props.SpecializimiId)}>
                                    Delete
                            </button> 
                    </div>
                </div>
            )
    }
}
