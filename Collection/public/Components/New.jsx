import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
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





const New = () => {
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
                textAlign:"center",
                paddingTop:"2rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              New & Featured Clothing Collection
            </h2>
            
            <Row
              style={{
                paddingTop:"3rem", 
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

            </Row>
    
    </Container>
  )
}

export default New