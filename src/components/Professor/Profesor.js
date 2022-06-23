import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditProf } from './EditProf';

export class Profesor extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            ProfId : [],
            ProfName : [],
            Email : [],
            DrejtimiName : [],
            Drejtimi : [],
            School : [],
            Pervoja : [],
            Quote : [],
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
        deleteProf(profid){
            if(window.confirm('Are you sure you want to delete this Professor?')){
                fetch("http://localhost:5000/api/profesor/"+profid,{
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
                <div className="box" key={this.props.ProfId}>
                    <p className='prof-name'>{this.props.ProfName}</p> 
                    <p>{this.props.Email}</p>
                    <p>{this.props.DrejtimiName} </p>
                    {/* {this.props.Drejtimi} */}
                     <p>Studied: {this.props.School}</p>
                     <p className='text'>Experience & Studies: </p>
                     <p>{this.props.Pervoja}</p>
                     <p>{this.props.Quote}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditProf
                        isEditModalOpen={this.state.isEditModalOpen}
                        profid={this.props.ProfId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteProf(this.props.ProfId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}