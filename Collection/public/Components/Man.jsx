import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Amiri from '../Images/Amiri.jpeg';
import Gucci from '../Images/Gucci.jpeg';
import Polo from '../Images/Blackpolo.jpeg';
import Baggy from '../Images/Baggy.jpg';
import Black from '../Images/Blackjeans.jpg';
import Ragged from '../Images/Ragged.jpg';
import North from '../Images/North.jpg';
import Flee from '../Images/Flee.jpg';
import Bandana from '../Images/Bandana.jpg';
import Hoodie1 from '../Images/Hoodie1.jpg';
import Hoodie2 from '../Images/Hoodie2.jpg';
import Hoodie3 from '../Images/Hoodie3.jpg';
import Shirt6 from '../Images/Shirts6.jpg';
import Shirt7 from '../Images/Shirts7.jpg';
import Shirt8 from '../Images/Shirts8.jpg';
import { useCart } from './CartContext';

const Man = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Amiri T-shirts', price: 2000, image: Amiri,  description: 'Classy tees for you.', category: 'T-Shirts' },
    { id: 2, name: 'Gucci T-shirt', price: 2500, image: Gucci,  description: 'Classy tees for you.', category: 'T-Shirts' },
    { id: 3, name: 'Black Polo', price: 2200, image: Polo,  description: 'Classy tees for you.', category: 'T-Shirts' },
    { id: 4, name: 'Baggy Pants', price: 2000, image: Baggy,  description: 'Classy pants for you.', category: 'Pants' },
    { id: 5, name: 'Black Pants', price: 2000, image: Black,  description: 'Classy pants for you.', category: 'Pants' },
    { id: 6, name: 'Ragged Pants', price: 2000, image: Ragged,  description: 'Classy pants for you.', category: 'Pants' },
    { id: 7, name: 'North Jacket', price: 3000, image: North,  description: 'Stylish jackets for you.', category: 'Jackets' },
    { id: 8, name: 'Flee Jacket', price: 3500, image: Flee,  description: 'Stylish jackets for you.', category: 'Jackets' },
    { id: 9, name: 'Bandana Jacket', price: 4000, image: Bandana,  description: 'Stylish jackets for you.', category: 'Jackets' },
    { id: 10, name: 'Hoodie 1', price: 2500, image: Hoodie1,  description: 'Cozy hoodies for you.', category: 'Hoodies' },
    { id: 11, name: 'Hoodie 2', price: 2500, image: Hoodie2,  description: 'Cozy hoodies for you.', category: 'Hoodies' },
    { id: 12, name: 'Hoodie 3', price: 2500, image: Hoodie3,  description: 'Cozy hoodies for you.', category: 'Hoodies' },
    { id: 13, name: 'Shirt 6', price: 1800, image: Shirt6,  description: 'Elegant shirts for you.', category: 'Shirts' },
    { id: 14, name: 'Shirt 7', price: 1800, image: Shirt7,  description: 'Elegant shirts for you.', category: 'Shirts' },
    { id: 15, name: 'Shirt 8', price: 1800, image: Shirt8,  description: 'Elegant shirts for you.', category: 'Shirts' },
  ];

  const categories = [
    { name: 'T-Shirts', link: '/mentshirts' },
    { name: 'Pants', link: '/menpants' },
    { name: 'Jackets', link: '/menjackets' },
    { name: 'Hoodies', link: '/menhoodies' },
    { name: 'Shirts', link: '/menshirts' },
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
        Men's Collection
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