import React, { Component } from 'react';
import {
  Grid,
  PageHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Apartments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiUrl: "http://localhost:3001",
      apartments: []
    }
  }

  componentWillMount(){
    fetch(`${this.state.apiUrl}/apartments`)
    .then((rawResponse) => {
      return rawResponse.json()
    })
    .then((parsedResponse)=>{
      this.setState({apartments: parsedResponse})
    })
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.state.apartments.map((apartment, index)=>{
              return(
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='apartment-address'>
                        {apartment.address1}
                      </span>
                      - <small className='apartment-city-state'>{apartment.city}, {apartment.state}</small>
                    </h4>
                  }>
                  <span className='apartment-name'>Posted By: {apartment.name}</span>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default Apartments
