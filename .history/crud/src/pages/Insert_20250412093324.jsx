import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            <Form.Control type="text" placeholder="Enter name" />
            <Form.Label>Enter city</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            <Form.Label>Enter contact</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        
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