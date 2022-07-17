import React,{Component} from "react";
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import { AddSubject } from "./AddSubject";
import { EditSubject } from "./EditSubject";

export class Subject extends Component{

        constructor(props){
            super(props);
            this.state={subjects:[], addModalShow:false, editModalShow:false}
        }

        refreshList(){
            fetch("http://localhost:5000/api/subject")
            .then(response=>response.json())
            .then(data=>{
                this.setState({subjects:data});
            });
        }

        componentDidMount(){
            this.refreshList();
        }
        componentDidUpdate(){
            this.refreshList();
        }

        deleteSub(subid){
            if(window.confirm('Are you sure you want to delete this Subject?')){
                fetch("http://localhost:5000/api/subject/"+subid,{
                    method:'DELETE',
                    header:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }
                })
            }
        }

    render(){
        const {subjects,subid,subname}=this.state;

        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>SubjectId</th>
                        <th>SubjectName</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map(sub=>
                            <tr key={sub.SubjectId}>
                                <td>{sub.SubjectId}</td>
                                <td>{sub.SubjectName}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            subid:sub.SubjectId,
                                            subname:sub.SubjectName})}>
                                                Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deleteSub(sub.SubjectId)}>
                                                Delete
                                        </Button>

                                        <EditSubject show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        subid={subid}
                                        subname={subname}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Subject
                    </Button>

                    <AddSubject show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}