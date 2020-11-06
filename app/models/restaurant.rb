class Restaurant < ApplicationRecord
    validates :name, :avg_price, :cuisine, :description, :capacity, :latitude, :longitude, :open_time, :close_time, :address, :city, :state, :zip, :phone, presence: true

    
    has_many :reservations,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: :Reservation

    has_one_attached :main_photo
    has_one_attached :background_photo

    def self.name_like(search_word)
        Restaurant.where("lower(name) like ?", "#{search_word.downcase}%")
    end

    # has_one_attached :second_photo
end