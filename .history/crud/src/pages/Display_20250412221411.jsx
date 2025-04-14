import React from 'react'
import { useState, useEffect } from 'react';
const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = 'http://localhost:3000/students';
    const response = await axios
  }
  return (
    <div>Display</div>
  )
}

export default Display;