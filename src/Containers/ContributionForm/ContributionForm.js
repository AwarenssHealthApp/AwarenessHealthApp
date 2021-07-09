import React, { Component } from 'react'

class ContributionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      specialty: null,
      insurance: null,
      address: null,
      phoneNum: null
    }
  }

  handleChange = (event) => {
    this.setState({ [event.targetname]: event.target.value })
  }

  handleClick = (event) => {
    console.log("submit!")
  }

  render() {
    return (
      <>
        <form>
          <h2>Contribution Form</h2>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={this.state.firstName}
            onChange={event => this.handleChange(event)}
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={this.state.lastName}
            onChange={event => this.handleChange(event)}
          />
          <input
            type='text'
            placeholder='Specialty'
            name='specialty'
            value={this.state.specialty}
            onChange={event => this.handleChange(event)}
          />
          <input
            type='text'
            placeholder='Insurance'
            name='insurance'
            value={this.state.insurance}
            onChange={event => this.handleChange(event)}
          />
          <input
            type='text'
            placeholder='Address'
            name='address'
            value={this.state.address}
            onChange={event => this.handleChange(event)}
          />
          <input
            type='text'
            placeholder='Phone Number'
            name='phoneNum'
            value={this.state.phoneNum}
            onChange={event => this.handleChange(event)}
          />
          <button onClick={(event) => this.handleClick(event)}>Submit</button>
        </form>
      </>
    )
  }
}

export default ContributionForm
