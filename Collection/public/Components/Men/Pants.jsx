import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Baggy from "../../Images/Baggy.jpg"
import Black from "../../Images/Blackjeans.jpg"
import Ragged from "../../Images/Ragged.jpg"
import One from "../../Images/Pants1.jpg"
import Two from "../../Images/Pants2.jpg"
import Three from "../../Images/Pants3.jpg"
import Four from "../../Images/Pants4.jpg"
import Five from "../../Images/Pants5.jpg"
import Six from "../../Images/Pants6.jpg"
import Seven from "../../Images/Pants7.jpg"
import Eight from "../../Images/Pants8.jpg"
import Nine from "../../Images/Pants9.jpg"



const Pants = () => {
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
                    Pants
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
                    <Link to="/menshirts" style={{textDecoration:"none", color:"#004aad"}}>
                        Shirts
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

export default Pants