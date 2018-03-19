require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /apartments" do
    it "gets a list of apartments" do
      Apartment.create(address1: '123 Main St.', address2: 'Apt A', city: 'New York', zipcode: 12345, state: 'NY', country: 'USA',
      name: 'Jason', phone: '123-456-7890', contact_hours: 'M-W-F 8am-4pm, Tu-Th 10am-7pm, Saturday 10am-2pm')

      get '/apartments'

      json = JSON.parse(response.body)

      expect(response).to be_success
      expect(json.length).to eq 1
    end

    it "creates an apartment" do
      apartment_params = {
        apartment: {
          address1: '123 Main St.',
          address2: 'Apt A',
          city: 'New York',
          zipcode: 12345,
          state: 'NY',
          country: 'USA',
          name: 'Jason',
          phone: '123-456-7890',
          contact_hours: 'M-W-F 8am-4pm, Tu-Th 10am-7pm, Saturday 10am-2pm'
        }
      }

      post '/apartments', params: apartment_params

      expect(response).to be_success

      new_apartment = Apartment.first

      expect(new_apartment.name).to eq('Jason')
    end
  end
end
