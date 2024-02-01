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
import { Cart } from './SurajComponent/Cart'



export const PHome = (props) => {
  const [purchaceData, setPurchaceData] = useState([])
  const [count, setcount] = useState(0);

  const addcart2 = (a, b) => {
    setPurchaceData([...purchaceData, {
      title: a,
      price: b,
      qty: 1,
      Mrp: b,
      Discount: 10,
      Gst: 5,
    }])

    const plus = () => {
      setcount(Number(count) + 1);
    }
    const minus = () => {
      setcount(Number(count) - 1);
    }

  };



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master  selectedComponent={Home} />}></Route>
          <Route path='/api' element={<Master addcart1={addcart2} selectedComponent={Men_Women_Section} />}></Route>
          <Route path='/electronic' element={<Master selectedComponent={Electronic_section} />}></Route>
          <Route path='/jewlery' element={<Master selectedComponent={Jewellery_Section} />}></Route>
          <Route path='/tempMenWomen' element={<Master selectedComponent={TemplateMenWomenSection} />}></Route>
          <Route path='/cart' element={<Master pd={purchaceData} selectedComponent={Cart} />}></Route>
        </Routes>
      </BrowserRouter>








    </div>

  )
}
