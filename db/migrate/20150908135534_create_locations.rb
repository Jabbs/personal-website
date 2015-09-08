class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name, default: ""
      t.string :street_1, default: ""
      t.string :street_2, default: ""
      t.string :city, default: ""
      t.string :state, default: ""
      t.string :zip, default: ""
      t.float :latitude
      t.float :longitude
      t.text :info, default: ""

      t.timestamps null: false
    end
  end
end
