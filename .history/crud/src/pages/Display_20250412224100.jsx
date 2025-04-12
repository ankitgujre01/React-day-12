import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = 'http://localhost:3000/students';
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
    
  }
  useEffect(() => {
    loadData();
  }, [])


  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{ key.name}</td>
          <td>{ key.rollno}</td>
          <td>{ key.city}</td>
          <td>{ key.contact}</td>
        </tr>
      </>
  )
  })


  return (
    <div>Display</div>
    
  )
}

export default Display;