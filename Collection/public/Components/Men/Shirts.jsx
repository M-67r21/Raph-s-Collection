import { Container, Col, Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import One from "../../Images/Flannel1.jpeg"
import Two from "../../Images/Two.jpeg"
import Three from "../../Images/Three.jpeg"
import Four from "../../Images/Four.jpeg"
import Shirt1 from "../../Images/Shirts1.jpg"
import Shirt2 from "../../Images/Shirts2.jpg"
import Shirt3 from "../../Images/Shirts3.jpg"
import Shirt4 from "../../Images/Shirts4.jpg"
import Shirt5 from "../../Images/Shirts5.jpg"
import Shirt6 from "../../Images/Shirts6.jpg"
import Shirt7 from "../../Images/Shirts7.jpg"
import Shirt8 from "../../Images/Shirts8.jpg"
import CategoryButtons from './CategoryButtons'
import { useCart } from '../CartContext'


const Shirts = () => {
    const { addToCart } = useCart();
    const products = [
        { id: 1, name: 'Lacoste', price: 2000, image: Shirt1, description: 'Classy shirt for you.' },
        { id: 2, name: 'Vintage', price: 2000, image: Shirt2, description: 'Classy shirt for you.' },
        { id: 3, name: 'Knot', price: 2000, image: Shirt3, description: 'Classy shirt for you.' },
        { id: 4, name: 'Zipped', price: 2000, image: Shirt4, description: 'Classy shirt for you.' },
        { id: 5, name: 'White', price: 2000, image: Shirt5, description: 'Classy shirt for you.' },
        { id: 6, name: 'Human', price: 2000, image: Shirt6, description: 'Classy shirt for you.' },
        { id: 7, name: 'Black Vintage', price: 2000, image: Shirt7, description: 'Classy shirt for you.' },
        { id: 8, name: 'Brown', price: 2000, image: Shirt8, description: 'Classy shirt for you.' },
        { id: 9, name: 'Black & Red Flannel', price: 2000, image: One, description: 'Classy shirt for you.' },
        { id: 10, name: 'Multi Color', price: 2000, image: Two, description: 'Classy shirt for you.' },
        { id: 11, name: 'Green', price: 2000, image: Three, description: 'Classy shirt for you.' },
        { id: 12, name: 'Green & White', price: 2000, image: Four, description: 'Classy shirt for you.' },
    ]
  return (
    <Container
        style={{
            paddingTop:"6rem", 
            color:"#004aad", 
        }}
    >
       <h3 className='text-center'>Men Clothing Collection</h3>

       <CategoryButtons />

       {Array.from({ length: Math.ceil(products.length / 3) }, (_, rowIndex) => (
            <Row key={rowIndex} className="mb-4">
            {products
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map(product => (
                <Col md={4} sm={12} key={product.id} className="mt-2">
                    <img
                    className="image-hover-zoom"
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

         {/* <Row>
                        
            <div className="col-md-4 col-sm-12 mt-2" >
            <img src={Shirt1} alt="" 
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
            <img src={Shirt2} alt="" 
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
            <img src={Shirt3} alt="" 
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
                
          <Row>
          
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
                
          <Row>
          
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
                  <img src={Shirt4} alt="" 
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
                  <img src={Shirt5} alt="" 
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
                
          <Row>
              
              <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Shirt6} alt="" 
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
                  <img src={Shirt7} alt="" 
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
                  <img src={Shirt8} alt="" 
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
                          
          </Row> */}

    </Container>
  )
}

export default Shirts