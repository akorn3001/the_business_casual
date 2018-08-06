import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      usernameValidInput: "valid",
      passwordValidInput: "valid"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteErrors = this.deleteErrors.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentWillUnmount() {
  //   this.setState({
  //     ["usernameValidInput"]: "valid",
  //     ["passwordValidInput"]: "valid"
  //    });
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push("/articles");
  //   } else {
  //     this.setState({ ["usernameValidInput"]: "valid" });
  //     this.setState({ ["passwordValidInput"]: "valid" });
  //   }
  // }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.processForm(user)
    .then(success => {
      console.log('You signed in/up!');
    })
    .fail(error => {
      if (error.responseJSON.username) {
        this.setState({ ["usernameValidInput"]: "invalid" });
      } else {
        this.setState({ ["usernameValidInput"]: "valid" });
      }

      if (error.responseJSON.password) {
        this.setState({ ["passwordValidInput"]: "invalid" });
      } else {
        this.setState({ ["passwordValidInput"]: "valid" });
      }
    });
  }

  deleteErrors() {
    this.setState({
      ["username"]: "",
      ["password"]: ""
    });
    this.props.deleteAllErrors();
  }

  renderUsernameErrors() {
    let usernameErrors;

    if (this.props.errors instanceof Array) {
      return null;
    } else if (this.props.errors.username) {
      usernameErrors = this.props.errors.username.map((error, idx) => {
        return <li key={`${idx}`}>{error}</li>;
      });
    }

    return <ul>{usernameErrors}</ul>;
  }

  renderPasswordErrors() {
    let passwordErrors;

    if (this.props.errors instanceof Array) {
      return null;
    } else if (this.props.errors.password) {
      passwordErrors = this.props.errors.password.map((error, idx) => {
        return <li key={`${idx}`}>{error}</li>;
      });
    }

    return <ul>{passwordErrors}</ul>;
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
              className={`${
                this.state.usernameValidInput
              } session-form-username-input`}
              autoComplete="off"
              />
            <div className="session-form-username-errors">
              {this.renderUsernameErrors()}
            </div>
          </div>

          <div className="session-form-password">
            <label>Password: </label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange("password")}
              className={`${
                this.state.passwordValidInput
              } session-form-password-input`}
              />
            <div className="session-form-password-errors">
              {this.renderPasswordErrors()}
            </div>
          </div>

          <input className="session-form-submit" type="submit" value={buttonText} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
