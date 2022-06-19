import React, {Component} from 'react'
import { StatesContainer, StateH1, StateH2,
        StateIcon, StateP, StatesCard, StatesWrapper,
        CityP, StateIdP, OptionsP } from './StateElements'
import Icon1 from '../../images/state-1.svg'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddState } from './AddState'
import { State } from './State'

export class States extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            countries : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/country")
        .then(response=>response.json())
        .then(data=>{
            this.setState({countries:data});
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
        const {countries,coid,coname,colocation,cocity}=this.state;
        // const [query, setQuery] = useState("")

    return (
    <div>
    <StatesContainer id="states">
      <StateH1>Search for a State</StateH1>
      <input placeholder="Search"/>
        <StatesWrapper>


        {/* {countries.filter(co => {
        if (query === "") {
        return co;
        } else if (co.CountryName.toLowerCase().includes(query.toLowerCase())) {
        return co;
        }
        })} */}

            {countries.map(co =>
                <State key={co.CountryId}  
                CountryId={co.CountryId} 
                CountryName={co.CountryName} 
                CountryLocation={co.CountryLocation} 
                CapitalCity={co.CapitalCity}>
                </State>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add State </Button>
                  {this.state.isModalOpen ? 
                  <AddState onClose={this.toggleUserModal}
                  coid={coid}
                  coname={coname}
                  colocation={colocation}
                  cocity={cocity}/>
                  :''}
                
        </StatesWrapper> 
        
    </StatesContainer>
    </div>
    )
}
}