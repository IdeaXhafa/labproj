import React, {Component} from 'react'
import { CityContainer, CityH1, CitiesWrapper} from './CityElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddCity } from './AddCity'
import { City } from './City'

export class Cities extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            cities : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/city")
        .then(response=>response.json())
        .then(data=>{
            this.setState({cities:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen: !state.isModalOpen
            }
        })
    }

    render(){
        const {cities,ciid,ciname,country,cipopulation,cilocation}=this.state;

    return (
    <div>
    <CityContainer id="cities">
      <CityH1>Cities</CityH1>
        <CitiesWrapper>
            {cities.map(ci =>
                <City key={ci.CityId}  
                CityId={ci.CityId} 
                CityName={ci.CityName} 
                Country={ci.Country}
                CityPopulation={ci.CityPopulation}
                CityLocation={ci.CityLocation} >
                </City>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add City </Button>
                  {this.state.isModalOpen ? 
                  <AddCity onClose={this.toggleUserModal}
                  ciid={ciid}
                  ciname={ciname}
                  country={country}
                  cipopulation={cipopulation}
                  cilocation={cilocation}
                  />
                  :''}
                
        </CitiesWrapper> 
        
    </CityContainer>
    </div>
    )
}
}