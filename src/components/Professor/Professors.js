import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddProf } from './AddProf'
import { Professor } from './Professor'

export class Professors extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            prof : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/professor")
        .then(response=>response.json())
        .then(data=>{
            this.setState({prof:data});
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
        const {prof,profid,profname,profemail,profdrejtiminame,profdrejtimi,profschool,profpervoja,profquote}=this.state;

    return (
    <div>
    <div id="states">
        <div>

            {prof.map(prof =>
                <Professor key={prof.ProfId}  
                ProfId={prof.ProfId} 
                ProfName={prof.ProfName} 
                Email={prof.Email} 
                DrejtimiName={prof.DrejtimiName} 
                Drejtimi={prof.Drejtimi} 
                School={prof.School} 
                Pervoja={prof.Pervoja}
                Quote={prof.Quote} 
                >
                </Professor>
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
                  />
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}