import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditAdministrat } from './EditAdministrat';

export class Administrata extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            AdministrataId : [],
            Themeluesi : [],
            Description : [],
            Email : [],
            NrTel : [],
            Administarta : [],
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
        deleteAdm(adid){
            let token = "Bearer " + localStorage.getItem('loginToken');
            if(window.confirm('Are you sure you want to delete this Administrate?')){
                fetch("http://localhost:5000/api/Administrata/"+adid,{
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
                <div className="box" key={this.props.AdministrataId} style={{border:'none'}}>
                    <p className='par'>{this.props.Themeluesi} </p>
                    <p className='par'> {this.props.Description}</p>
                    <p className='par'> {this.props.Email}</p>
                    <p className='par'>Contact: {this.props.NrTel}, {this.props.Administarta}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditAdministrat
                        isEditModalOpen={this.state.isEditModalOpen}
                        adid={this.props.AdministrataId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteAdm(this.props.AdministrataId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}