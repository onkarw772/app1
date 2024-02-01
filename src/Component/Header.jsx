import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {



   return (
      <div>

         <div class="banner_bg_main">

            <div class="container">
               <div class="header_section_top">
                  <div class="row">
                     <div class="col-sm-12">
                        <div class="custom_menu">
                           <ul>
                              <li><a ><Link to='/'>Home</Link></a></li>
                              <li><a ><Link to='/api'>API Data</Link></a></li>
                              <li><a ><Link to='/tempMenWomen'>Man & Woman Fashion</Link></a></li>
                              <li><a ><Link to='/electronic'>Electronic</Link></a></li>
                              <li><a ><Link to='/jewlery'>Jewellery Accessories</Link></a></li>                             
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="logo_section">
               <div class="container">
                  <div class="row">
                     <div class="col-sm-12">
                        <div class="logo"><a href="index.html"><img src="images/logo.png" /></a></div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="header_section">
               <div class="container">
                  <div class="containt_main">
                     <div id="mySidenav" class="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <a href="index.html">Home</a>
                        <a href="fashion.html">Fashion</a>
                        <a href="electronic.html">Electronic</a>
                        <a href="jewellery.html">Jewellery</a>
                     </div>
                     <span class="toggle_icon" onclick="openNav()"><img src="images/toggle-icon.png" /></span>
                     <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a class="dropdown-item" href="#">Action</a>
                           <a class="dropdown-item" href="#">Another action</a>
                           <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                     </div>
                     <div class="main">

                        <div class="input-group">
                           <input type="text" class="form-control" placeholder="Search this blog" />
                           <div class="input-group-append">
                              <button class="btn btn-secondary" type="button"> 
                              {/* <--style={{ background- color:"#f26522"; border-color:"#f26522 "}}>--> */}
                              <i class="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="header_box">
                     <div class="lang_box ">
                        <a href="#" title="Language" class="nav-link" data-toggle="dropdown" aria-expanded="true">
                           <img src="images/flag-uk.png" alt="flag" class="mr-2 " title="United Kingdom" /> English <i class="fa fa-angle-down ml-2" aria-hidden="true"></i>
                        </a>
                        <div class="dropdown-menu ">
                           <a href="#" class="dropdown-item">
                              <img src="images/flag-france.png" class="mr-2" alt="flag" />
                              French
                           </a>
                        </div>
                     </div>
                     <div class="login_menu">
                        <ul>
                           <li><a href="#">
                              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span class="padding_10" ><Link to='/cart'>Cart | QTY : {props.qty}</Link> <input type="text"  /></span></a>
                           </li>
                           <li><a href="#">
                              <i class="fa fa-user" aria-hidden="true"></i>
                              <span class="padding_10">Cart</span></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="banner_section layout_padding">
            <div class="container">
               <div id="my_slider" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="row">
                           <div class="col-sm-12">
                              <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                              <div class="buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-sm-12">
                              <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                              <div class="buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-sm-12">
                              <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                              <div class="buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                     <i class="fa fa-angle-left"></i>
                  </a>
                  <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                     <i class="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>

      </div>

      </div>
      
    
   )
}
