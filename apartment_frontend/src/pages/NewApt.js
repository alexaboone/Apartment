import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  HelpBlock,
  FormGroup,
  FormControl,
  Button,
  Alert,
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

  handleSubmit(){
    this.props.onSubmit(this.state.form)
  }

  errorsFor(attribute){
    var errorString = ""
    if(this.props.errors && this.props.errors[attribute]){
      const errors = this.props.errors[attribute]
      if(errors){
        errorString = errors.join(", ")
      }
    }
    return errorString === "" ? null : errorString
  }

  render() {
    return (
      <form>
        <Row>
          <Col xs={6}>
            {this.props.errors &&
              <Alert bsStyle="danger">
                Please check the form and try again.
              </Alert>
            }
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup
            id="address1-form-group"
            validationState={this.errorsFor('address1') && 'error'}>
              <ControlLabel id="address1">Address 1</ControlLabel>
              <FormControl
                type="text"
                name="address1"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.address1}
              />
              {this.errorsFor('address1') &&
                <HelpBlock id="address1-help-block">{this.errorsFor('address1')}</HelpBlock>
              }
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
            <FormGroup
            id="city-form-group"
            validationState={this.errorsFor('city') && 'error'}>
              <ControlLabel id="city">City</ControlLabel>
              <FormControl
                type="text"
                name="city"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.city}
              />
              {this.errorsFor('city') &&
                <HelpBlock id="city-help-block">{this.errorsFor('city')}</HelpBlock>
              }
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
            <FormGroup
            id="state-form-group"
            validationState={this.errorsFor('state') && 'error'}>
              <ControlLabel id="state">State</ControlLabel>
              <FormControl
                type="text"
                name="state"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.state}
              />
              {this.errorsFor('state') &&
                <HelpBlock id="state-help-block">{this.errorsFor('state')}</HelpBlock>
              }
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
            <FormGroup
              id="name-form-group"
              validationState={this.errorsFor('name') && 'error'}>
              <ControlLabel id="name">Name</ControlLabel>
              <FormControl
                type="text"
                name="name"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.name}
              />
              {this.errorsFor('name') &&
                <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
              }
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
            <Button id="submit" onClick={this.handleSubmit.bind(this)}>Create New Apt Listing</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default NewApt
