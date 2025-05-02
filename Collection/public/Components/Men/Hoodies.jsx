import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Hoodie1 from "../../Images/Hoodie1.jpg"
import Hoodie2 from "../../Images/Hoodie2.jpg"
import Hoodie3 from "../../Images/Hoodie3.jpg"
import Hoodie4 from "../../Images/Hoodie4.jpg"
import Hoodie5 from "../../Images/Hoodie5.jpg"  
import Hoodie6 from "../../Images/Hoodie6.jpg"
import Hoodie7 from "../../Images/Hoodie7.jpg"
import Hoodie8 from "../../Images/Hoodie8.jpg"
import Hoodie9 from "../../Images/Hoodie9.jpg"
import Hoodie10 from "../../Images/Hoodie10.jpg"
import Hoodie11 from "../../Images/Hoodie11.jpg"
import Hoodie12 from "../../Images/Hoodie12.jpg"

const Hoodies = () => {
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
                    Hoodies
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
                    <Link to="/menjackets" style={{textDecoration:"none", color:"#004aad"}}>
                        Jackets
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
                    <Link to="/menpants" style={{textDecoration:"none", color:"#004aad"}}>
                        Pants
                    </Link>
                </Button>
            </div>
        </Row>

        <Row>
                            
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
                                            
        </Row>
                    
        <Row>
        
            <div className="col-md-4 col-sm-12 mt-2" >
                <img src={Hoodie4} alt="" 
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
                <img src={Hoodie5} alt="" 
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
                <img src={Hoodie6} alt="" 
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
                <img src={Hoodie7} alt="" 
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
                <img src={Hoodie8} alt="" 
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
                <img src={Hoodie9} alt="" 
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
                <img src={Hoodie10} alt="" 
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
                <img src={Hoodie11} alt="" 
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
                <img src={Hoodie12} alt="" 
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

export default Hoodies