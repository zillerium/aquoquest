// components/VideoManager2.js

import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';

const textBoxesData = [
  {
    title: "RWA Focus",
    text: "We focus on RWA trading."
  },
  {
    title: "AMM Curves",
    text: "We allow a single liquidity pool asset (not a pair)."
  },
  {
    title: "Coverage Ratio",
    text: "We optimize via a coverage ratio (allowing more trade)."
  },
  {
    title: "Cross-Chain",
    text: "Available via Arbitrum and others."
  },
  {
    title: "Innovative",
    text: "Innovation based solutions."
  }
];


// Array of all text boxes data

// Prepare the slides with three text boxes each
const slidesData = textBoxesData.reduce((acc, curr, idx, src) => {
  if (idx % 3 === 0) {
    acc.push(src.slice(idx, idx + 3).concat(src.slice(0, Math.max(0, 3 - (src.length - idx)))));
  }
  return acc;
}, []);

const VideoManager2 = () => {
  return (
    <Container>
      <Row className="align-items-start mt-5">
        <Col md={6}>
          <VideoPlayer />
        </Col>
        <Col md={6}>
          <h1>The Main Features</h1>
          <p>
	    Aimed at RWA AMM transaction, to make the AMMs more usable.

          </p>
          <Carousel indicators={false} interval={3000}>
            {slidesData.map((slide, idx) => (
              <Carousel.Item key={idx}>
                <Row>
                  {slide.map((box, idx) => (
                    <Col key={idx} md={4}>
                      <div className="p-4 h-100 d-flex flex-column">
			    <h5 style={{ color: 'blue' }}>{box.title}</h5>
                        <p >{box.text}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoManager2;

