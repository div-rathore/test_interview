import React, { useState } from "react";

const LoginPage = () => {

    const [name,setName] = useState('')
    const[submit,setSubmit] = useState(false);

 const onSubmit = (e) => {
    e.preventDefault();
console.log(name);
setSubmit(true)
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 login">
            <h1>Login Form</h1>
            <form className="form" >
              <div className="form-group">
                <label htmlFor="name">User Name</label>
                <input
                  type="text"
                  placeholder="enter name"
                  className="form-control"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="enter password"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <button onClick={onSubmit} type="submit" className="btn btn-primary mt-2" >
                  submit
                </button>
               {/* {submit && <h2>Welcome!, {name}</h2>}  */}

              </div>
            </form>
          </div>
          <div className="col-md-9">
            <img src="" alt="Test Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
