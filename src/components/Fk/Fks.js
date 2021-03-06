import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './FacElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import './style.css';
import { Fk } from "./Fk";
import { AddFaculty } from './AddFaculty'

export class Fks extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            fks : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    refreshList(){
        fetch("http://localhost:5000/api/fk")
        .then(response=>response.json())
        .then(data=>{
            this.setState({fks:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen: !state.isModalOpen
            }
        })
    }

    render(){
        const {fks,faid,faname,fapros,facons,fastudents,facriter,faprice, file}=this.state;

    return (
        <div className='unis'>
         <StatesContainer id="states">
            
    <h1 className='uni'>University Profiles</h1>
    <StatesWrapper className='states'>
            {fks.map(fa =>
                <Fk className='fks' key={fa.FId}  
                FName={fa.FName} 
                Pros={fa.Pros}
                Cons={fa.Cons}
                StudentCapacity={fa.StudentCapacity}
                Criter={fa.Criter}
                Price={fa.Price}
                FileName={fa.FileName}
                >
                </Fk>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Faculty </Button>
                  {this.state.isModalOpen ? 
                  <AddFaculty onClose={this.toggleUserModal}
                            faid={faid}
                            faname={faname}
                            facpros={fapros}
                            facons={facons}
                            fastudents={fastudents}
                            facriter={facriter}
                            faprice={faprice}
                            file={file}
                  />
                  :''}
                
        </StatesWrapper>
        </StatesContainer>
    </div>
    )
}
}

