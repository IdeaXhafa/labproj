import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './RecomElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { EditRecom } from './EditRecom'
import './style.css'

export class Recommandation extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            RecId : [],
            Name : [],
            Recomm : [],
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
        deleteRec(recid){
            let token = "Bearer " + localStorage.getItem('loginToken');
            if(window.confirm('Are you sure you want to delete this Recommandation?')){
                fetch("http://localhost:5000/api/recommandations/"+recid,{
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
                <div className="rec-box" style={{width: '90%', height: 'auto',borderColor:'white'}} key={this.props.RecId}>
                    <p>{this.props.Name}</p>
                    <p>{this.props.Recomm}</p>

                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        {this.state.isEditModalOpen ?
                        <EditRecom
                        isEditModalOpen={this.state.isEditModalOpen}
                        recid={this.props.RecId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteRec(this.props.RecId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}