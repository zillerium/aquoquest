import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Story = () => {
  return (
    <Container fluid>
      <Row >
        <Col md={7} className="fs-3">
          {/* Left side with larger text */}
          <h2 className="fw-bold">Making DEX Trade More Efficient</h2>
          <p>
	  AMMs lose pricing due to slippage. The Aquo solution enhances previous solutions from Uniswap v4 and Curve v1, to produce a lower slippage curve aimed at RWAs.


          </p>
        </Col>
        <Col md={5} className="fs-5">
          {/* Right side with smaller text */}
          <p>
	  Following the emergence of AMMs (in 2008 led by Chen and others) various invariants emerged based on convex optimization. But the solutions all had varying degrees of slippage and capital efficiency was suboptimal. 
	  Aquo introduces better methods to reduce slippage and make capital more efficient.

          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Story;

