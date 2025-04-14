import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const MYEdit = () => {

    const [mydata, setMydata] = useState([]);
    const { id } = useParams();
    console.log(id);

    const loadData = async () => { 
        let api = `http://localhost:3000/students/${id}`;
        const response = await axios.get(api);
       
        console.log(response.data);
         setMydata(response.data);
    }

    useEffect(() => {
        loadData();
    }, [])
    
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMydata(values => ({ ...values, [name]: value }));
        console.log(mydata)
    }
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        let api = `http://localhost:3000/students/${id}`;
        await axios.put(api, mydata);
        alert("Data updated successfully");
    }
  return (
      <>
          <h1>Edit data: { id }</h1>
          Enter name<input type="text" name='name' placeholder='Enter name' value={mydata.name} onChange={handleInput}/><br></br>
          Enter Roll no.<input type="text" name='rollno' placeholder='Enter rollno' value={mydata.rollno} onChange={handleInput}/><br></br>
          Enter city<input type="text" name='city' placeholder='Enter city' value={mydata.city} onChange={handleInput}/><br></br>
          Enter contact<input type="text" name='contact' placeholder='Enter contact' value={mydata.contact} onChange={handleInput} /><br></br>
            <button className='btn btn-primary' onClick={handleSubmit}>save</button>
          
      </>
  )
}

export default MYEdit;