import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddInfo } from './AddInfo'
import { Info } from './Info'

export class Infot extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            infot : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/info")
        .then(response=>response.json())
        .then(data=>{
            this.setState({infot:data});
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
        const {infot,infid,inffocus,infkurs,infprice,infplace}=this.state;

    return (
    <div>
    <div id="states">
        <div>

            {infot.map(inf =>
                <Info key={inf.InfoId}  
                InfoId={inf.InfoId} 
                Focus={inf.Focus} 
                Kurs={inf.Kurs} 
                Price={inf.Price}
                Place={inf.Place}>
                </Info>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Info </Button>
                  {this.state.isModalOpen ? 
                  <AddInfo onClose={this.toggleUserModal}
                  infid={infid}
                  inffocus={inffocus}
                  infkurs={infkurs}
                  infprice={infprice}
                  infplace={infplace}/>
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}