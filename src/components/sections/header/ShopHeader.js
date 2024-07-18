/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import RegisterButton from '../../component/RegisterButton'

// icons
import { MdSpeaker } from "react-icons/md";
import { IoBagAddSharp, IoHeadsetSharp, IoWatch,  } from "react-icons/io5";
import { CartButton } from '../../component/CartButton';




export const ShopHeader = () => {
  return (
    <>
   
    <div className="header sticky-top shop-header" id="header">
     
    <nav className="navbar navbar-expand-lg py-3" >
    <div className="container-fluid">
      <a className="text-decoration-none navbar-brand urbanist" href="#">SMART-WATCH</a>
     
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="offcanvas offcanvas-start " tabindex="-1" id="offcanvasNavbar2" >
        <div className="offcanvas-header">

          <h5 className="offcanvas-title" id="offcanvasNavbar2Label">SMART-WATCH </h5>
          
          <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"></button>

        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">

            <li className="nav-item dropdown">

              <button className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
                Products
              </button>

              <ul className="dropdown-menu border-secondary border-opacity-50">

                {/* <li><button className="dropdown-item " href="#"> <FaPersonSwimming  className='fs-4 icon-color me-2' /> &nbsp; Sports Watches</button></li>
                <li><button className="dropdown-item " href="#">  <MdWorkspacePremium  className='fs-4 icon-color me-2' /> &nbsp; Premium Watches</button></li>
                <li><button className="dropdown-item " href="#"> <BiFemale className='fs-4 icon-color me-2'/> &nbsp; Women's Watches</button></li>
                <li><button className="dropdown-item " href="#"> <GiLovers className='fs-4 icon-color me-2'/> &nbsp; Couple's Watches</button></li>
                <li>
                  <hr className="dropdown-divider w-75"/>
                </li> */}

                <li><button className="dropdown-item " href="#"> <IoWatch  className='fs-4 icon-color me-2' /> &nbsp; Smart Watches </button> </li>
                <li>
                  <hr className="dropdown-divider w-75 mx-auto"/>
                </li>
                <li><button className="dropdown-item " href="#"> <IoHeadsetSharp  className='fs-4 icon-color me-2' /> &nbsp; Wireless TWS </button></li>
                <li>
                  <hr className="dropdown-divider w-75 mx-auto"/>
                </li>
                <li><button className="dropdown-item " href="#"><MdSpeaker className='fs-4 icon-color me-2' /> &nbsp; Sound bars</button></li>
                <li>
                  <hr className="dropdown-divider w-75 mx-auto"/>
                </li>
                <li><button className="dropdown-item " href="#"> <IoBagAddSharp className='fs-4 icon-color me-2' /> &nbsp; Accessories</button></li>
              </ul>

            </li>

            <li className="nav-item">
              <button className="nav-link "  href="#">Deals</button>
            </li>

            <li className="nav-item">
              <button className="nav-link" href="#">More</button>
            </li>
          </ul>

          <form className="d-flex mt-3 mt-lg-0 me-0 me-lg-2" role="search">

            <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" />

            {/* <button className="btn btn-outline-secondary rounded-pill" type="submit">
                <i class="fa-solid fa-magnifying-glass d-xl-none "></i> <span className='d-none d-xl-block'>Search</span>
            </button> */}
          </form>

          <div className="col-md-3 text-center header-buttons-div mt-4 mt-lg-0">
          <span className="me-2">
            <RegisterButton />
          </span>

          <span id="cart">
            <CartButton />
          </span>
        </div>

        </div>
      </div>
    </div>
  </nav>
  </div>
    
 </>
  )
}
