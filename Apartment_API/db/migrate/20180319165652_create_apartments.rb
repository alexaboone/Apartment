class CreateApartments < ActiveRecord::Migration[5.1]
  def change
    create_table :apartments do |t|
      t.string :address1
      t.string :address2
      t.string :city
      t.integer :zipcode
      t.string :state
      t.string :country
      t.string :name
      t.string :phone
      t.text :contact_hours

      t.timestamps
    end
  end
end
