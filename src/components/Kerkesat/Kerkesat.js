import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddKerkes } from './AddKerkes'
import { Kerkesa } from './Kerkesa'

export class Kerkesat extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            kerkesat : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/kerkesat")
        .then(response=>response.json())
        .then(data=>{
            this.setState({kerkesat:data});
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
        const {kerkesat,kerid,ker,kerdes}=this.state;

    return (
    <div>
        <div className='kerkesa'>
            <div>
            {kerkesat.map(ker =>
                <Kerkesa key={ker.KId}  
                KId={ker.KId} 
                Kri={ker.Kri}
                Des={ker.Des}>
                </Kerkesa>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Kerkes </Button>
                  {this.state.isModalOpen ? 
                  <AddKerkes onClose={this.toggleUserModal}
                  kerid={kerid}
                  ker={ker}
                  kerdes={kerdes}
                  />
                  :''}
                
        </div> 
        </div>
    </div>
    )
}
}