class Apartment < ApplicationRecord
  validates :address1, presence: true
end
