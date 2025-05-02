import { Container, Row, Button} from 'react-bootstrap'
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


const Shirts = () => {
  return (
    <Container
        style={{
            paddingTop:"6rem", 
            color:"#004aad", 
        }}
    >
       <h3 className='text-center'>Men Clothing Collection</h3>

       <Row className='justify-content-center'>
            <div
                style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-around",
                    padding:"1rem",
                    width:"80%",
                    alignItems:"center",
                    flexWrap:"wrap",
                }}
            >
                <Button className=''
                    style={{
                        backgroundColor:"#004aad",
                        color:"#fff",
                        border:"1px solid #004aad",
                        width:"100px",
                        height:"2.5rem",
                        margin:"0.5rem",
                    }}  
                >
                    Shirts
                </Button>
                <Button className=''
                    style={{
                        backgroundColor:"#fff",
                        color:"#004aad",
                        border:"1px solid #004aad",
                        width:"100px",
                        height:"2.5rem",
                        margin:"0.5rem",
                    }}  
                >
                    <Link to="/menpants" style={{textDecoration:"none", color:"#004aad"}}>
                      Pants
                    </Link>
                </Button>
                <Button className=''
                    style={{
                        backgroundColor:"#fff",
                        color:"#004aad",
                        border:"1px solid #004aad",
                        width:"100px",
                        height:"2.5rem",
                        margin:"0.5rem",
                    }}
                >
                    <Link to="/mentshirts" style={{textDecoration:"none", color:"#004aad"}}>
                        T-Shirts
                    </Link>
                </Button>
                <Button className=''
                    style={{
                        backgroundColor:"#fff",
                        color:"#004aad",
                        border:"1px solid #004aad",
                        width:"100px",
                        height:"2.5rem",
                        margin:"0.5rem",
                    }}
                >
                    <Link to="/menhoodies" style={{textDecoration:"none", color:"#004aad"}}>
                        Hoodies
                    </Link>
                </Button>
                <Button className=''
                    style={{
                        backgroundColor:"#fff",
                        color:"#004aad",
                        border:"1px solid #004aad",
                        width:"100px",
                        height:"2.5rem",
                        margin:"0.5rem",
                    }}
                >
                    <Link to="/menjackets" style={{textDecoration:"none", color:"#004aad"}}>
                        Jackets
                    </Link>
                </Button>
            </div>
        </Row>

         <Row>
                        
            <div className="col-md-4 col-sm-12 mt-2" >
            <img src={Shirt1} alt="" 
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
            <img src={Shirt2} alt="" 
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
            <img src={Shirt3} alt="" 
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
                                        
          </Row>
                
          <Row>
          
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
                  <img src={Three} alt="" 
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
                          
          </Row>
                
          <Row>
          
              <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Four} alt="" 
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
                  <img src={Shirt4} alt="" 
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
                  <img src={Shirt5} alt="" 
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
                      
          </Row>
                
          <Row>
              
              <div className="col-md-4 col-sm-12 mt-2" >
                  <img src={Shirt6} alt="" 
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
                  <img src={Shirt7} alt="" 
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
                  <img src={Shirt8} alt="" 
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
                          
          </Row>
    </Container>
  )
}

export default Shirts