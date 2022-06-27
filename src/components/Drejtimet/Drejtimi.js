import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditDrejtim } from './EditDrejtim';

export class Drejtimi extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            DrejtimiId : [],
            DrejtimiName : [],
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
        deleteD(drid){
            if(window.confirm('Are you sure you want to delete this Resource?')){
                fetch("http://localhost:5000/api/drejtimi/"+drid,{
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
                <div className="box" style={{border: 'none'}} key={this.props.DrejtimiId}>
                    <p style={{color: 'white', fontSize: '23px'}}>{this.props.DrejtimiName}</p>

                    
                        <Button className="mr-1" variant="primary" style={{color: 'white'}}
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </Button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditDrejtim
                        isEditModalOpen={this.state.isEditModalOpen}
                        drid={this.props.DrejtimiId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <Button className="mr-2" variant="danger"
                            onClick={()=>this.deleteD(this.props.DrejtimiId)}>
                                Delete
                        </Button>
                </div>
            </div>
        )
}
}