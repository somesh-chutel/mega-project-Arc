import "./index.css";

const Login = () => {

    const onSubmitUserDetails = (event)=>{
        console.log("submit form working properly!!!")

        event.preventDefault();
    }


  return (
    <div className="login-page-cont">
      <form className="my-form-cont" onSubmit={onSubmitUserDetails}>
        <div className="img-cont">
        <img className="company-logo" src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="company-logo"/>
        </div>
        <div className="form-group text-light mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
