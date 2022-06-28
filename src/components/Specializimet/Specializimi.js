import React, {Component} from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

import { EditSpecializim } from './EditSpecializim'
import './style.css'

export class Specializimi extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            SId : [],
            SName : [],
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
                fetch("http://localhost:5000/api/specializime/"+specid,{
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
                    <div className="box"  style={{border: 'none', background: 'white',width:400}} key={this.props.SId}>
                        <p className='spec-name' style={{textAlign: 'center'}}>{this.props.SName}</p>
                        <p className='before'>Department: {this.props.Drejtimi} , {this.props.DrejtimiName}</p>
                        <p className='before'>Advantages: {this.props.Advantages}</p>
                        <p className='before'>Disadvantages: {this.props.Disadvantages}</p>
                        <p className='before'>Popularity: {this.props.Popularity}</p>
                        {/* <p className='before'>Jobs you could work with this degree: {this.props.Jobs}</p> */}
                        {/* <p className='before'>Salary: {this.props.Payment}</p> */}
    
                            <button className="mr-1" variant="info"
                                onClick={this.toggleUserEditModal}>
                                Edit
                            </button> 
                            
                            {this.state.isEditModalOpen ?
                            <EditSpecializim
                            isEditModalOpen={this.state.isEditModalOpen}
                            specid={this.props.SId}
                            onClose={this.toggleUserEditModal}
                            /> 
                            :''}
    
                            <button className="mr-2" variant="danger"
                                onClick={()=>this.deleteSpec(this.props.SId)}>
                                    Delete
                            </button> 

                        <div className='box' style={{width:370}}>
                            <p className='before'>Jobs you could work with this degree: {this.props.Jobs}</p>
                            <p className='before'>Salary: {this.props.Payment}</p>
                        </div>

                    </div>
                </div>
            )
    }
}
