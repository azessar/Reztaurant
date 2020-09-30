json.extract! restaurant, :id, :name, :avg_price, :cuisine, :description, :capacity, :latitude, :longitude, :open_time, :close_time, :address, :city, :state, :zip
if restaurant.main_photo.attached?
    json.photoUrl url_for(restaurant.main_photo)
end