import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.processForm(user);
  }

  render() {
    const buttonText = this.props.formType === "signup" ? "Sign Up" : "Log In";
    const formHeader = buttonText;

    return (
      <div id="session-form-wrapper">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <span>{formHeader}</span>
          <div className="session-form-username">
            <label>Username: </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange("username")}
              className="session-form-username-input"
              autoComplete="off"
              />
          </div>

          <div className="session-form-password">
            <label>Password: </label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange("password")}
              className="session-form-password-input"
              />
          </div>

          <input className="form-submit session-form-submit" type="submit" value={buttonText} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
