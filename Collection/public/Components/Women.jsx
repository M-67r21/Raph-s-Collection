import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import One from "../Images/Women1.jpg"
import Two from "../Images/Women2.jpg"
import Five from "../Images/Women5.jpg"
import Six from "../Images/Women6.jpg"
import Seven from "../Images/Women7.jpg"
import Eight from "../Images/Women8.jpg"
import Nine from "../Images/Women9.jpg"
import Ten from "../Images/Women10.jpg"
import Eleven from "../Images/Women11.jpg"
import Twelve from "../Images/Women12.jpg"
import Thirt from "../Images/Women13.jpg"
import Fort from "../Images/Women14.jpg"


const Women = () => {
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
                marginBottom:"2rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              Women's Collection
            </h2>
            
            <Row>
                <h3>Tops</h3>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Six} alt="" 
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
    
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                      <Button
                          style={{
                              marginTop:"2rem",
                              backgroundColor:"#004aad",
                              border:"none",
                              padding:".5rem 2rem",
                              color:"white",
                              fontSize:"1rem",
                              fontWeight:"700",
                          }}
                      >
                          <Link to="/womentops" style={{ textDecoration: 'none', color: 'white' }}>
                            View All
                          </Link>    
                      </Button>
                  </div>
            </Row>
    
            <Row>
                <h3>Pants</h3>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Nine} alt="" 
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
                    <img src={Ten} alt="" 
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
                    <img src={Eleven} alt="" 
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
                
                  
    
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                      <Button
                          style={{
                              marginTop:"2rem",
                              backgroundColor:"#004aad",
                              border:"none",
                              padding:".5rem 2rem",
                              color:"white",
                              fontSize:"1rem",
                              fontWeight:"700",
                          }}
                      >
                          <Link to="/womenpants" style={{ textDecoration: 'none', color: 'white' }}>
                            View All
                          </Link>    
                      </Button>
                  </div>
            </Row>
    
            <Row>
                <h3>Jackets</h3>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Twelve} alt="" 
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
                    <img src={Thirt} alt="" 
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
                    <img src={Fort} alt="" 
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
                
                  
    
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                      <Button
                          style={{
                              marginTop:"2rem",
                              backgroundColor:"#004aad",
                              border:"none",
                              padding:".5rem 2rem",
                              color:"white",
                              fontSize:"1rem",
                              fontWeight:"700",
                          }}
                      >
                          <Link to="/womenjackets" style={{ textDecoration: 'none', color: 'white' }}>
                            View All
                          </Link>    
                      </Button>
                  </div>
            </Row>

            <Row>
                <h3>Shirts</h3>
    
                  <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={One} alt="" 
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
                
                  
    
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                      <Button
                          style={{
                              marginTop:"2rem",
                              backgroundColor:"#004aad",
                              border:"none",
                              padding:".5rem 2rem",
                              color:"white",
                              fontSize:"1rem",
                              fontWeight:"700",
                          }}
                      >
                          <Link to="/womenshirts" style={{ textDecoration: 'none', color: 'white' }}>
                            View All
                          </Link>    
                      </Button>
                  </div>
            </Row>
    
    </Container>
  )
}

export default Women