import React, { useState } from "react";
const Contact = () => {
    const[data, setData] = useState({
        User_id:'',
        Email:'',
        password:'',
        phone:'',
    })
    const inputevent = (event)=>{
        const {value, name} = event.target
        setData((prevData)=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }
    const formsubmit = (e)=>{
      e.preventDefault();
      alert(`Hii my Name is ${data.User_id} My Email is : ${data.Email} and the my phone no. is ${data.phone}`)
    }
  return (
    <>
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto mt-4">
         <h1 className="text-center service_header">Contact me</h1>
        </div>
      </div>
        <div className="row ">
          <div className="col-md-6 col-10 my-2 mx-auto form_box">
            <form onSubmit={formsubmit}>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">
                 User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="User_id"
                  value={data.User_id}
                  onChange={inputevent}
                  placeholder="Enter your Name..."
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="Email"
                  value={data.Email}
                  onChange={inputevent}
                  placeholder="Enter your Email_id..."
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={inputevent}
                  placeholder="Enter your password..."
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPhone" class="form-label">
                  Phone no
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="phone"
                  value={data.phone}
                  onChange={inputevent}
                  placeholder="Enter your phone no..."
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
