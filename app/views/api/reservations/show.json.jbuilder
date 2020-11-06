json.reservation do
  json.extract! @reservation, :id, :user_id, :restaurant_id, :party_size, :date, :time
end