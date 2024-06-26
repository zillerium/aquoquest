import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Image from 'next/image';

const Pitch = () => {
  const openPdf = () => {
    // Navigate the user to the pitch deck URL
    window.location.href = './pitchdeck.pdf';
  };

  const openWpPdf = () => {
    // Navigate the user to the pitch deck URL
    window.location.href = './aquowp.pdf';
  };
  const openPptx = () => {
    // Navigate the user to the pitch deck URL
    window.location.href = './aquopitchdeck.pptx';
  };
  return (
    <div className="bannerTitle">
      <Image
        src="/pitchdeck.png" // Path to your image file
        alt="Background"
        layout="fill" // This will make the image fill the div
        objectFit="cover" // This will cover the entire space without stretching the image
        quality={100}
      />
      <Container className="position-relative" style={{ zIndex: 10 }}>
        <h1 className="text-white">Aquo Whitepaper</h1>
        <p className="text-white-50">Aquo Optimization</p>
        <Button variant="primary" onClick={openWpPdf} className="me-2">White Paper</Button>
      </Container>
    </div>
  );
};

export default Pitch;

