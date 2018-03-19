import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Apartments from './pages/Apartments'
import NewApt from './pages/NewApt'
import {
  Grid,
  PageHeader,
  Row,
  Col
} from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: [
        {
          id: 1,
          address1: '123 Main St.',
          address2: 'Apt A',
          city: 'New York',
          zipcode: 12345,
          state: 'NY',
          country: 'USA',
          name: 'Jason',
          phone: '123-456-7890',
          contact_hours: 'M-W-F 8am-4pm, Tu-Th 10am-7pm, Saturday 10am-2pm'
        },
        {
          id: 2,
          address1: '456 Main St.',
          address2: 'Apt B',
          city: 'New York',
          zipcode: 12345,
          state: 'NY',
          country: 'USA',
          name: 'Jessica',
          phone: '123-456-7890',
          contact_hours: 'M-W-F 8am-4pm, Tu-Th 10am-7pm, Saturday 10am-2pm'
        },
        {
          id: 3,
          address1: '789 Main St.',
          address2: 'Apt C',
          city: 'New York',
          zipcode: 12345,
          state: 'NY',
          country: 'USA',
          name: 'Jimmy',
          phone: '123-456-7890',
          contact_hours: 'M-W-F 8am-4pm, Tu-Th 10am-7pm, Saturday 10am-2pm'
        }
      ]
    }
  }

  newAptSubmit(apartment){
    console.log("This apartment was submitted", apartment)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Apartment App
                    <small className='subtitle'>Add an Apartment</small>
                  </Col>
                  <Col xs={4}>
                    <small>
                      <Link to='/apartments' id='apartments-link'>Show Me the Apartments</Link>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
              <NewApt onSubmit={this.newAptSubmit.bind(this)} />
            </Grid>
          )} />

          <Route exact path="/apartments" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Apartment App
                    <small className='subtitle'>All the Apartments</small>
                  </Col>
                  <Col xs={4}>
                    <small>
                      <Link to='/' id='apartments-link'>Add an Apartment</Link>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
              <Apartments apartments={this.state.apartments} />
            </Grid>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
