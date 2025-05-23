import React, { useContext } from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap'
import { Button, Row } from 'react-bootstrap'
import Amiri from "../Images/Amiri.jpeg"
import Gucci from "../Images/Gucci.jpeg"
import { useCart } from './CartContext';


const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const [isDeleted, setIsDeleted] = useState(false);

    const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
    };
    const decrementQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
      };
    const deleteItem = () => setIsDeleted(true);

    const { cartItems } = useCart();



  return (
    <Container
        style={{
            paddingTop:"5rem",
            color:"#004aad",
            paddingBottom:"5rem",
        }}   
    > 
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                cartItems.map((item, idx) => (
                <div key={idx}>
                    <img src={item.image} alt={item.name} style={{ width: 400 }} />
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>Ksh {item.price}</p>
                </div>
                ))
            )}
            
        </div>

        
      {/* <Row>
      {!isDeleted && (
            <div 
              style={{
                  width:"75%",
                  display:"flex",
              }}
            >
            <img src={Amiri} alt="" 
            className="transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                    width: '50%',
                    height: '60vh',
                    objectFit: 'cover',
                    borderRadius: '12px'
                }}
            />

            <div
                style={{
                    display:"flex",
                    width:"30%",
                    justifyContent:"space-between",
                }}
            >
                <div 
                    style={{
                        textAlign:"start",
                        marginLeft:"1rem",
                    }}
                >
                    <h6
                        style={{
                            fontSize:"1rem",
                            fontWeight:"700",          
                        }}
                    >Amiri T-shirt</h6>
                    <p
                        style={{
                            fontSize:"1rem",
                            fontWeight:"700",
                            paddingTop:"12rem",          
                        }}
                    >Size: XXL</p>
                    <p
                        style={{
                            fontSize:"1rem",
                            fontWeight:"700",
                        }}
                    >Color: Grey</p>
                    <div
                        style={{
                            display:"flex",
                            justifyContent:"space-between",
                            width:"80%",
                            paddingTop:"2rem",
                        }}
                    >

                        <i className="bi bi-heart"></i>
                        <i className="bi bi-trash" onClick={deleteItem} style={{ cursor: 'pointer' }}></i>            
                    </div>
                </div>

                <div
                  style={{
                      textAlign:"end",
                      marginLeft:"2rem",
                  }}
                >
                  <p
                        style={{
                            fontSize:"1rem",
                            fontWeight:"700",
                            color:"#004aad",
                            
                        }}
                    >
                      Ksh 2,000
                  </p>
                  <div
                        style={{
                            display:"flex",
                            justifyContent:"space-between",
                            width:"100%",
                            paddingTop:"18rem",
                        }}
                    >

                        <i className="bi bi-plus-circle" onClick={incrementQuantity} style={{ cursor: 'pointer' }}></i>
                        <p style={{ fontSize:"1rem", fontWeight:"700" }}>{quantity}</p>
                        <i className="bi bi-dash-circle" onClick={decrementQuantity} style={{ cursor: 'pointer' }}></i>                        
                    </div>
                </div>
              </div>
            </div>
        )}

            <div  
              style={{
                  width:"25%",
                  display:"flex",
              }}
            >
              
              <div
                style={{
                    display:"flex",
                    width:"100%",
                }}
                >
                <div 
                    style={{
                    }}
                >
                    <h3>Summary</h3>
                    <div
                        style={{
                            display:"flex",
                            justifyContent:"space-between",
                            gap:"5rem",
                            paddingTop:"1rem",	
                        }}
                    >
                        <p
                            style={{
                                fontSize:"1rem",
                                fontWeight:"500",
                            }}
                        >Subtotal</p>
                        <p
                            style={{
                                fontSize:"1rem",
                                fontWeight:"500",
                            }}
                        >Ksh 2,000</p>
                    </div>
                    <div
                        style={{
                            display:"flex",
                            justifyContent:"space-between",
                            gap:"5rem",
                            paddingTop:"1rem",	
                        }}
                    >
                        <p
                            style={{
                                fontSize:"1rem",
                                fontWeight:"500",
                            }}
                        >Estimated Delivery</p>
                        <p
                            style={{
                                fontSize:"1rem",
                                fontWeight:"500",
                            }}
                        >Ksh500</p>
                    </div>
                    <hr />
                    <div
                        style={{
                            display:"flex",
                            justifyContent:"space-between",
                            gap:"5rem",
                        }}
                    >
                        <p
                            style={{
                                fontSize:"1rem",
                                fontWeight:"500",
                            }}
                        >Total</p>
                        <p
                            style={{
                                fontSize:"1rem",
                                fontWeight:"500",
                            }}
                        >Ksh8,000</p>
                    </div>
                    <div
                        style={{
                            textAlign:"center",
                            display:"grid",

                    }}
                    >
                        <Button
                            style={{
                                backgroundColor:"#004aad",
                                color:"white",
                                marginTop:"2rem",
                                borderRadius:".5rem",
                                padding:".5rem",
                                fontSize:"1rem",
                                fontWeight:"700",
                            }}
                        >
                            CheckOut Now
                        </Button>
                        <Button
                            href="https://paypal.com" target="_blank"
                            style={{
                                backgroundColor:"white",
                                border:".1rem solid #004aad",
                                color:"#004aad",
                                marginTop:"2rem",
                                borderRadius:".5rem",
                                padding:".5rem",
                                fontSize:"1rem",
                                fontWeight:"700",
                            }}
                        >
                           <i class="bi bi-paypal"></i> Paypal
                        </Button>
                    </div>
                </div>
                
              </div>
            </div>  
        
      </Row> */}
      
    </Container>
  )
}

export default Cart