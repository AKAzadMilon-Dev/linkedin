import React from 'react';
import {Col, Container, Row, Form, Button, Alert} from 'react-bootstrap';

const Signin = () => {
  return (
    <div className='bgstyle'>
        <Container >
            <Row >
                <Col lg={6}>
                    <Form className='singinform'>
                        <img src='assets/images/logo-1.png'></img>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary" size="md">Signin</Button>
                        </div>
                        <Alert className='alertStyle'>
                            Dont have an account
                        </Alert>
                    </Form>
                </Col>
                <Col lg={6}>
                    <img src='assets/images/linkedin.png'></img>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Signin