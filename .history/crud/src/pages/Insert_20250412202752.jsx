import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const Insert = () => {
  const [input, setInput] = useState({
    name: "",
    rollno: "",
    city: "",
    contact: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = 'http://localhost:3000/students';
      const response = await axios.post(api, input);
      toast.success("Data Inserted Successfully!", {
        position: "top-right",
      });
      console.log(response);
    } catch (error) {
      toast.error("Error inserting data.");
      console.error(error);
    }
  };

  return (
    <>
      <div id='myform'>
        <h1>Insert Form</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name='name' value={input.name} onChange={handleInput} />
            <Form.Label>Enter Roll No.</Form.Label>
            <Form.Control type="text" placeholder="Enter Roll no." name='rollno' value={input.rollno} onChange={handleInput} />
            <Form.Label>Enter City</Form.Label>
            <Form.Control type="text" placeholder="Enter city" name='city' value={input.city} onChange={handleInput} />
            <Form.Label>Enter Contact</Form.Label>
            <Form.Control type="text" placeholder="Enter contact" name='contact' value={input.contact} onChange={handleInput} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Insert;
