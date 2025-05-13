import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import Home from "../Images/Home.jpeg"
import Polo from "../Images/Blackpolo.jpeg"
import Jeans from "../Images/Bluejeans.jpeg"
import One from "../Images/Flannel1.jpeg"
import Two from "../Images/Two.jpeg"
import Three from "../Images/Three.jpeg"
import Four from "../Images/Four.jpeg"
import Gucci from "../Images/Gucci.jpeg"
import Gucci2 from "../Images/Gucci2.jpeg"
import Amiri from "../Images/Amiri.jpeg"
import Nike from "../Images/Nike.jpg"
import Vogue from "../Images/Vogue.jpeg"
import Charleston from "../Images/Charleston.jpeg"
import press from "../Images/Impress.jpeg"
import Men from "../Images/Men.jpg"
import Women from "../Images/Women.jpg"
import Kids from "../Images/Kids.jpg"
import { Link } from 'react-router-dom';
import './Style.css';



const Homepage = () => {
  return (
    <Container
        style={{
            paddingTop:"6rem",
            position: 'relative' 
        }}
    > 
         <Row>
            <div style={{ position: 'relative', width: '100%' }}>
            <img
                src={Home}
                alt=""
                style={{
                width: '100%',
                height: '85vh',
                objectFit: 'cover',
                borderRadius: '12px'
                }}
            />
            <div
                style={{
                position: 'absolute',
                width: '100%',
                top: '90%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#004aad',
                fontWeight: '400',
                fontSize: '1.5rem',
                padding: '1rem 2rem',
                textAlign: 'start',
                borderRadius: '8px'
                }}
            >
                <h1>Raph Shirt Collection</h1>
                <p>Text over the image, clean and centered.</p>
            </div>
            </div>
        </Row>

        <Row
            style={{
                marginTop:"2rem",
                color:"#004aad",
                padding:"2rem",
                textAlign:"center"
            }}
        >   
            <h1>New Collection</h1>
            <h6>Our latest collection , where classic and contemporary  styles  converge in perfect harmony</h6>
  
        </Row>

        <Row
                style={{
                    paddingTop:"1rem",
                    color:"#004aad",
                }}
            >
                <div className="col-md-4 col-sm-12 mt-2" >
                    <img src={Polo} alt="" 
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>

                </div>

                <div className="col-md-4 col-sm-12 mt-2">
                    <img src={Jeans} alt="" 
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-sm-12 mt-2">
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>
                </div>
        </Row>

        <Row
                style={{
                    paddingTop:"1rem",
                    color:"#004aad",
                }}
            >
                <div className="col-md-4 col-sm-12 mt-2">
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-sm-12 mt-2">
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-sm-12 mt-2">
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>
                </div>
        </Row>

        <Row
                style={{
                    paddingTop:"1rem",
                    color:"#004aad",
                }}
            >
                <div className="col-md-4 col-sm-12 mt-2">
                    <img src={Gucci} alt="" 
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-sm-12 mt-2">
                    <img src={Gucci2} alt="" 
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-sm-12 mt-2">
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>
                </div>
        </Row>

        <Row
                style={{
                    paddingTop:"1rem",
                    color:"#004aad",
                }}
            >
                <div className="col-md-4 col-sm-12 mt-2">
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-sm-12 mt-2">
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-sm-12 mt-2">
                    <img src={Charleston} alt="" 
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
                            <h6>Raph's Collection</h6>
                            <p
                                style={{
                                    fontSize:".75rem",
                                }}
                            >Text over the image, clean and centered.</p>
                        </div>
                        <div
                            style={{
                                textAlign:"end",
                                marginLeft:"auto",
                            }}
                        >
                            <p
                                style={{
                                    fontSize:"1rem",
                                    fontWeight:"700",
                                    color:"#004aad",
                                   
                                }}
                            >Ksh 2,000</p>
                        </div>
                    </div>
                </div>
        </Row>

        <div
            style={{
                marginTop:"3rem",
                color:"#004aad",
                
                textAlign:"center"
            }}
        >
            <img 
                src= {press} alt="" 
                style={{
                    width: '100%',
                    height: '70vh',
                    objectFit: 'cover',
                    borderRadius: '12px'
                    }}
                
            />
            <h2
                style={{
                    paddingTop:"2rem",
                }}
            >Wear to Impress</h2>
            <p>A sympony of exquisite designs tailored for your unforgettable moments</p>
            <Button 
                variant="outline-secondary"
                style={{
                    marginTop:"1rem",
                    color:"#004aad",
                    fontWeight:"700",
                }}> 
                    <Link to="/new" style={{ textDecoration: 'none', color: '#004aad' }}>
                        See Details
                    </Link>  
                </Button>
        </div>

        <Row
                style={{
                    paddingTop:"1rem",
                    color:"#004aad",
                }}
            >

                    <div className="col-md-4 col-sm-12 mt-2">
                        <Link to="/men" style={{ textDecoration: 'none', color: '#004aad' }}>
                            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                            <img
                                src={Men}
                                alt=""
                                style={{
                                width: '100%',
                                height: '60vh',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                }}
                            />

                            <div
                                style={{
                                position: 'absolute',
                                bottom: '1rem',
                                left: '1rem',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '2rem',
                                background: 'rgba(0, 0, 0, 0.4)', // optional for better readability
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                }}
                            >
                                Men
                            </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12 mt-2">
                        <Link to="/women" style={{ textDecoration: 'none', color: '#004aad' }}>
                            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                            <img
                                src={Women}
                                alt=""
                                style={{
                                width: '100%',
                                height: '60vh',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                }}
                            />

                            <div
                                style={{
                                position: 'absolute',
                                bottom: '1rem',
                                left: '1rem',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '2rem',
                                background: 'rgba(0, 0, 0, 0.4)', // optional for better readability
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                }}
                            >
                                Women
                            </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12 mt-2">
                        <Link to="/kids" style={{ textDecoration: 'none', color: '#004aad' }}>
                            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                            <img
                                src={Kids}
                                alt=""
                                style={{
                                width: '100%',
                                height: '60vh',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                }}
                            />

                            <div
                                style={{
                                position: 'absolute',
                                bottom: '1rem',
                                left: '1rem',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '2rem',
                                background: 'rgba(0, 0, 0, 0.4)', // optional for better readability
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                }}
                            >
                                Kids
                            </div>
                            </div>
                        </Link>
                    </div>
        </Row>

    </Container>
    
  )
}

export default Homepage