import React, {Component} from "react";
import './style.css';
import { EditFaculty } from "./EditFaculty";

export class Fk extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            FID : [],
            FName : [],
            Pros : [],
            Cons : [],
            StudentCapacity : [],
            Criter : [],
            Price : []
        };
    }

    toggleUserEditModal = ()=>{
        this.setState((state)=>{
            return{
                isEditModalOpen: !state.isEditModalOpen
            }
        })
    }

        
        deleteUni(faid){
            if(window.confirm('Are you sure you want to delete this University?')){
                fetch("http://localhost:5000/api/fk/"+faid,{
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
            <div className="holder">
             <div className="box" key={this.props.FID}>
                    <p>{this.props.FName}</p>
                    <p>{this.props.Pros}, {this.props.Cons}</p>
                    <p>{this.props.StudentCapacity}, {this.props.Criter}</p>
                    <p>{this.props.Price}</p>

                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        {this.state.isEditModalOpen ?
                        <EditFaculty
                        isEditModalOpen={this.state.isEditModalOpen}
                        faid={this.props.FId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteUni(this.props.FID)}>
                                Delete
                        </button>
                </div>
            </div>
        )
    }

}