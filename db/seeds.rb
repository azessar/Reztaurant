# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Restaurant.destroy_all

user1 = User.create!(first_name: 'Andrew', last_name: 'Zessar', email: 'blah@gmail.com', primary_dining_location: 'Chicago', password: 'password')
user2 = User.create!(first_name: 'bob', last_name: 'bob', email: 'bob', primary_dining_location: 'Chicago', password: 'password')
user3 = User.create!(first_name: 'Gordon', last_name: 'Ramsay', email: 'gramsay@gmail.com', primary_dining_location: 'London', password: 'rubbish')
user4 = User.create!(first_name: 'mike', last_name: 'mike', email: 'mike@gmail.com', primary_dining_location: 'here', password: 'password')

restaurant1 = Restaurant.create!(name: "Joe's Seafood, Prime Steak & Stone Crab", avg_price: 70, cuisine: "Steakhouse", description: "Chicago's finest steakhouse, delicious stone crab, with a southern-style ambiance.", capacity: 300, latitude: 41.9, longitude: -87.6, open_time: "11:30", close_time: "21:00", address: "60 E Grand Ave", city: "Chicago", state: "IL", zip: "60611")
restaurant2 = Restaurant.create!(name: "Wiener's Circle", avg_price: 10, cuisine: "American", description: "Your friendly neighborhood hot dog stand; get some dogs, fries, and get out.", capacity: 30, latitude: 41.9, longitude: -87.6, open_time: "11:00", close_time: "23:00", address: "2622 N Clark St", city: "Chicago", state: "IL", zip: "60614")
restaurant3 = Restaurant.create!(name: "Jing Fong", avg_price: 20, cuisine: "Chinese", description: "Serving New York's tastiest dim sum and other Chinese delicacies", capacity: 300, latitude: 40.7, longitude: -74.0, open_time: "10:00", close_time: "20:00", address: "20 Elizabeth St", city: "New York", state: "NY", zip: "10013")
