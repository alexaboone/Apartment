class ApartmentsController < ApplicationController
  def index
    apartments = Apartment.all
    render json: apartments
  end

  def create
    apartment = Apartment.create(apartment_params)
    render json: apartment
  end

  def apartment_params
    params.require(:apartment).permit(:address1, :address2, :city, :zipcode, :state, :country, :name, :phone, :contact_hours)
  end
end
