import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Submitted:', email, password);
  };

  return (
    <>
  <h1 className='text-center'>Create your candidate profile</h1>
  <p className='text-center'>Let 1000+ technology & product companies like Amazon, Swiggy, Dream11, Gojek, and Grab compete to hire you!.</p>
  <div className="container d-flex justify-content-center align-items-center  w-50">
    <Form onSubmit={handleSubmit}>
      <Button id="btn1" style={{ width: '40vh' }} variant="primary" size="lg">
        continue with linkedin
      </Button>{' '}
      <Button id="btn2" style={{ width: '40vh' }} variant="primary" size="lg">
        continue with google
      </Button>{' '}
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
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

      <Button style={{margin: '10px', width: '50vh' }} id="btn3" variant="primary" size="lg">
        Login
      </Button>
      <span>Already Have an account?<Link to="/login" >Login Here</Link></span>
    </Form>
  </div>
</>
  );
};

export default Signup;
