import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import ModalCheckOut from '../../Modal/ModalCheckOut';
import Swal from 'sweetalert2';

const ShopingCart = ({ setShopOpen, shopOpen }) => {

   const router = useRouter()
   const [path, setPath] = useState("")
   useEffect(() => {
      setPath(router.pathname)
   }, [router])

   const [counter, setCounter] = useState(0);
   const [counterr, setCounterr] = useState(0);
   const [counterrr, setCounterrr] = useState(0);
   const [productPrice, setProductPrice] = useState("3,000/-")
   const [modalShow, setModalShow] = React.useState(false);


   //increase counter
   const increase = () => {
      setCounter(count => count + 1);
   };

   //decrease counter
   const decrease = () => {
      setCounter(count => count - 1);
   };

 
   const onApprovalData = () => {
      setModalShow(false)
      Swal.fire(
         'Good job!',
         'Your Request has been submited for Approval',
         'success'
      )
    
   }
   return (
      <div className={shopOpen ? "sidebar__areas open" : "sidebar__areas"}>
         <div className="cartmini__area">
            <div className="cartmini__wrapper">
               <div className="cartmini__title">
                  <h4>Shopping cart</h4>
               </div>
               <div className="cartmini__close">
                  <button type="button" className="cartmini__close-btn" onClick={() => setShopOpen(false)}><i className="fas fa-times"></i></button>
               </div>
               <div className="cartmini__widget">
                  <div className="cartmini__inner">
                     <ul>
                        <li>
                           <div className="cartmini__content">
                              <h5><a href="#">Silver Package</a></h5>
                              <div className="product-quantity mt-10 mb-10">
                                 <span className="cart-minus" onClick={decrease}>-</span>
                                 <span className="cart-input">{counter}</span>
                                 <span className="cart-plus" onClick={increase}>+</span>
                              </div>
                              <div className="product__sm-price-wrapper">
                                 <span className="product__sm-price">{productPrice}</span>
                              </div>
                           </div>
                           <a href="#" className="cartmini__del"><i className="fas fa-times"></i></a>
                        </li>
                     </ul>
                  </div>
                  <div className="cartmini__checkout">
                     <div className="cartmini__checkout-title">
                        <h4>Subtotal:</h4>
                        <span>{productPrice}</span>
                     </div>
                  </div>
                  <div className='d-flex justify-content-center'>
                     {/* <Link href="/cart"><a className="e-btn e-btn-border mb-10 w-100"><span></span> view cart</a></Link> */}
                     <button className="e-btn" onClick={() => setModalShow(true)}>
                        Checkout
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <ModalCheckOut show={modalShow} onApproval={onApprovalData} />
      </div>

   )
}

export default ShopingCart;