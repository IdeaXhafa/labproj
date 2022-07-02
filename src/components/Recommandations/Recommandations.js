import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './RecomElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddRecom } from './AddRecom'
import { Recommandation } from './Recommandation'

export class Recommandations extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            recoms : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/recommandations")
        .then(response=>response.json())
        .then(data=>{
            this.setState({recoms:data});
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
        const {recoms,recid,recname,recomm}=this.state;

    return (
        <div>
        <div id="states">
        <h3 className='uni'>Recommandations of earlier Students</h3>
            <div>

            {recoms.map(rec =>
                <Recommandation key={rec.RecId}  
                RecId={rec.RecId} 
                Name={rec.Name} 
                Recomm={rec.Recomm} 
                >
                </Recommandation>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Recommandation </Button>
                  {this.state.isModalOpen ? 
                  <AddRecom onClose={this.toggleUserModal}
                  recid={recid}
                  recname={recname}
                  recomm={recomm}
                  />
                  :''} 
        </div>
        </div>
    </div>
    )
}
}