json.review do
  json.extract! @review, :id, :user_id, :restaurant_id, :body, :rating
end