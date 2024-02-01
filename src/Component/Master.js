import React, { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Master = (props) => {
    
  


    return (
        <div>
            <Header/>
            <props.selectedComponent pd={props.pd} addcart1={props.addcart1}  ></props.selectedComponent>
            <Footer/>
        </div>
    )
}
