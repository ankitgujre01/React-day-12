import { useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
const Search = () => {
  const [strollno, setStrollno] = useState("");
  const [mydata, setMydata] = useState([]);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `http://localhost:3000/students/?rollno=${strollno}`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.name}</td>
          <td>{key.rollno}</td>
          <td>{key.city}</td>
          <td>{key.contact}</td>
        </tr>
      </>
    )
  })
  return (
    <>
      <h1>Search Page</h1>
      Enter students Roll no. <input type='text' value={strollno} onChange={ (e)=>{setStrollno(e.target.value)}} />
      <br />
      <button onClick={handleSubmit}>Search</button>
      <br />
      <br />
      <div id="mysearchTable">
      <Table striped bordered hover>
      <thead>
        <tr>
          
          <th> Name</th>
          <th>Roll no.</th>
          <th>city</th>
          <th>contact</th>
        </tr>
      </thead>
        <tbody>
          {ans}
        </tbody>
        </Table>
        </div>
    </>
  )
}

export default Search;