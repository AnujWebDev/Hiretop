import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', email, password);
  };

  return (
    <>
    <h1 className='text-center'>Sign in to TopHire</h1>
      <p className='text-center'>Don't have an account? Sign up as a <Link to='/signUp'>candidate</Link> or an employer.</p>
    <div className="container d-flex justify-content-center align-items-center  w-50">
    <Form onSubmit={handleSubmit}>
    <Button id="btn1" style={{display:'block',margin:'10px',width:'50vh'}} variant="primary" size="lg">
          sign in with linkedin
        </Button>{' '}
        <Button id="btn2" style={{display:'block',margin:'10px',width:'50vh'}}  variant="primary" size="lg">
          sign in with google 
        </Button>{' '}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button style={{display:'block',margin:'10px',width:'50vh'}} id="btn3" variant="primary" size="lg">
        Login
      </Button>
    </Form>
    </div>
    </>
  );
};

export default Login;

