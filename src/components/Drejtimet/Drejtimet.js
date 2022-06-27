import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddDrejtim } from './AddDrejtim'
import { Drejtimi } from './Drejtimi'

export class Drejtimet extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            drejtimet : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/drejtimi")
        .then(response=>response.json())
        .then(data=>{
            this.setState({drejtimet:data});
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
        const {drejtimet,drid,drname}=this.state;

    return (
    <div>
        <StatesContainer id="states">
        <StatesWrapper>

            {drejtimet.map(dr =>
                <Drejtimi style={{borderRadius: '0'}} key={dr.DrejtimiId}  
                DrejtimiId={dr.DrejtimiId} 
                DrejtimiName={dr.DrejtimiName} 
                >
                </Drejtimi>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state' style={{backgroundColor: '#999', width: '150px', height: '50px',
            marginTop: '20px', border: 'none'}}> Add Drejtim </Button>
                  {this.state.isModalOpen ? 
                  <AddDrejtim onClose={this.toggleUserModal}
                  drid={drid}
                  drname={drname}
                  />
                  :''}
                
        </StatesWrapper> 
        
        </StatesContainer>
    </div>
    )
}
}