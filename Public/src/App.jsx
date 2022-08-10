import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [invoice,setInvoice] = useState({})
  console.log(invoice)
  useEffect(() => {
    getData();
  }, []);
  const getData = () =>{
    axios
      .get("http://localhost:5010/invoice")
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }
  const handleChange=(e)=>{
    const { name,value } = e.target
    setInvoice({...invoice,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5010/invoice",invoice).then((res)=>getData()).catch((err)=>alert("Date must be in range"))
  }
  const deleteInvoice = (e)=>{
    axios.delete(`http://localhost:5010/invoice/${e.invoice_number}`).then((res)=>getData()).catch((err)=>alert('Something went wrong'))
  }
  return (
    <div className="App">
      <input type="number" name="invoice_number" placeholder="Enter Number" onChange={handleChange} />
      <input type="number" name="invoice_amount" placeholder="Enter Amount" onChange={handleChange} />
      <input type="date" name="invoice_date" placeholder="select date" onChange={handleChange} />
      <input type="submit" onClick={handleSubmit} />
      <table style={{marginTop:"20px"}}>
        <thead>
          <tr>
            <td>Invoice No.</td>
            <td>Invoice Amt.</td>
            <td>Invoice Date</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={i}>
              <td>{e.invoice_number}</td>
              <td>{e.invoice_amount}</td>
              <td>{e.invoice_date}</td>
              <td>Update</td>
              <td onClick={()=>deleteInvoice(e)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
