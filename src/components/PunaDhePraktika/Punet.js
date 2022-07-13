import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddPune } from './AddPune'
import { Puna } from './Puna'

export class Punet extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            pune : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/punadhepraktika")
        .then(response=>response.json())
        .then(data=>{
            this.setState({pune:data});
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
        const {pune,ppid,pppunet,ppprice,ppkerkes,file}=this.state;

    return (
    <div>
    <div id="states" className='contain'>
        <div className='wrap'>

            {pune.map(pp =>
                <Puna key={pp.PunaId}  
                PunaId={pp.PunaId} 
                Punet={pp.Punet} 
                Price={pp.Price} 
                Kerkesa={pp.Kerkesa} 
                FileName={pp.FileName}
                >
                </Puna>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Job </Button>
                  {this.state.isModalOpen ? 
                  <AddPune onClose={this.toggleUserModal}
                  ppid={ppid}
                  pppunet={pppunet}
                  ppprice={ppprice}
                  ppkerkes={ppkerkes}
                  file={file}
                  />
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}