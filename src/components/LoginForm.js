import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    console.log(e.target)

  }

  checkValues = () => {
    if(this.state.username === "" || this.state.password === ""){
      return false
    }
    else{
      return true
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {this.checkValues() ? this.handleLogin(e) : e.preventDefault(); console.log("Need both username and password")}}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(e) => this.handleInputChange(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={(e) => this.handleInputChange(e)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
