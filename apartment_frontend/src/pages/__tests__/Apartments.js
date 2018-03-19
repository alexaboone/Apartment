import React from 'react';
import ReactDOM from 'react-dom';
import Apartments from '../Apartments';
import { mount } from 'enzyme'

const apartments = [
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

it('Apartments renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Apartments apartments={apartments} />, div)
})

it('Renders the apartments', () => {
  const component = mount(<Apartments apartments={apartments} />)
  const headings = component.find('h4 > .apartment-address')
  expect(headings.length).toBe(3)
})
