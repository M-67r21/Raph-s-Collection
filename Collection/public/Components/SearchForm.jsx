import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Term:', searchTerm);
    // You can navigate or filter based on `searchTerm` here
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-success" type="submit">Search</Button>
    </Form>
  );
}

export default SearchForm;
