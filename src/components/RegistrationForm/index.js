// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      firstNameError: '',
      lastNameError: '',
      isSubmitted: false,
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleBlur = event => {
    const {name, value} = event.target
    if (!value.trim()) {
      this.setState({[`${name}Error`]: 'Required'})
    } else {
      this.setState({[`${name}Error`]: ''})
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (!firstName.trim() && !lastName.trim()) {
      this.setState({
        firstNameError: 'Required',
        lastNameError: 'Required',
      })
    } else if (!firstName.trim()) {
      this.setState({firstNameError: 'Required'})
    } else if (!lastName.trim()) {
      this.setState({lastNameError: 'Required'})
    } else {
      // Handle successful form submission (e.g., show success message)
      this.setState({isSubmitted: true})
    }
  }

  handleReset = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameError: '',
      lastNameError: '',
      isSubmitted: false,
    })
  }

  render() {
    const {
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      isSubmitted,
    } = this.state

    return (
      <div className="registration-container">
        <h1 className="heading">Registration </h1>
        {isSubmitted ? (
          <div className="success-message">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button type="button" className="button" onClick={this.handleReset}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <label htmlFor="firstname">FIRST NAME</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                id="firstname"
                onChange={this.handleInputChange}
                onBlur={this.handleBlur}
                placeholder="First Name"
              />
              {firstNameError && <p className="error">{firstNameError}</p>}
              <label htmlFor="lastName">LAST NAME</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur}
                placeholder="Last Name"
              />
              {lastNameError && <p className="error">{lastNameError}</p>}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
