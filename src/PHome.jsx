import React from 'react'
import { Home } from './Component/Home'
import { Electronic_section } from './Component/Electronic_section'
import { Footer } from './Component/Footer'
import { Header } from './Component/Header'
import { Jewellery_Section } from './Component/Jewellery_Section'
import { Men_Women_Section } from './Component/Men_Women_Section'

export const PHome = () => {
  return (
    <div>
      
      <Header/>
      <Men_Women_Section/>
        <Jewellery_Section/>
        <Electronic_section/>
        <Footer/>
    </div>
  )
}
