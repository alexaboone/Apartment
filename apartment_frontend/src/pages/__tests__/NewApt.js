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

it("calls submitHandler on submit", () => {
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewApt onSubmit={mockSubmitHandler}/>)
  component.find('button#submit').simulate('click', {button: 0})
  expect(mockSubmitHandler.mock.calls.length).toBe(1)
})

it("passes values on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewApt onSubmit={mockSubmitHandler}/>)
  component.find('input[name="address1"]').simulate('change', {target: {value: '123 Main St.', name: 'address1'}})
  component.find('input[name="address2"]').simulate('change', {target: {value: 'Apt A', name: 'address2'}})
  component.find('input[name="city"]').simulate('change', {target: {value: 'New York', name: 'city'}})
  component.find('input[name="zipcode"]').simulate('change', {target: {value: 12345, name: 'zipcode'}})
  component.find('input[name="state"]').simulate('change', {target: {value: 'NY', name: 'state'}})
  component.find('input[name="country"]').simulate('change', {target: {value: 'USA', name: 'country'}})
  component.find('input[name="name"]').simulate('change', {target: {value: 'Jason', name: 'name'}})
  component.find('input[name="phone"]').simulate('change', {target: {value: '123-456-7890', name: 'phone'}})
  component.find('textarea[name="contact_hours"]').simulate('change', {target: {value: 'M-W-F 8am-4pm, Tu-Th 10am-7pm, Saturday 10am-2pm', name: 'contact_hours'}})
  component.find('button#submit').simulate('click', {button: 0})

  const submittedValues = mockSubmitHandler.mock.calls[0][0]

  expect(submittedValues["address1"]).toBe("123 Main St.")
  expect(submittedValues["address2"]).toBe("Apt A")
  expect(submittedValues["city"]).toBe("New York")
  expect(submittedValues["zipcode"]).toBe(12345)
  expect(submittedValues["state"]).toBe("NY")
  expect(submittedValues["country"]).toBe("USA")
  expect(submittedValues["name"]).toBe("Jason")
  expect(submittedValues["phone"]).toBe("123-456-7890")
  expect(submittedValues["contact_hours"]).toBe("M-W-F 8am-4pm, Tu-Th 10am-7pm, Saturday 10am-2pm")
})
