class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.index :restaurant_id
      t.index :user_id

      t.timestamps
    end
  end
end
