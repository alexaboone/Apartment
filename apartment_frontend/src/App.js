import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {
  Grid,
  PageHeader,
  Row,
  Col
} from 'react-bootstrap'

class App extends Component {
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
            </Grid>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
