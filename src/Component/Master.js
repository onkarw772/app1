import React, { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Master = (props) => {
    



    return (
        <div>
            <Header qty={props.qty} />
            <props.selectedComponent Discount={props.Discount} MRP={props.MRP} total={props.total} qty={props.qty} pd={props.pd} addcart1={props.addcart1}  ></props.selectedComponent>
            <Footer/>
        </div>
    )
}
