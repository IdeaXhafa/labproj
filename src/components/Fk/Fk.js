import React, {Component} from "react";
import './style.css';
import { EditFaculty } from "./EditFaculty";
import ubt from '../images/ubt.jpg'

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
                 <img width="100px" height="100px" src={ubt}/>
                    <p className="fk-name">{this.props.FName}</p>
                    <p>Avantages: {this.props.Pros}, {this.props.Cons}</p>
                    <p>Student Capacity: {this.props.StudentCapacity}</p>
                    <p> University Criteria: {this.props.Criter}</p>
                    <p>Price: {this.props.Price}</p>

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