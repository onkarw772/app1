import React from 'react'
import Pdata from "../Subcomponent/Pdata.json";

export const Men_Women_Section = (props) => {

   const addcart = (i) => {
      alert("cart1")
      props.addcart1(Pdata[i.target.value].title, Pdata[i.target.value].price)
   }

   return (
      <div class="fashion_section">
         <div id="main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     <h1 class="fashion_taital">API Data</h1>
                     <div class="fashion_section_2">
                        <div class="row border border-primary">
                           {
                              Pdata.map((da, index) => (
                                 <div class="col-lg-4 col-sm-4 border border-warning p-4">
                                    <div class="box_main" >
                                       <div>
                                          <h4 class="shirt_text">{da.title}</h4>
                                          <p class="price_text">Price  <span style={{ color: " #262626;" }}>$ {da.price}</span></p>
                                          <div class="tshirt_img"><img src={da.image} /></div>
                                          <div class="btn_main">
                                             <div class="buy_bt"><button value={index} onClick={addcart}>Buy Now</button></div>
                                             <div class="seemore_bt"><a href="#">See More</a></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}
