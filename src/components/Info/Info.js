import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditInfo } from './EditInfo';

export class Info extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            InfoId : [],
            Focus : [],
            Kurs : [],
            Price : [],
            Place : [],
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
        deleteInfo(infid){
            if(window.confirm('Are you sure you want to delete this Information?')){
                fetch("http://localhost:5000/api/info/"+infid,{
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
                <div className="box" key={this.props.InfoId}>
                    <p>{this.props.Focus} , {this.props.Kurs} , {this.props.Price}, {this.props.Place}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditInfo
                        isEditModalOpen={this.state.isEditModalOpen}
                        infid={this.props.InfoId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteInfo(this.props.InfoId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}