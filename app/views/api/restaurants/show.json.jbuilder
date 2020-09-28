json.restaurant do
  json.partial! '/api/restaurant/restaurant', restaurant: @restaurant
end