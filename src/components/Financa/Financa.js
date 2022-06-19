import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditFinanc } from './EditFinanc';

export class Financa extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            FId : [],
            Puna : [],
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
        deleteFinanca(fid){
            if(window.confirm('Are you sure you want to delete this Finance?')){
                fetch("http://localhost:5000/api/financa/"+fid,{
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
                <div className="box" key={this.props.FId}>
                    <p>{this.props.Puna}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditFinanc
                        isEditModalOpen={this.state.isEditModalOpen}
                        fid={this.props.FId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteFinanca(this.props.FId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}