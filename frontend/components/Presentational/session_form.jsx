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
    this.deleteErrors = this.deleteErrors.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  deleteErrors() {
    if (this.props.errors instanceof Array) {
      if (this.props.errors.length) {
        this.props.clearErrors();
      }
    } else {
      let errors = Object.values(this.props.errors);
      if (errors.length) {
        this.props.clearErrors();
      }
    }
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
      this.deleteErrors();
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.processForm(user);
  }

  render() {
    let errorBanner;
    let individualErrors;

    if (this.props.errors instanceof Array) {
      if (this.props.errors.length) {
        individualErrors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
        errorBanner = <div className="session-form-error-banner"><ul>{individualErrors}</ul></div>;
      } else {
        errorBanner = null;
      }
    } else {
      let errors = Object.values(this.props.errors);
      if (errors.length) {
        individualErrors = errors.map((error, idx) => <li key={idx}>{error}</li>);
        errorBanner = <div className="session-form-error-banner"><ul>{individualErrors}</ul></div>;
      }
    }


    const buttonText = this.props.formType === "signup" ? "Sign Up" : "Log In";
    const formHeader = buttonText;

    return (
      <div id="session-form-wrapper">
        {errorBanner}
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
