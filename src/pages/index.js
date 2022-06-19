import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { States } from '../components/States/States'
import { Cities } from '../components/Cities/Cities'
import { Fks } from '../components/Fk/Fks'
import { Recommandations } from '../components/Recommandations/Recommandations'
import HomePage from '../components/Home/HomePage'
import { PsikologjiA } from '../components/Psikologji/PsikologjiA'
import { Specializimet } from '../components/Specializimet/Specializimet'
import { Kerkesat } from '../components/Kerkesat/Kerkesat'
import { Financat } from '../components/Financa/Financat'
import { Asistentet } from '../components/Asistent/Asistentet'
import { Punet } from '../components/PunaDhePraktika/Punet'
// import {Drejtimet} from '../components/Drejtimet/Drejtimet'
import {Infot} from '../components/Info/Infot'
// import App  from '../components/About/App'
import {Administratat} from '../components/Administrata/Administratat'
import {Professors} from '../components/Professor/Professors'

const Home=()=> {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
    return (
    <>
      <NavBar toggle={toggle}/>
      <HomePage/>
      <States/> 
      <Cities/>
      <Fks/>
      {/* <Drejtimet/> */}
      <Specializimet/>
      <Professors/>
      <Asistentet/>
      <Administratat/>
      <Recommandations/>
      <Punet/>
      <Infot/>
      <PsikologjiA/>
      <Kerkesat/>
      <Financat/>
      {/* <App/> */}
      </>
    )
}
     
export default Home;