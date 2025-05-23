import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import One from "../Images/Women1.jpg"
import Two from "../Images/Women2.jpg"
import Five from "../Images/Women5.jpg"
import Six from "../Images/Women6.jpg"
import Seven from "../Images/Women7.jpg"
import Eight from "../Images/Women8.jpg"
import Nine from "../Images/Women9.jpg"
import Ten from "../Images/Women10.jpg"
import Eleven from "../Images/Women11.jpg"
import Twelve from "../Images/Women12.jpg"
import Thirt from "../Images/Women13.jpg"
import Fort from "../Images/Women14.jpg"
import { useCart } from './CartContext';


const Man = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Blue Top', price: 2000, image: One, category: 'Tops'  },
    { id: 2, name: 'Black Top', price: 2000, image: Two, category: 'Tops'  },
    { id: 3, name: 'Tops', price: 2000, image: Five, category: 'Tops'  },
    { id: 4, name: 'Washed Jeans', price: 2000, image: Six, category: 'Pants' },
    { id: 5, name: 'Official Pants', price: 2000, image: Seven, category: 'Pants' },
    { id: 6, name: 'Cargo Pants', price: 2000, image: Eight, category: 'Pants' },
    { id: 7, name: 'Leather Jackets', price: 2000, image: Nine, category: 'Jackets' },
    { id: 8, name: 'Denim Jacket', price: 2000, image: Ten, category: 'Jackets' },
    { id: 9, name: 'Puff Jacket', price: 2000, image: Eleven,category: 'Jackets'  },
    { id: 10, name: 'Black Shirt', price: 2000, image: Twelve, category: 'Shirts' },
    { id: 11, name: 'Stripped Shirt', price: 2000, image: Thirt, category: 'Shirts' },
    { id: 12, name: 'White Shirt', price: 2000, image: Fort, category: 'Shirts' },
  ];

  const categories = [
    { name: 'Jackets', link: '/womentops' },
    { name: 'Shirts', link: '/womenshirts' },
    { name: 'Tops', link: '/womenpants' },
    { name: 'Pants', link: '/womenjackets' },
  ];

  return (
    <Container
      style={{
        paddingTop: '6rem',
        color: '#004aad',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Women's Collection
      </h2>

      {categories.map((category) => {
        const categoryProducts = products.filter((product) => product.category === category.name);
        return (
          categoryProducts.length > 0 && (
            <div key={category.name}>
              <h3>{category.name}</h3>
              {Array.from({ length: Math.ceil(categoryProducts.length / 3) }, (_, rowIndex) => (
                <Row key={rowIndex} className="mb-4">
                  {categoryProducts.slice(rowIndex * 3, rowIndex * 3 + 3).map((product) => (
                    <Col md={4} sm={12} key={product.id} className="mt-2">
                        <img
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
                            <p>{product.description}</p>
                            <p style={{ fontWeight: 700, color: '#004aad' }}>Ksh {product.price}</p>
                          </div>
                        
                          <div className="ms-auto"
                            style={{
                              alignContent: 'center',
                            }}
                          >
                            <Button
                              onClick={() => addToCart(product)}
                              style={{ backgroundColor: '#004aad', color: 'white', border: 'none' }}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                    </Col>
                  ))}
                </Row>
              ))}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
                <Button
                  style={{
                    backgroundColor: '#004aad',
                    border: 'none',
                    padding: '.5rem 2rem',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '700',
                  }}
                >
                  <Link to={category.link} style={{ textDecoration: 'none', color: 'white' }}>
                    View All
                  </Link>
                </Button>
              </div>
            </div>
          )
        );
      })}
    </Container>
  );
};

export default Man;