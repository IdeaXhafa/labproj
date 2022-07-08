import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditAsistent } from './EditAsistent';

export class Asistent extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            AsistentId : [],
            AsistentName : [],
            Age : [],
            Specializim : [],
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
        deleteAsistent(asiid){
            let token = "Bearer " + localStorage.getItem('loginToken');
            if(window.confirm('Are you sure you want to delete this Asistent?')){
                fetch("http://localhost:5000/api/asistent/"+asiid,{
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
                <div className="box" key={this.props.AsistentId}>
                    <p>{this.props.AsistentName}</p>
                    <p>Age: {this.props.Age}</p>
                    <p>{this.props.Specializim}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditAsistent
                        isEditModalOpen={this.state.isEditModalOpen}
                        asiid={this.props.AsistentId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteAsistent(this.props.AsistentId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}