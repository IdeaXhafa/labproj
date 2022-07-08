import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddPsikolog } from './AddPsikolog'
import { Psikologji } from './Psikologji'

export class PsikologjiA extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            psikolog : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/psikologji")
        .then(response=>response.json())
        .then(data=>{
            this.setState({psikolog:data});
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
        const {psikolog,psikoid,psikoname,psikotel,psikoprice,psikokoha}=this.state;

    return (
    <div>
    <div id="states">
        <p className='txt'>If you're looking for help with Therapy, we've given you some options you could follow</p>
        <div>

            {psikolog.map(psiko =>
                <Psikologji key={psiko.PsikoId}  
                PsikoId={psiko.PsikoId} 
                Name={psiko.Name} 
                Nr_Tel={psiko.Nr_Tel} 
                Price={psiko.Price}
                Koha={psiko.Koha}>
                </Psikologji>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state' style={{width:120}}> Add Psychologist </Button>
                  {this.state.isModalOpen ? 
                  <AddPsikolog onClose={this.toggleUserModal}
                  psikoid={psikoid}
                  psikoname={psikoname}
                  psikotel={psikotel}
                  psikoprice={psikoprice}
                  psikokoha={psikokoha} 
                  />
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}