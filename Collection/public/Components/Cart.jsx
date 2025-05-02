import React from 'react'

import { ArrowRight } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button, Row } from 'react-bootstrap'
import Amiri from "../Images/Amiri.jpeg"
import Gucci from "../Images/Gucci.jpeg"

const Cart = () => {
  return (
    <Container
        style={{
            paddingTop:"5rem",
            color:"#004aad",
        }}
    > 
            <h1> Your Cart</h1>
      <Row>
          <h3>T-Shirts</h3>

            <div 
              // className="col-md-4 col-sm-12 mt-2" 
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
                    <h6>Amiri T-shirts</h6>
                    <p
                        style={{
                            fontSize:"1rem",
                            fontWeight:"700",
                            paddingTop:"7rem",
                        }}
                    >Size: XXL</p>
                    <p
                        style={{
                            fontSize:"1rem",
                            fontWeight:"700",
                        }}
                    >Color: Grey</p>
                    <ArrowRight/>
                    
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
                </div>
              </div>
            </div>

            <div 
              // className="col-md-4 col-sm-12 mt-2" 
              style={{
                  width:"25%",
                  display:"flex",
                  alignItems:"center",
                  paddingTop:"1rem",
              }}
            >
              
              <div
                style={{
                    display:"flex",
                    alignItems:"center",
                    paddingTop:"1rem",
                    backgroundColor:"#f8f8f8",
                }}
            >
                <div 
                    style={{
                        textAlign:"start",
                    }}
                >
                    <h6>Amiri T-shirts</h6>
                    <p
                        style={{
                            fontSize:"1rem",
                        }}
                    >Classy tees for you.</p>
                    <p
                        style={{
                            fontSize:"1rem",
                            fontWeight:"700",
                            color:"#004aad",
                            
                        }}
                    >
                      Ksh 2,000
                    </p>
                </div>
                
              </div>
            </div>    
      </Row>

      <div 
        // className="col-md-6 col-sm-12 mt-2" 
        style={{
            width:"75%",
            display:"flex",
            alignItems:"center",
            paddingTop:"1rem",
        }}
      >
              <img src={Gucci} alt="" 
              className="transition-transform duration-300 ease-in-out hover:scale-110"
                  style={{
                      width: '100%',
                      height: '60vh',
                      objectFit: 'cover',
                      borderRadius: '12px'
                  }}
              />

              <div
                style={{
                    display:"flex",
                    alignItems:"center",
                    paddingTop:"1rem",
                }}
            >
                <div 
                    style={{
                        textAlign:"start",
                    }}
                >
                    <h6>Amiri T-shirts</h6>
                    <p
                        style={{
                            fontSize:"1rem",
                        }}
                    >Classy tees for you.</p>
                    <p
                        style={{
                            fontSize:"1rem",
                            fontWeight:"700",
                            color:"#004aad",
                            
                        }}
                    >
                      Ksh 2,000
                    </p>
                </div>
              </div>
      </div>


    </Container>
  )
}

export default Cart