import React from 'react'

import Pants from './Men/Pants'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Amiri from "../Images/Amiri.jpeg"
import Gucci from "../Images/Gucci.jpeg"
import Polo from "../Images/Blackpolo.jpeg"
import Baggy from "../Images/Baggy.jpg"
import Black from "../Images/Blackjeans.jpg"
import Ragged from "../Images/Ragged.jpg"
import North from "../Images/North.jpg"
import Flee from "../Images/Flee.jpg"
import Bandana from "../Images/Bandana.jpg"
import Hoodie1 from "../Images/Hoodie1.jpg"
import Hoodie2 from "../Images/Hoodie2.jpg"
import Hoodie3 from "../Images/Hoodie3.jpg"
import Shirt6 from "../Images/Shirts6.jpg"
import Shirt7 from "../Images/Shirts7.jpg"
import Shirt8 from "../Images/Shirts8.jpg"
const Man = () => {
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
          Men's Collection
        </h2>
        
        <Row>
            <h3>T-Shirts</h3>

              <div className="col-md-4 col-sm-12 mt-2" >
              <img src={Amiri} alt="" 
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
                <img src={Polo} alt="" 
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
                      <Link to="/mentshirts" style={{ textDecoration: 'none', color: 'white' }}>
                        View All
                      </Link>    
                  </Button>
              </div>
        </Row>

        <Row>
            <h3>Pants</h3>

              <div className="col-md-4 col-sm-12 mt-2" >
              <img src={Baggy} alt="" 
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
                <img src={Black} alt="" 
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
                <img src={Ragged} alt="" 
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
                      <Link to="/menpants" style={{ textDecoration: 'none', color: 'white' }}>
                        View All
                      </Link>    
                  </Button>
              </div>
        </Row>

        <Row>
            <h3>Jackets</h3>

              <div className="col-md-4 col-sm-12 mt-2" >
              <img src={North} alt="" 
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
                <img src={Flee} alt="" 
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
                <img src={Bandana} alt="" 
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
                      <Link to="/menjackets" style={{ textDecoration: 'none', color: 'white' }}>
                        View All
                      </Link>    
                  </Button>
              </div>
        </Row>

        <Row>
        <   h3>Hoodies</h3>                   
            <div className="col-md-4 col-sm-12 mt-2" >
            <img src={Hoodie1} alt="" 
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
            <img src={Hoodie2} alt="" 
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
            <img src={Hoodie3} alt="" 
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
                      <Link to="/menhoodies" style={{ textDecoration: 'none', color: 'white' }}>
                        View All
                      </Link>    
                  </Button>
              </div>                            
        </Row>

        <Row>
            <h3>Shirts</h3>               

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
                      <Link to="/menshirts" style={{ textDecoration: 'none', color: 'white' }}>
                        View All
                      </Link>    
                  </Button>
              </div> 
                                            
        </Row>

    </Container>
  )
}

export default Man