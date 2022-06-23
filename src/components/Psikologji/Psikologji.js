import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditPsikolog } from './EditPsikolog';

export class Psikologji extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            PsikoId : [],
            Name : [],
            Nr_Tel : [],
            Price : [],
            Koha : [],
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
        deletePsikolog(psikoid){
            if(window.confirm('Are you sure you want to delete this Psychologist?')){
                fetch("http://localhost:5000/api/psikologji/"+psikoid,{
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
                <div className="box" key={this.props.PsikoId}>
                    <p>{this.props.Name} </p>
                    <p>Contact:  {this.props.Nr_Tel} </p>
                    <p>Price: {this.props.Price}</p>
                    <p>How much time the therapist spends based on the Price: {this.props.Koha}</p>
                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditPsikolog
                        isEditModalOpen={this.state.isEditModalOpen}
                        psikoid={this.props.PsikoId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deletePsikolog(this.props.PsikoId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}