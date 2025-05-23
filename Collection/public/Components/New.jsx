import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pants1 from "../Images/Pants1.jpg"
import Shirts1 from "../Images/Shirts1.jpg"
import Women1 from "../Images/Women1.jpg"
import Two from "../Images/Kids2.jpg"
import Jacket1 from "../Images/Jacket1.jpg"
import Women11 from "../Images/Women11.jpg"
import North from "../Images/North.jpg"
import Shirts2 from "../Images/Shirts2.jpg"
import Jacket6 from "../Images/Jacket6.jpg"
import Vogue from "../Images/Vogue.jpeg"
import Women14 from "../Images/Women14.jpg"
import Pants2 from "../Images/Pants2.jpg"
import Six from "../Images/Kids6.jpg"
import Amiri from "../Images/Amiri.jpeg"
import Nike from "../Images/Nike.jpg"


import { useCart } from './CartContext';


const New = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Pants', price: 2000, image: Pants1 },
    { id: 2, name: 'Shirts', price: 2000, image: Shirts1 },
    { id: 3, name: 'Women1', price: 2000, image: Women1 },
    { id: 4, name: 'Two', price: 2000, image: Two },
    { id: 5, name: 'Jacket1', price: 2000, image: Jacket1 },
    { id: 6, name: 'Women11', price: 2000, image: Women11 },
    { id: 7, name: 'North', price: 2000, image: North },
    { id: 8, name: 'Shirts2', price: 2000, image: Shirts2 },
    { id: 9, name: 'Jacket6', price: 2000, image: Jacket6 },
    { id: 10, name: 'Vogue', price: 2000, image: Vogue },
    { id: 11, name: 'Women14', price: 2000, image: Women14 },
    { id: 12, name: 'Pants2', price: 2000, image: Pants2 },
    { id: 13, name: 'Six', price: 2000, image: Six },
    { id: 14, name: 'Amiri', price: 2000, image: Amiri },
    { id: 15, name: 'Nike', price: 2000, image: Nike },
    

  ]


  return (
    <Container
            style={{
                paddingTop:"5rem", 
                color:"#004aad", 
            }}
        > 
            <h2
              style={{
                fontSize:"2rem",
                fontWeight:"700",
                textAlign:"center",
                paddingTop:"2rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              New & Featured Clothing Collection
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
                              <p>Classy outfit for you.</p>
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
                paddingTop:"2.5rem", 
              }}
            > 
                  <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Pants1} alt="" 
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
                    <img src={Shirts1} alt="" 
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
                    <img src={Women1} alt="" 
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
                  <img src={Jacket1} alt="" 
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
                    <img src={Women11} alt="" 
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
                  <img src={North} alt="" 
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
                    <img src={Shirts2} alt="" 
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
                    <img src={Jacket6} alt="" 
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
                  <img src={Vogue} alt="" 
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
                    <img src={Women14} alt="" 
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
                    <img src={Pants2} alt="" 
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
                    <img src={Amiri} alt="" 
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
                    <img src={Nike} alt="" 
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

export default New