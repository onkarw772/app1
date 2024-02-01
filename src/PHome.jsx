import React, { useState } from 'react'
import { Electronic_section } from './Component/Electronic_section'
import { Footer } from './Component/Footer'
import { Header } from './Component/Header'
import { Men_Women_Section } from './Component/Men_Women_Section'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Master } from './Component/Master'
import { Home } from './Component/Home'
import { Jewellery_Section } from './Component/Jewellery_Section'
import { TemplateMenWomenSection } from './Component/TemplateMenWomenSection'



export const PHome = (props) => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master selectedComponent={Home}/>}></Route>      
          <Route path='/api' element={<Master selectedComponent={Men_Women_Section}/>}></Route>      
          <Route path='/electronic' element={<Master selectedComponent={Electronic_section}/>}></Route>      
          <Route path='/jewlery' element={<Master selectedComponent={Jewellery_Section}/>}></Route>      
          <Route path='/tempMenWomen' element={<Master selectedComponent={TemplateMenWomenSection}/>}></Route>      
        </Routes>
      </BrowserRouter>
    
    


        
      
    
      
      </div>

  )
}
