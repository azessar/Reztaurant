json.extract! restaurant, :id, :name, :avg_price, :cuisine, :description, :capacity, :latitude, :longitude, :open_time, :close_time, :address, :city, :state, :zip, :phone
if restaurant.main_photo.attached?
    json.main_photo url_for(restaurant.main_photo)
end

if restaurant.background_photo.attached?
    json.background_photo url_for(restaurant.background_photo)
end