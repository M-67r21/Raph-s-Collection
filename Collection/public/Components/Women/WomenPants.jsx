import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Bandana from "../../Images/Women4.jpg"
import Flee from "../../Images/Women9.jpg"
import North from "../../Images/Women10.jpg"
import One from "../../Images/Women11.jpg"
import Two from "../../Images/Pant1.jpeg"
import Three from "../../Images/Pant2.jpeg"
import Four from "../../Images/Pant3.jpeg"
import Five from "../../Images/Pant4.jpeg"
import Six from "../../Images/Pant5.jpeg"
import Seven from "../../Images/Pant6.jpeg"
import Eight from "../../Images/Pant7.jpeg"
import Nine from "../../Images/Pant8.jpeg"


const WomenPants = () => {
  return (
    <Container 
        style={{
            paddingTop: '6rem',
            color:"#004aad", 
        }}
    >
        <h3 className='text-center'>Women Clothing Collection</h3>

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
                    <Link to="/womenshirts" style={{textDecoration:"none", color:"#004aad"}}>
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
                    <Link to="/womentops" style={{textDecoration:"none", color:"#004aad"}}>
                        Tops
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
                    <Link to="/womenjackets" style={{textDecoration:"none", color:"#004aad"}}>
                        Jackets
                    </Link>
                </Button>
            </div>
        </Row>

        <Row>
                                        
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

export default WomenPants