import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import One from "../Images/Kids1.jpg"
import Three from "../Images/Kids3.jpg"
import Four from "../Images/Kids4.jpg"
import Two from "../Images/Kids2.jpg"
import Five from "../Images/Kids5.jpg"
import Six from "../Images/Kids6.jpg"
import Seven from "../Images/Kids7.jpg"
import Eight from "../Images/Kids8.jpg"
import Nine from "../Images/Kids9.jpg"

import { useCart } from './CartContext';

const Kids = () => {
  const { addToCart } = useCart();
  
   const products = [
    { id: 1, name: 'Pink Dress', price: 2000, image: One },
    { id: 2, name: 'Black & Yellow', price: 2000, image: Two },
    { id: 3, name: 'Jeans Dungaree', price: 2000, image: Three },
    { id: 4, name: 'Animal Print', price: 2000, image: Four },
    { id: 5, name: 'Corduroy', price: 2000, image: Five },
    { id: 6, name: 'Suit', price: 2000, image: Six },
    { id: 7, name: 'Mickey', price: 2000, image: Seven },
    { id: 8, name: 'Corduroy Dungaree', price: 2000, image: Eight },
    { id: 9, name: 'African Print', price: 2000, image: Nine }
   ]

  return (
    <Container
            style={{
                paddingTop:"6rem", 
                color:"#004aad", 
            }}
        > 
            <h2
              style={{
                fontSize:"2rem",
                fontWeight:"700",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              Kid's Collection
            </h2>
            {Array.from({ length: Math.ceil(products.length / 3) }, (_, rowIndex) => (
              <Row key={rowIndex} className="mb-4">
              {products
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map(product => (
                  <Col md={4} sm={12} key={product.id} className="mt-2">
                      <img
                      src={product.image}
                      alt={product.name}
                      style={{
                          width: '100%',
                          height: '60vh',
                          objectFit: 'cover',
                          borderRadius: '12px',
                      }}
                      />
                      <div className="pt-3 d-flex">
                      <div>
                          <h6>{product.name}</h6>
                          <p style={{ fontWeight: 700, color: '#004aad' }}>Ksh {product.price}</p>
                      </div>
                      <div className="ms-auto">
                          <Button
                          onClick={() => addToCart(product)}
                          style={{ backgroundColor: '#004aad', color: 'white' }}
                          >
                          Add to Cart
                          </Button>
                      </div>
                      </div>
                  </Col>
                  ))}
              </Row>
          ))}
            
            {/* <Row
              style={{
                paddingTop:"3rem", 
              }}
            > 
                  <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Six} alt="" 
                    className="image-hover-zoom"
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                    <img src={Seven} alt="" 
                    className="image-hover-zoom"
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                    <img src={Eight} alt="" 
                    className="image-hover-zoom"
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
    
                
            </Row>
    
            <Row
              style={{
                paddingTop:"3rem", 
              }}
            >    
                  <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Nine} alt="" 
                  className="image-hover-zoom"
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
                          <h6>Baggy Pants</h6>
                          <p
                              style={{
                                  fontSize:"1rem",
                              }}
                          >Classy pants for you.</p>
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                    <img src={One} alt="" 
                    className="image-hover-zoom"
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
                          <h6>Black Pants</h6>
                          <p
                              style={{
                                  fontSize:"1rem",
                              }}
                          >Classy pants for you.</p>
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                    <img src={Two} alt="" 
                    className="image-hover-zoom"
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
                          <h6>Ragged Pants</h6>
                          <p
                              style={{
                                  fontSize:"1rem",
                              }}
                          >Classy pants for you.</p>
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                
            </Row>
    
            <Row
              style={{
                paddingTop:"3rem", 
              }}
            >    
                  <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Three} alt="" 
                  className="image-hover-zoom"
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                    <img src={Four} alt="" 
                    className="image-hover-zoom"
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                    <img src={One} alt="" 
                    className="image-hover-zoom"
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                
            </Row>

            <Row
              style={{
                paddingTop:"3rem", 
              }}
            >    
                  <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={One} alt="" 
                  className="image-hover-zoom"
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                    <img src={Two} alt="" 
                    className="image-hover-zoom"
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                    <img src={Five} alt="" 
                    className="image-hover-zoom"
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
                      <div
                          style={{
                              textAlign:"end",
                              marginLeft:"auto",
                          }}
                      >
    
                        <Button>
                          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                            Add to Cart
                          </Link>    
                        </Button>
                        
                      </div>
                    </div>
                  </div>

            </Row> */}
    
    </Container>
  )
}

export default Kids