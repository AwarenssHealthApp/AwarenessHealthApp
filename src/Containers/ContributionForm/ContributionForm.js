import React, { Component } from 'react'

class Form extends Component {
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

  render() {
    return (
      <>
        <form>
          <h2>Contribution Form</h2>
        </form>
      </>
    )
  }
}
