// import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <Container>

        <Row>
          <div className="col-md-6 col-sm-12 mt-2"
           style={{paddingTop:"4rem",
            // backgroundColor:"red",	

           }}>
            <p 
              style={{
                color:"#004aad", 
                fontSize:"5.5rem", 
                fontWeight:"bold",
                letterSpacing: '3rem'
              }} 
            >RAPH</p>
            <p style={{color:"#004aad"}}>Get newsletter for upcoming product and best discount for our product </p>
            <div
              style={{
                display:"flex",
                justifyContent:"left",
                alignItems:"center",
                paddingTop:"1rem",
                gap:"4rem",
              }}
              >
              <input type="email" placeholder="Enter your email" style={{width:"40%", borderRadius:"1rem", padding:".3rem", borderColor:"#004aad"}}/>
              <button style={{ padding:"0.5rem 1rem", backgroundColor:"#004aad", color:"#fff", border:"none", borderRadius:"1rem", width:"40%"}}>Submit</button>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mt-2"
           style={{paddingTop:"4rem",	
            display:"flex",
            justifyContent:"space-between",
            alignItems:"start",
           }}>

            <div className='col-md-2 col-sm-12 mt-2' >
              <h4 style={{color:"#004aad"}}>Products</h4>
              <Link to="/tshirts" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>T-Shirts</p></Link>
              <Link to="/jackets" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>Jackets</p></Link>
              <Link to="/pants" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>Pants</p></Link>
              <Link to="/shirts" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>Shirts</p></Link>
              <Link to="/sweatshirts" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>SweatShirts</p></Link>
            </div>
            

            <div className='col-md-2 col-sm-12 mt-2' >
              <h4 style={{color:"#004aad"}}>Categories</h4>
              < Link to="/men" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>Men</p></Link>
              <Link to="/women" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>Women</p></Link>
              <Link to="/kids" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>Kids</p></Link>
              <Link to="/new" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>New & Featured</p></Link>
            </div>

            <div  className='col-md-2 col-sm-12 mt-2'>
              <h4 style={{color:"#004aad"}}>Social</h4>
              <Link to="/tshirts" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>Instagram</p></Link>
              <Link to="/jackets" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>Facebook</p></Link>
              <Link to="/pants" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>TikTok</p></Link>
              <Link to="/shirts" style={{textDecoration:"none"}}><p style={{color:"#004aad"}}>X</p></Link>
            </div>

           </div>
        </Row>

      </Container> 
      <div
            style={{
              marginTop:"3rem",
              paddingTop:".5rem",
              gap:"3rem",
              backgroundColor:"#004aad",
              color:"#fff",
            }}
          >
            <Container
              style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
              }}
            >           
                <div>
                  <p>&copy; Raph's Collection</p>
                </div>
                
                <div
                  style={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    gap:"4rem",
                  }}  
                >
                  <p>Terms & Condition</p>
                  <p>Privacy Policy</p>
                  <p>Cookie Policy</p>
                </div>
              
            </Container>
          </div>
    </footer>
  )
}

export default Footer