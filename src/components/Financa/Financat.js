import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddFinanc } from './AddFinanc'
import { Financa } from './Financa'

export class Financat extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            financa : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/financa")
        .then(response=>response.json())
        .then(data=>{
            this.setState({financa:data});
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
        const {financa,fid,fpuna}=this.state;

    return (
    <div>
    <div id="states" className='fin-container'>
        <div className='fin-wrapper'>

            {financa.map(fin =>
                <Financa key={fin.FId}  
                FId={fin.FId} 
                Puna={fin.Puna} 
                >
                </Financa>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Finance </Button>
                  {this.state.isModalOpen ? 
                  <AddFinanc onClose={this.toggleUserModal}
                  fid={fid}
                  fpuna={fpuna}
                  />
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}