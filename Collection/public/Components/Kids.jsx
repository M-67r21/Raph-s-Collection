import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
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


const Kids = () => {
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

            </Row>
    
    </Container>
  )
}

export default Kids