import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  Row
} from 'react-bootstrap'

class NewApt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        address1: '',
        address2: '',
        city: '',
        zipcode: '',
        state: '',
        country: '',
        name: '',
        phone: '',
        contact_hours: ''
      }
    }
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  render() {
    return (
      <form>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="address1">Address 1</ControlLabel>
              <FormControl
                type="text"
                name="address1"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.address1}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="address2">Address 2</ControlLabel>
              <FormControl
                type="text"
                name="address2"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.address2}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="city">City</ControlLabel>
              <FormControl
                type="text"
                name="city"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.city}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="zipcode">Zipcode</ControlLabel>
              <FormControl
                type="text"
                name="zipcode"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.zipcode}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="state">State</ControlLabel>
              <FormControl
                type="text"
                name="state"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.state}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="country">Country</ControlLabel>
              <FormControl
                type="text"
                name="country"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.country}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="name">Name</ControlLabel>
              <FormControl
                type="text"
                name="name"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.name}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="phone">Phone</ControlLabel>
              <FormControl
                type="text"
                name="phone"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.phone}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="contact_hours">Contact Hours</ControlLabel>
              <FormControl
                componentClass='textarea'
                name="contact_hours"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.contact_hours}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button id="submit">Create New Apt Listing</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default NewApt
