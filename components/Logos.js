// components/Logos.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import logoData from './LogoData';  // Import the data from LogoData.js

const Logos = () => {
    // Split the logoData into chunks of 6 for each row
    const chunkSize = 6;
    const logoChunks = [];
    for (let i = 0; i < logoData.length; i += chunkSize) {
        logoChunks.push(logoData.slice(i, i + chunkSize));
    }

    return (
        <Container fluid style={{ backgroundColor: '#ffffff' }}>
            {logoChunks.map((chunk, chunkIndex) => (
                <React.Fragment key={chunkIndex}>
                    <Row className="justify-content-center align-items-center text-center" style={{ padding: '20px 0' }}>
                        {chunk.map((logo, index) => (
                            <Col key={index} xs={6} sm={4} md={3} lg={2} xl={2} style={{ marginBottom: '10px' }}>
                                <a href={logo.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={100}  // You can adjust the size as needed
                                        height={100}
                                        layout="intrinsic"
                                        style={{ display: 'block', margin: '0 auto' }}
                                    />
                                </a>
                            </Col>
                        ))}
                    </Row>
                    <Row className="justify-content-center align-items-center text-center" style={{ marginBottom: '20px' }}>
                        {chunk.map((logo, index) => (
                            <Col key={index} xs={6} sm={4} md={3} lg={2} xl={2}>
                                <h5 style={{ marginTop: '10px' }}>
                                    <a href={logo.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {logo.heading}
                                    </a>
                                </h5>
                            </Col>
                        ))}
                    </Row>
                </React.Fragment>
            ))}
        </Container>
    );
};

export default Logos;

