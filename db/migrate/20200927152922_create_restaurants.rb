class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|

      t.string :name, null: false
      t.integer :avg_price, null: false
      t.string :cuisine, null: false
      t.text :description, null: false
      t.integer :capacity
      t.integer :latitude
      t.integer :longitude
      t.time :open_time, null: false
      t.time :close_time, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip

      t.timestamps
    end
  end
end
