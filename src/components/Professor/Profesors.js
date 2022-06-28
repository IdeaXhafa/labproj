import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddProf } from './AddProf'
import { Profesor } from './Profesor'

export class Profesors extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            profa : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/profesor")
        .then(response=>response.json())
        .then(data=>{
            this.setState({profa:data});
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
        const {profa,profid,profname,profemail,profdrejtiminame,profdrejtimi,profschool,profpervoja,profquote,file}=this.state;

    return (
    <div>
    {/* <div id="states"> */}
    <StatesContainer id="states">
    <h2 className='uni'>Find the best professors from the Universities mentioned</h2>
        {/* <div> */}
        <StatesWrapper>

            {profa.map(prof =>
                <Profesor key={prof.ProfId}  
                ProfId={prof.ProfId} 
                ProfName={prof.ProfName} 
                Email={prof.Email} 
                DrejtimiName={prof.DrejtimiName} 
                Drejtimi={prof.Drejtimi} 
                School={prof.School} 
                Pervoja={prof.Pervoja}
                Quote={prof.Quote} 
                FileName={prof.FileName}
                >
                </Profesor>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Prof </Button>
                  {this.state.isModalOpen ? 
                  <AddProf onClose={this.toggleUserModal}
                  profid={profid}
                  profname={profname}
                  profemail={profemail}
                  profdrejtiminame={profdrejtiminame}
                  profdrejtimi={profdrejtimi}
                  profschool={profschool}
                  profpervoja={profpervoja}
                  profquote={profquote}
                  file={file}
                  />
                  :''}
                
                </StatesWrapper>
        
        </StatesContainer>
    </div>
    )
}
}