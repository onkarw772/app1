import React, { useState } from 'react'
import { Electronic_section } from './Component/Electronic_section'
import { Footer } from './Component/Footer'
import { Header } from './Component/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Master } from './Component/Master'
import { Home } from './Component/Home'
import { Jewellery_Section } from './Component/Jewellery_Section'
import { TemplateMenWomenSection } from './Component/TemplateMenWomenSection'
import { Cart } from './SurajComponent/Cart'

import { MWSection } from './Component/MWSection'



export const PHome = (props) => {
  const [purchaceData, setPurchaceData] = useState([])
  const [count, setcount] = useState(0);
  const [total, settotal] = useState(0);
  const [MRP, setMRP] = useState(0);
  const [Discount, setDiscount] = useState(0);
  const addcart2 = (a, b) => {
    settotal(Number(total) + Number(((((Number(Number(b) - ((Number(b) * 10) / 100))) * 5) / 100) + (Number(b) - ((Number(b) * 10) / 100)))))
    setMRP(Number(MRP) + Number(b))
    setDiscount(Number(Discount) + (Number(b) * 10) / 100)
    setcount(Number(count) + 1);
    setPurchaceData([...purchaceData, {
      title: a,
      price: b,
      qty: 1,
      Mrp: b,
      Discount: 10,
      DisVal: ((Number(b) * 10) / 100),
      RemVal: (Number(b) - ((Number(b) * 10) / 100)),
      Gst: 5,
      GstVal: (((Number(Number(b) - ((Number(b) * 10) / 100))) * 5) / 100),
      TotalVal: ((((Number(Number(b) - ((Number(b) * 10) / 100))) * 5) / 100) + (Number(b) - ((Number(b) * 10) / 100))),
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
          <Route path='/' element={<Master Discount={Discount} MRP={MRP} total={total} qty={count} addcart1={addcart2} selectedComponent={Home} />}></Route>
          <Route path='/api' element={<Master Discount={Discount} MRP={MRP} total={total} qty={count} addcart1={addcart2} selectedComponent={MWSection} />}></Route>
          <Route path='/tempMenWomen' element={<Master Discount={Discount} MRP={MRP} total={total} qty={count} addcart1={addcart2} selectedComponent={TemplateMenWomenSection} />}></Route>
          <Route path='/electronic' element={<Master Discount={Discount} MRP={MRP} total={total} qty={count} addcart1={addcart2} selectedComponent={Electronic_section} />}></Route>
          <Route path='/jewlery' element={<Master Discount={Discount} MRP={MRP} total={total} qty={count} addcart1={addcart2} selectedComponent={Jewellery_Section} />}></Route>
          <Route path='/cart' element={<Master Discount={Discount} MRP={MRP} total={total} qty={count} pd={purchaceData} selectedComponent={Cart} />}></Route>

        </Routes>
      </BrowserRouter>








    </div>

  )
}
