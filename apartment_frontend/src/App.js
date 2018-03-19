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
      apiUrl: "http://localhost:3001",
      apartments: [],
      newApartmentSuccess: false,
      errors: null
    }
  }

  componentWillMount(){
    fetch(`${this.state.apiUrl}/apartments`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse)=>{
      this.setState({apartments: parsedResponse})
    })
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
