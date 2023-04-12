import React from 'react'
import "./App.css"
import Router from './Router'
import { useState,useEffect } from 'react';
const [name, setName] = useState("");
const [dob, setDob] = useState("");
const [aadhar, setAadhar] = useState("");
const [number, setNumber] = useState("");
const [age, setAge] = useState("");
const [details, setDetails] = useState([]);
const [singleDetail, setSingleDetail] = useState({});

const [hide, setHide] = useState("");

useEffect(() => {
  setSingleDetail({
    Name: `${name}`,
    DateOfBirth: `${dob}`,
    AadharNumber: `${aadhar}`,
    MobileNumber: `${number}`,
    Age: `${age}`
  });
}, [name, dob, aadhar, number, age]);

useEffect(() => {
  if (dob === "") {
  } else {
    let DOB = new Date(dob);
    // let newDate = Date.now();
    let month_diff = Date.now() - DOB.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let Age = Math.abs(year - 1970);
    // console.log(setAge(Age));
    // console.log(Date. now());
    // console.log(year);
    console.log(Age);
    setAge(Age);
  }
}, [dob]);

const add = () => {
  if (name === "" || dob === "" || aadhar === "" || number === "") {
    alert("Fill all the inputs!");
  } else if (aadhar.length !== 12) {
    alert("Aadhar Number should be 12 digits long.");
  } else if (number.length !== 10) {
    alert("Mobile Number should be 10 digits long.");
  } else {
    setDetails([...details, singleDetail]);
    setHide("none");
    alert("thanks for saving the details");
  }
};

useEffect(() => {
  localStorage.setItem("data", JSON.stringify(details));
}, [details]);

// const removeAfterSave = (e) => {
//   console.log(e);
//   let arr = [];
//   details.forEach((ele) => {
//     if (ele.AadharNumber !== e.AadharNumber) {
//       arr.push(ele);
//     }
//   });
//   setDetails(arr);
// };
function removeAfterSave(name) {
  if (name.length > 2) {
    alert("you want to remove items..?");
    console.log(name);
    const newDetails = details.filter((item) => item.Name !== name);
    setDetails(newDetails);
  } else {
    alert("first add more details");
  }

  // setCity([...city, name]);
}

const remove = () => {
  setName("");
  setDob("");
  setAadhar("");
  setNumber("");
  setAge("");
};

const display = () => {
  setHide("");
  setName("");
  setDob("");
  setAadhar("");
  setNumber("");
  setAge("");  };

function Addnew() {
  return (
    <div className='main'>
        <Router />
      <div className='addinfo'>
         <h3>Add New Person</h3>
         <table className='table' frame='box' rules='all'>
           <thead>
            <tr>
               <th>Name</th>
               <th>Date of birth</th>
               <th>Aadhar Number</th>
               <th>Mobile Number</th>
               <th>Age</th>
               <th>action</th>


            </tr>
           </thead>
           <tbody>
            {details.length === 0 ? (
              <tr>
                <th colSpan="6">
                  <h6>First Add Items</h6>
                </th>
              </tr>
            ) : (
              details.map((item, index) => {
                return (
                  <tr key={item.Name}>
                    <td>
                      <input defaultValue={item.Name} type={"text"} />
                    </td>
                    <td>
                      <input defaultValue={item.DateOfBirth} type={"date"} />
                    </td>
                    <td>
                      <input defaultValue={item.AadharNumber} type={"number"} />
                    </td>
                    <td>
                      <input defaultValue={item.MobileNumber} type={"number"} />
                    </td>

                    <td>{item.age}</td>
                    <td>
                      <button className="action">save</button>
                      <button
                        className="action"
                        onClick={() => removeAfterSave(item.Name)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
            <tr style={{ display: hide }}>
              <td>
                <input
                  value={name}
                  type={"text"}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <input
                  value={dob}
                  className="input-date"
                  type={"date"}
                  onChange={(e) => setDob(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-num"
                  value={aadhar}
                  type={"number"}
                  onChange={(e) => setAadhar(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-num"
                  value={number}
                  type={"number"}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </td>
              <td>{age}</td>
              <td>
                <button className="action" onClick={() => add()}>
                  Save
                </button>
                <button className="action" onClick={() => remove()}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>

         </table>

         <div className='add'><button  onClick={() => display()}>Add</button></div>


      </div>
      
    </div>
  )
}

export default Addnew
