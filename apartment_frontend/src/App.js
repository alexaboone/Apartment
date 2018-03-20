import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
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
      newAptSuccess: false,
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
    fetch(`${this.state.apiUrl}/apartments`,
      {
        body: JSON.stringify(apartment),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse)=>{
      return Promise.all([rawResponse.status, rawResponse.json()])
    })
    .then((parsedResponse) =>{
      if(parsedResponse[0] === 422){
        this.setState({errors: parsedResponse[1]})
      }else{
        const apartments = Object.assign([], this.state.apartments)
        apartments.push(parsedResponse[1])
        this.setState({
          apartments: apartments,
          errors: null,
          newAptSuccess: true
        })
      }
    })
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
                </Row>
              </PageHeader>
              <NewApt
                onSubmit={this.newAptSubmit.bind(this)}
                errors={this.state.errors}
              />

              {this.state.newAptSuccess &&
                <Redirect to="/apartments" />
              }

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
                </Row>
              </PageHeader>
              <Apartments apartments={this.state.apartments} />

              {!this.state.newAptSuccess &&
                <Redirect to="/" />
              }

            </Grid>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
