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
        </form>
      </>
    )
  }
}

export default ContributionForm
