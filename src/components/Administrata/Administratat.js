import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddAdministrat } from './AddAdministrat'
import { Administrata } from './Administrata'

export class Administratat extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            admins : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Administrata")
        .then(response=>response.json())
        .then(data=>{
            this.setState({admins:data});
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
        const {admins,adid,adthemeluesi,addescription,ademail,adtel,adadmin}=this.state;

    return (
    <div>
    <div id="states">
        <div>

            {admins.map(ad =>
                <Administrata key={ad.AdministrataId}  
                AdministrataId={ad.AdministrataId} 
                Themeluesi={ad.Themeluesi} 
                Description={ad.Description} 
                Email={ad.Email}
                NrTel={ad.NrTel}
                Administarta={ad.Administarta}>
                </Administrata>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Administrate </Button>
                  {this.state.isModalOpen ? 
                  <AddAdministrat onClose={this.toggleUserModal}
                  adid={adid}
                  adthemeluesi={adthemeluesi}
                  addescription={addescription}
                  ademail={ademail}
                  adtel={adtel}
                  adadmin={adadmin}/>
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}