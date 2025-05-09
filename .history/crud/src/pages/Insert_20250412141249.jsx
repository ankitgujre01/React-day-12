import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const Insert = () => {

  const [input, setInput] = useState({});


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }))
    console.log(input);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let api = 'http://localhost:3000/students';
    const response = await axios.post(api, input)
    toast.success("Data Inserted Successfully !", {
  position: "top-right",
});
    console.log(response);
    
  }
  return (
    <>
     
      <div id='myform'>
         <h1>Insert Form</h1>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleInput}/>
            <Form.Label>Enter Roll No.</Form.Label>
            <Form.Control type="text" placeholder="Enter Roll nu." name='rollno' onChange={handleInput}/>
            <Form.Label>Enter city</Form.Label>
            <Form.Control type="text" placeholder="Enter city" name='city' onChange={handleInput}/>
            <Form.Label>Enter contact</Form.Label>
        <Form.Control type="text" placeholder="Enter Contact" name='contact' onChange={handleInput}/>
        
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Insert;