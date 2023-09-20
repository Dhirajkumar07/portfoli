import React, { useState } from "react";
import "./Forms.css";
const Froms = () => {
  const [data, setData] = useState({
    userId: "",
    password: "",
    email: "",
    phone: "",
  });
  const eventvalue = (event) => {
    const name = event.target.name;
    console.log(name);
    const value = event.target.value;
    console.log(value);
    setData((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const submit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <p className="forms_top_heading"> project no. 5 Froms (hooks, array destructuring, speread oprt, callback function) included</p>
      <form onSubmit={submit}>
        <div className="forms_container">
          <h1>Hello {data.userId}</h1>
          <p>{data.password}</p> 
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <input
            className="forms_input"
            type="text"
            name="userId"
            value={data.userId}
            placeholder="Enter User_Id.."
            onChange={eventvalue}
          />
          <input
            className="forms_input"
            type="text"
            name="password"
            value={data.password}
            placeholder="Enter Password.."
            onChange={eventvalue}
          />
          <input
            className="forms_input"
            type="text"
            autoComplete="off"
            name="email"
            value={data.email}
            placeholder="Enter email_id.."
            onChange={eventvalue}
          />
          <input
            className="forms_input"
            type="text"
            name="phone"
            value={data.phone}
            placeholder="Enter phone no.."
            onChange={eventvalue}
          />
          <button className="forms_button">Submit</button>
        </div>
      </form>
    </>
  );
};
export default Froms;
