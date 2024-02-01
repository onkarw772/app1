import React, { useState } from 'react'
import { Electronic_section } from './Component/Electronic_section'
import { Footer } from './Component/Footer'
import { Header } from './Component/Header'
import { Jewellery_Section } from './Component/Jewellery_Section'
import { Men_Women_Section } from './Component/Men_Women_Section'



export const PHome = (props) => {
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
      <Header
        addcart3={addcart2}
      />
      <div class="fashion_section">
        <div id="main_slider" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <h1 class="fashion_taital">Man & Woman Fashion</h1>
                <div class="fashion_section_2">

                  <Men_Women_Section
                    addcart1={addcart2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Jewellery_Section />
        <Electronic_section />
        <Footer />
      </div>
    </div>
  )
}
