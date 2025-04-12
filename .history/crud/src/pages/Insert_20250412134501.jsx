import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const Insert = () => {

  const [input, setInput] = useState({});


  const handleInput = (e) => {
    let 
  }
  return (
    <>
     
      <div id='myform'>
         <h1>Insert Form</h1>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name='name'/>
            <Form.Label>Enter Roll No.</Form.Label>
            <Form.Control type="text" placeholder="Enter Roll nu." name='rollno'/>
            <Form.Label>Enter city</Form.Label>
            <Form.Control type="text" placeholder="Enter city" name='city'/>
            <Form.Label>Enter contact</Form.Label>
        <Form.Control type="text" placeholder="Enter Contact" name='contact' />
        
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