class Review < ApplicationRecord
    validates :user_id, :restaurant_id, :body, :rating, presence: true
    belongs_to :restaurant
    belongs_to :user
end