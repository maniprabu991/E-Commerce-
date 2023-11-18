
import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/Home.css';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


const Home = () => {
  return (
    
      <div className="marquee-container">
      <h1 className="scrolling-text">Welcome to our E-commerce Store!</h1>
    
      <p class="we">WELCOME E-COMMERCE SHOP!</p>
    
      
      <p class="text1">Discover a world of convenience and endless possibilities. Shop with confidence, knowing you're just a click away from a seamless shopping experience.</p>
      <p class="text1">Explore our curated collections, find the latest trends, and enjoy exclusive deals tailored just for you.</p>
      <p class="text1">Whether you're looking for fashion, electronics, home essentials, or more, we've got something for everyone.</p>
      <p class="text1">Start browsing and let the shopping adventure begin!</p>

      <p class="we">LIST OF CATEGORIES</p>
      
      

      <ProductList />

      <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Digital Products</div>
          Sales of digital goods and services, such as software, 
          mobile apps, e-books, music, and online courses.
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Retail</div>
          This category includes the online sale of physical goods directly to consumers. 
          It's a broad category covering everything from clothing and electronics to home goods and groceries.
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Services</div>
          Involves the online sale of services rather than physical products. 
          Examples include travel and accommodation booking, online learning platforms, and freelance services.
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>
      
      

    </div>




  );
};

export default Home;
