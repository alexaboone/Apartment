apartment_attributes = [
  {
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

apartment_attributes.each do |attributes|
  Apartment.create(attributes)
end
