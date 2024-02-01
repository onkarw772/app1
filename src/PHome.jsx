import React, { useState } from 'react'
import { Electronic_section } from './Component/Electronic_section'
import { Footer } from './Component/Footer'
import { Header } from './Component/Header'
import { Jewellery_Section } from './Component/Jewellery_Section'
import { Men_Women_Section } from './Component/Men_Women_Section'

export const PHome = (props) => {
  const [count, setcount] = useState(0);
  const addcart2 = () => {
    // alert("addcart2")
    setcount(count + 1);


  };
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
