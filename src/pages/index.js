import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { States } from '../components/States/States'
import { Cities } from '../components/Cities/Cities'

const Home=()=> {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
    return (
    <>
       
      <NavBar toggle={toggle}/>
      <States/> 
      <Cities/>
      </>
    )
}
     
export default Home;