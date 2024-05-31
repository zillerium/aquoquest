import React, { useState } from 'react';
import { Container, Row, Col, Image, Accordion, Card } from 'react-bootstrap';
import { FiChevronDown } from 'react-icons/fi'; // Assuming you're using react-icons for the chevron icon

const Tokenization = () => {
  // State to track the expansion of each list item
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the expansion state
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className="my-5">
      <Row className="align-items-start">
        <Col md={12}>
          <h2> Tokenizations</h2>
          <Image src="/tokenizeplatforms.png" alt="Tokenization" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Tokenization;

