import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CategoryWomen = () => {
  const location = useLocation();

  const categories = [
    { label: 'Tops', path: '/womentops' },
    { label: 'Shirts', path: '/womenshirts' },
    { label: 'Pants', path: '/womenpants' },
    { label: 'Jackets', path: '/womenjackets' }
  ];


  return (
    <Row className='justify-content-center'>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "1rem",
        width: "80%",
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        {categories.map(({ label, path }) => {
          const active = location.pathname === path;

          return (
            <Link to={path} key={label} style={{ textDecoration: "none" }}>
              <Button
                style={{
                  backgroundColor: active ? "#004aad" : "#fff",
                  color: active ? "#fff" : "#004aad",
                  border: "1px solid #004aad",
                  width: "100px",
                  height: "2.5rem",
                  margin: "0.5rem",
                }}
              >
                {label}
              </Button>
            </Link>
          );
        })}
      </div>
    </Row>
  );
};

export default CategoryWomen;
