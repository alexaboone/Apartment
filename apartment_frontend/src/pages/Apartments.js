import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Apartments extends Component {
  render() {
    return(
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.props.apartments.map((apartment, index) =>{
              return (
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
