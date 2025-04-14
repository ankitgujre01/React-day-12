import { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { MdEditDocument } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Update = () => {

  const [mydata, setMydata] = useState([]);

  const navigate = useNavigate();

  const loadData = async () => { 
    let api = 'http://localhost:3000/students';
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    loadData();
  }, [])

  const mydel = async (id) => {
    let api = `http://localhost:3000/students/${id}`; 
    await axios.delete(api);
    loadData();
  }

  const myedit = (id) => {
    navigate(`/myedit/${id}`);
  }

  let sno = 0;
  const ans = mydata.map((key) => {
    sno++;
    return (
      <>
        <tr>
          <td>{sno}</td>
          <td>{key.name}</td>
          <td>{key.rollno}</td>
          <td>{key.city}</td>
          <td>{key.contact}</td>
          <td><MdEditDocument id="editicon" onClick={() => myedit(key.id)} color={"blue"} /></td>
          <td><RiDeleteBin4Fill id="delicon" onClick={() => mydel(key.id)} color={"red"} /></td>
        </tr>
      </>
    )
  })
  
  
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Roll No.</th>
            <th>City</th>
            <th>Contact</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
    </>
  )
}

export default Update;