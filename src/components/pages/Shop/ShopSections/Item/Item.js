import React from 'react';
import '../../Shop.css'

export const Item = (props) => {
  return (

    <div className='py-2 px-1 px-md-2 p-0 m-0'>
      {/* <div className='Item border rounded border-secondary-subtle text-center col-5 col-md-3 col-lg-2 d-flex flex-column p-0 m-0 shadow bg-body-tertiary rounded my-2 mx-1 mx-md-3'> */}
        
      <div className="Item border rounded border-secondary-subtle text-center col-5 col-md-3 col-lg-2 d-flex flex-column p-0 m-0 shadow bg-body-tertiary rounded">
  
        <div className='row object-fit-cover m-0 p-0'> 
          <div className='Item_image p-0'> 
            <img src={props.image} alt="" className='object-fit-cover img-fluid rounded-top' />
            <span className={props.bestseller ? "d-block" : "d-none"} id="bestseller" > Best Seller </span>
  
          </div>
        </div>
  
        <div className='row py-2 px-0 my-2'>
        <h6 className='fs-5 fw-bolder Cinzel fs-smaller'> {props.name} </h6>
        <div className="light-bg-hr">
            <hr />
          </div>
        </div>
  
        <div className='row mb-2 px-0'>        
        <div className="py-2 d-flex flex-row column-gap-3 mx-auto justify-content-center">
           <h6 className="m-0 fw-bold fs-large align-top noto-serif">  {props.price} </h6>
           <h6 className="text-decoration-line-through fw-light align-bottom m-0 fs-smaller">  {props.old_price} </h6>
        </div>
  
        <div className='container'>
  
            <ul className='d-flex flex-row p-0 m-0 mt-2'>
  
             {props.colors.map((color,i) => { 
              return (
                <li key={i} className="d-inline-block mx-1">
                  
                    <span
                      className="Item_colors d-inline-block"
                      style={{ backgroundColor: color }}
                    ></span>
                    
                </li>
              );})} 
  
          </ul>
        </div>
  
        <div className="buy-now-btn-div justify-content-center px-0 my-3">
            <button type="button" class="btn btn-warning button1 light-bg-button zoom-effect px-4 text-nowrap fw-medium ">
                  Buy now
            </button>
        </div>
  
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
