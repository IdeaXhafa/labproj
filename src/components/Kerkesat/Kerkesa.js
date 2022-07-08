import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditKerkes } from './EditKerkes';
import './style.css'

export class Kerkesa extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            KId : [],
            Kri : [],
            Des : [],
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
        deleteKer(kerid){
            let token = "Bearer " + localStorage.getItem('loginToken');
            if(window.confirm('Are you sure you want to delete this Kerkes?')){
                fetch("http://localhost:5000/api/kerkesat/"+kerid,{
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
                <div className="box" key={this.props.KId}>
                    <p>{this.props.Kri}</p>
                    <p> {this.props.Des}</p>

                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditKerkes
                        isEditModalOpen={this.state.isEditModalOpen}
                        kerid={this.props.KId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteKer(this.props.KId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}