class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|

      t.integer :user_id, null: false, index: true
      t.integer :restaurant_id, null: false, index: true
      t.string :date, null: false
      t.string :time, null: false
      t.integer :party_size, null: false

      t.timestamps
    end
  end
end
