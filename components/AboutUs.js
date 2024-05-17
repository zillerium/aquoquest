import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">About Us</h1>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-3">
          <Image src="/optimization-header.png" alt="Optimization" thumbnail />
        </Col>
        <Col md={6}>
          <h2>Who we are?</h2>
          <p>
	    We are specialists in the DeFi, optimization, blockchains, capital efficiency, slippage, AMMs, and reinforcement learning (AI).
          </p>

          <h2>What we do?</h2>
          <p>
	  We wok to solve problems in DeFi (an emerging sector) and this involves a new protocol to improve AMMs and improve liquidity which is essential to make DeFi a more effective market segment attracting capital, users, and solving business problems.
          </p>

          <h2>Core Values</h2>
          <p>
	  We believe that optimization will make financial systems more effective which will widen their use, lowering costs to users, and widening access.

          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
