import React, { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Master = (props) => {
    const [purchaceData, setPurchaceData] = useState([])
    const [count, setcount] = useState(0);
    const addcart2 = (a, b) => {
        setPurchaceData([...purchaceData, {
            title: a,
            price: b,
            qty: 1,
            Mrp: a,
            Discount: 0,
            Gst: 0,
        }])

        const plus = () => {
            setcount(Number(count) + 1);
        }
        const minus = () => {
            setcount(Number(count) - 1);
        }

    };
    console.log(purchaceData)


    return (
        <div>
            <Header addcart3={addcart2} />
            <props.selectedComponent></props.selectedComponent>
            <Footer/>
        </div>
    )
}
