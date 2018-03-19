import React from 'react';
import ReactDOM from 'react-dom';
import NewApt from '../NewApt';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewApt />, div)
})

it('has an address1 input', () => {
  const component = mount(<NewApt />)
  expect(component.find('label#address1').text()).toBe("Address 1")
})

it('has an address2 input', () => {
  const component = mount(<NewApt />)
  expect(component.find('label#address2').text()).toBe("Address 2")
})

it('has a city input', () => {
  const component = mount(<NewApt />)
  expect(component.find('label#city').text()).toBe("City")
})

it('has a zipcode input', () => {
  const component = mount(<NewApt />)
  expect(component.find('label#zipcode').text()).toBe("Zipcode")
})

it('has a state input', () => {
  const component = mount(<NewApt />)
  expect(component.find('label#state').text()).toBe("State")
})

it('has a country input', () => {
  const component = mount(<NewApt />)
  expect(component.find('label#country').text()).toBe("Country")
})

it('has a name input', () => {
  const component = mount(<NewApt />)
  expect(component.find('label#name').text()).toBe("Name")
})

it('has a phone input', () => {
  const component = mount(<NewApt />)
  expect(component.find('label#phone').text()).toBe("Phone")
})

it('has a contact hours input', () => {
  const component = mount(<NewApt />)
  expect(component.find('label#contact_hours').text()).toBe("Contact Hours")
})

it('has a submit button', () => {
  const component = mount(<NewApt />)
  expect(component.find('button#submit').text()).toBe("Create New Apt Listing")
})
