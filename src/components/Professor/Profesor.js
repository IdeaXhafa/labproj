import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        CityIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './StateElements'

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
            FileName : [],
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
            let token = "Bearer " + localStorage.getItem('loginToken');
            if(window.confirm('Are you sure you want to delete this Professor?')){
                fetch("http://localhost:5000/api/profesor/"+profid,{
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
                <div className="box" key={this.props.ProfId} style={{borderColor:'#01579b',height:'630px'}}>
                    <CityIcon src={"/images/" + this.props.FileName} style={{marginLeft: '33%'}}></CityIcon>
                    <p className='prof-name'>{this.props.ProfName}</p> 
                    <p><b>email:</b> {this.props.Email}</p>
                    <p>{this.props.DrejtimiName} </p>
                    {/* {this.props.Drejtimi} */}
                     <p><b>Studied:</b> {this.props.School}</p>
                     <p className='small-txt'>Experience & Studies: </p>
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