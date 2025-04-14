import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert = () => {
  return (
    <>
     
      <div id='myform'>
         <h1>Insert Form</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
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