import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddAsistent } from './AddAsistent'
import { Asistent } from './Asistent'

export class Asistentet extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            asistent : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/asistent")
        .then(response=>response.json())
        .then(data=>{
            this.setState({asistent:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    // componentDidUpdate(){
    //     this.refreshList();
    // }
    
    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen: !state.isModalOpen
            }
        })
    }

    render(){
        const {asistent,asiid,asiname,asiage,asispec}=this.state;

    return (
    <div>
    <StatesContainer id="states">
    <h2 className='uni'>Asistent</h2>
    <StatesWrapper>

            {asistent.map(asi =>
                <Asistent key={asi.AsistentId}  
                AsistentId={asi.AsistentId} 
                AsistentName={asi.AsistentName} 
                Age={asi.Age} 
                Specializim={asi.Specializim} 
                >
                </Asistent>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Asistent </Button>
                  {this.state.isModalOpen ? 
                  <AddAsistent onClose={this.toggleUserModal}
                  asiid={asiid}
                  asiname={asiname}
                  asiage={asiage}
                  asispec={asispec}
                  />
                  :''}
                
        </StatesWrapper> 
        
        </StatesContainer>
    </div>
    )
}
}