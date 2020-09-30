json.restaurant do
  json.extract! @restaurant, :id, :name, :avg_price, :cuisine, :description, :capacity, :latitude, :longitude, :open_time, :close_time, :address, :city, :state, :zip
  json.main_photo url_for(@restaurant.main_photo)
  # json.background_photo url_for(@restaurant.background_photo)
end