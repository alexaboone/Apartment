class ApartmentsController < ApplicationController
  def index
    apartments = Apartment.all
    render json: apartments
  end

  def create
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
      render json: apartment
    else
      render json: apartment.errors, status: :unprocessable_entity
    end
  end

  def apartment_params
    params.require(:apartment).permit(:address1, :address2, :city, :zipcode, :state, :country, :name, :phone, :contact_hours)
  end
end
