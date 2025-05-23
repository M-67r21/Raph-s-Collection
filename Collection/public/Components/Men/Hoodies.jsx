import React from 'react'
import { Container,Col, Row, Button } from 'react-bootstrap'
import { Link  } from 'react-router-dom'
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
import CategoryButtons from './CategoryButtons'

import { useCart } from '../CartContext';
const Hoodies = () => {
    const { addToCart } = useCart();
    const products = [
        { id: 1, name: 'LV', price: 2000, image: Hoodie1 },
        { id: 2, name: 'LV', price: 2000, image: Hoodie2 },
        { id: 3, name: 'Black & White', price: 2000, image: Hoodie3 },
        { id: 4, name: 'Celine', price: 2000, image: Hoodie4 },
        { id: 5, name: 'LV White', price: 2000, image: Hoodie5 },
        { id: 6, name: 'Essentials', price: 2000, image: Hoodie6 },
        { id: 7, name: 'Black', price: 2000, image: Hoodie7 },
        { id: 8, name: 'Black & Yellow', price: 2000, image: Hoodie8 },
        { id: 9, name: 'Love', price: 2000, image: Hoodie9 },
        { id: 10, name: 'Balenciaga', price: 2000, image: Hoodie10 },
        { id: 11, name: 'Corduroy', price: 2000, image: Hoodie11 },
        { id: 12, name: 'Givenchy', price: 2000, image: Hoodie12 },

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
                    <img src={Hoodie1} alt="" 
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
                    <img src={Hoodie2} alt="" 
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
                    <img src={Hoodie3} alt="" 
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
                <img src={Hoodie4} alt="" 
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
                <img src={Hoodie5} alt="" 
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
                <img src={Hoodie6} alt="" 
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
                <img src={Hoodie7} alt="" 
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
                <img src={Hoodie8} alt="" 
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
                <img src={Hoodie9} alt="" 
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
                <img src={Hoodie10} alt="" 
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
                <img src={Hoodie11} alt="" 
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
                <img src={Hoodie12} alt="" 
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

export default Hoodies