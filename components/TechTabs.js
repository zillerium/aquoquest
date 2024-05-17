// TechTabs.js
import React from 'react';
import { Image, Tab, Row, Col, Nav } from 'react-bootstrap';

const TechTabs = () => {
  return (

    <Tab.Container id="tech-tabs" defaultActiveKey="first">
	     <Row className="justify-content-center">
        <Col sm={12} lg={8} className="tech-tab-nav-container">
          <Nav variant="pills" className="tech-tab-nav">
            {/* ... Nav Items ... */}
            <Nav.Item>
              <Nav.Link eventKey="first">Invariants</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Coverage Ratio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Concentrated Liquidity</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Aggregation</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
	   <Row className="justify-content-center">
        <Col sm={12} lg={8}>
          <Tab.Content className="tech-tab-content">
	  <Tab.Pane eventKey="first">
              <Row>
                <Col md={6}>
                  <Image src="invariants.png" fluid />
                </Col>
                <Col md={6}>
                  <h4>Invariants</h4>
	          <p>We improve on sum and product invariants extending Stableswap, Wombat and Platypus. </p>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
	  <Row>
                <Col md={6}>
                  <Image src="coverageratio.png" fluid />
                </Col>
                <Col md={6}>
                  <h4>Coverage Ratio</h4>
                  <p>Capital efficiency can be improved by using coverage ratios.</p>
                </Col>
              </Row>
	  {/* Content for DeFi Composition */}
            </Tab.Pane>
            <Tab.Pane eventKey="third">
	  <Row>
                <Col md={6}>
                  <Image src="concliquidity.png" fluid />
                </Col>
                <Col md={6}>
                  <h4>Concentrated Liquidity</h4>
                  <p>By using concentrated liquidity, we can further improve capital efficiency.</p>
                </Col>
              </Row>
              {/* Content for Optimization */}
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
	         <Row>
                <Col md={6}>
                  <Image src="aggregation.png" fluid />
                </Col>
                <Col md={6}>
                  <h4>Aggregation</h4>
                  <p>Asset aggregation and liquidity aggregation.</p>
                </Col>
              </Row>
              {/* Content for Simulations */}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};


export default TechTabs;

