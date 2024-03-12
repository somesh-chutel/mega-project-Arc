import { wait } from "@testing-library/user-event/dist/utils";
import "./index.css";
import { useState } from "react";

const Login = () => {

  const [allValues,setValue] = useState({
    username:"",
    password:"",
    showErrorMsg:false,
    errorMsg:""
  });

    const onSubmitUserDetails = async(event)=>{
        event.preventDefault();
        

        const url = "https://apis.ccbp.in/login";

        const userDetails = {
          username: allValues.username,
          password: allValues.password
        }

        const options = {
          method:"Post",
          body: JSON.stringify(userDetails)
        }

        const response = await fetch(url,options);
        const data = await response.json();
        console.log(response);
        console.log(data);
        if(response.ok===true){
          setValue({...allValues,showErrorMsg:false});
        }
        else{
          setValue({...allValues,showErrorMsg:true,errorMsg:data.error_msg});
        }
    }

    const onChangeUserName = (event)=>{
      setValue({...allValues,username:event.target.value});
    }

    const onChangeUserPassword = (event)=>{
        setValue({...allValues,password:event.target.value});
    }


  return (
    <div className="login-page-cont">
      <form className="my-form-cont" onSubmit={onSubmitUserDetails}>
        <div className="img-cont">
        <img className="company-logo" src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="company-logo"/>
        </div>
        <div className="form-group text-light mb-3">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeUserName}
          />
          <small id="emailHelp" className="form-text text-primary">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mb-3 text-light">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangeUserPassword}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
        {allValues.showErrorMsg?(<p className="text-danger">{allValues.errorMsg}</p>):null}
      </form>
    </div>
  );
};

export default Login;
