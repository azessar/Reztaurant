class Restaurant < ApplicationRecord
    validates :name, :avg_price, :cuisine, :description, :capacity, :latitude, :longitude, :open_time, :close_time, :address, :city, :state, :zip, :phone, presence: true

    
    has_one_attached :main_photo
    has_one_attached :background_photo

    # has_one_attached :second_photo
end