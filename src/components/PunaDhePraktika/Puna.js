import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditPune } from './EditPune';

export class Puna extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            PunaId : [],
            Punet : [],
            Price : [],
            Kerkesa : [],
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
        deletePuna(ppid){
            let token = "Bearer " + localStorage.getItem('loginToken');
            if(window.confirm('Are you sure you want to delete this Job?')){
                fetch("http://localhost:5000/api/punadhepraktika/"+ppid,{
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
                <div className="box" key={this.props.PunaId}>
                    <p>{this.props.Punet}</p>
                    <p>{this.props.Price}</p>
                    <p>{this.props.Kerkesa}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditPune
                        isEditModalOpen={this.state.isEditModalOpen}
                        ppid={this.props.PunaId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deletePuna(this.props.PunaId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}