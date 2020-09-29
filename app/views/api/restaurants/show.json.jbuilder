json.restaurant do
  json.extract! @restaurant, :id, :name, :avg_price, :cuisine, :description, :capacity, :latitude, :longitude, :open_time, :close_time, :address, :city, :state, :zip
end