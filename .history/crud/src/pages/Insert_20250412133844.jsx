import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const Insert = () => {
  return (
    <>
     
      <div id='myform'>
         <h1>Insert Form</h1>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            <Form.Label>Enter Roll No.</Form.Label>
            <Form.Control type="text" placeholder="Enter Roll nu." />
            <Form.Label>Enter city</Form.Label>
            <Form.Control type="text" placeholder="Enter city" />
            <Form.Label>Enter contact</Form.Label>
        <Form.Control type="text" placeholder="Enter Contact" />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
    </>
  )
}

export default Insert;