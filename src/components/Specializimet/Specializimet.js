import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddSpecializim } from './AddSpecializim'
import { Specializimi } from './Specializimi'

export class Specializimet extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            specializim : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/specializime")
        .then(response=>response.json())
        .then(data=>{
            this.setState({specializim:data});
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
        const {specializim,specid,specname,specdrejtim,specdrejtimname,specpro,speccon,specpopularity,specjobs,specpayment}=this.state;

    return (
        <div>
        <StatesContainer id="states">
    <h2 className='uni'>- Specalizations - How Much They're Known And Paid For Today !</h2>
        <StatesWrapper>

            {specializim.map(spec =>
                <Specializimi key={spec.SId}  
                SId={spec.SId} 
                SName={spec.SName} 
                Drejtimi={spec.Drejtimi} 
                DrejtimiName={spec.DrejtimiName}
                Advantages={spec.Advantages}
                Disadvantages={spec.Disadvantages}
                Popularity={spec.Popularity}
                Jobs={spec.Jobs}
                Payment={spec.Payment}
                >
                </Specializimi>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Specalization </Button>
                  {this.state.isModalOpen ? 
                  <AddSpecializim onClose={this.toggleUserModal}
                  specid={specid}
                  specname={specname}
                  specdrejtim={specdrejtim}
                  specdrejtimname={specdrejtimname}
                  specpro={specpro}
                  speccon={speccon}
                  specpopularity={specpopularity}
                  specjobs={specjobs}
                  specpayment={specpayment}
                  />
                  :''}
                
        </StatesWrapper>
        </StatesContainer>
    </div>
    )
}
}

