
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
# URI.open(‘url’)
User.destroy_all
Restaurant.destroy_all
Reservation.destroy_all
Review.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

user1 = User.create!(first_name: 'Andrew', last_name: 'Zessar', email: 'blah@gmail.com', primary_dining_location: 'Chicago', password: 'password')
user2 = User.create!(first_name: 'bob', last_name: 'bob', email: 'bob', primary_dining_location: 'Chicago', password: 'password')
user3 = User.create!(first_name: 'Gordon', last_name: 'Ramsay', email: 'gramsay@gmail.com', primary_dining_location: 'London', password: 'rubbish')
user4 = User.create!(first_name: 'mike', last_name: 'mike', email: 'mike@gmail.com', primary_dining_location: 'here', password: 'password')

default_show_background = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/default_show_background.png')

restaurant1 = Restaurant.create!(name: "Krusty Krab", avg_price: 15, cuisine: "Burgers", description: "Bikini Bottom's best burger joint, serving up smiles and the sea-famous Krabby Patty", capacity: 300, latitude: 41.9, longitude: -87.6, open_time: "11:30", close_time: "21:00", address: "60 E Grand Ave", city: "Bikini Bottom", state: "Sea", zip: "60611", phone: "555-555-1232")
file1 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/krustykrab.jpeg')
file1b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/krustykrab_b.jpeg')
restaurant1.main_photo.attach(io: file1, filename: 'steaks.jpeg')
restaurant1.background_photo.attach(io: file1b, filename: 'joes_b.png')

# restaurant2 = Restaurant.create!(name: "Wiener's Circle", avg_price: 10, cuisine: "American", description: "Your friendly neighborhood hot dog stand; get some dogs, fries, and get out.", capacity: 30, latitude: 41.9, longitude: -87.6, open_time: "11:00", close_time: "23:00", address: "2622 N Clark St", city: "Chicago", state: "IL", zip: "60614", phone: "555-555-4564")
# file2 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/wieners.png')
# restaurant2.main_photo.attach(io: file2, filename: 'wieners.png')
# restaurant2.background_photo.attach(io: default_show_background, filename: 'default_show_background.png')

restaurant3 = Restaurant.create!(name: "Paunch Burger", avg_price: 10, cuisine: "Burgers", description: "Come to Paunch Burger and stuff your facehole with our delicious number two: the Double Bacon Grenade Deluxe with hash browns, chili cheese fries, and one poached egg", capacity: 100, latitude: 40.7, longitude: -74.0, open_time: "10:00", close_time: "20:00", address: "20 Elizabeth St", city: "Pawnee", state: "IN", zip: "46077", phone: "555-555-2342")
file3 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/Paunch.jpeg')
restaurant3.main_photo.attach(io: file3, filename: 'jingfong.jpeg')
file3b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/paunch_b.jpeg')
restaurant3.background_photo.attach(io: file3b, filename: 'minghin_b.png')

restaurant4 = Restaurant.create!(name: "Paddy's Pub", avg_price: 25, cuisine: "Bar/Club", description: "Paddy's Pub, home of the original Kitten Mittens!", capacity: 100, latitude: 41.9, longitude: -87.6, open_time: "10:00", close_time: "23:00", address: "1345 N Wells St", city: "Philadelphia", state: "PA", zip: "19019", phone: "555-555-1234")
file4 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/paddys.jpeg')
restaurant4.main_photo.attach(io: file4, filename: 'smallcheval.jpeg')
file4b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/paddys_b.jpg')
restaurant4.background_photo.attach(io: file4b, filename: 'bar_b.png')

restaurant5 = Restaurant.create!(name: "Chum Bucket", avg_price: 30, cuisine: "Seafood", description: "Attention clientele, I command you to patronize Bikini Bottom's number one establishment serving delectable comestibles!", capacity: 200, latitude: 42.2, longitude: -87.8, open_time: "10:00", close_time: "20:00", address: "1888 1st St", city: "Bikini Bottom", state: "Sea", zip: "60035", phone: '555-555-6543')
file5 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/chum.jpeg')
restaurant5.main_photo.attach(io: file5, filename: 'ouab.jpeg')
file5b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/default_show_background.png')
restaurant5.background_photo.attach(io: file5b, filename: 'default_show_background.png')

restaurant6 = Restaurant.create!(name: "City Wok", avg_price: 20, cuisine: "Chinese", description: "The crown jewel of South Park's Chinatown; stop by for dim sum after 9pm!", capacity: 200, latitude: 41.8, longitude: -87.6, open_time: "10:00", close_time: "20:00", address: "2168 S Archer Ave", city: "South Park", state: "CO", zip: "80011", phone: '555-555-6665')
file6 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/citywok.jpeg')
restaurant6.main_photo.attach(io: file6, filename: 'citywok.jpeg')
file6b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/minghin_b.png')
restaurant6.background_photo.attach(io: file6b, filename: 'minghin_b.png')

restaurant7 = Restaurant.create!(name: "Monk's Cafe", avg_price: 20, cuisine: "American", description: "It's a restaurant about nothing; stop in, have a cup of coffee; that group of four near the front is now in jail by the way", capacity: 100, latitude: 40.7, longitude: -74.6, open_time: "10:00", close_time: "20:00", address: "2024 N Halsted St", city: "New York", state: "NY", zip: "11211", phone: '555-555-2574')
file7 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/monks.jpeg')
restaurant7.main_photo.attach(io: file7, filename: 'monks.jpeg')
file7b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/cafe_b.png')
restaurant7.background_photo.attach(io: file7b, filename: 'cafe_b.png')

restaurant8 = Restaurant.create!(name: "Central Perk", avg_price: 10, cuisine: "Coffee", description: "We have an annoying waitress, and her annoying friends spend way too much time here.", capacity: 100, latitude: 40.7, longitude: -74.0, open_time: "4:00", close_time: "22:00", address: "178 Broadway", city: "New York", state: "NY", zip: "11211", phone: '555-555-1111')
file8 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/central.jpeg')
restaurant8.main_photo.attach(io: file8, filename: 'steaks.jpeg')
file8b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/centralperk_b.jpeg')
restaurant8.background_photo.attach(io: file8b, filename: 'joes_b.png')


restaurant9 = Restaurant.create!(name: "Krusty Burger", avg_price: 25, cuisine: "Burgers", description: "The Ribwich is back! 'I don't mind the taste!' - Krusty himself", capacity: 80, latitude: 41.9, longitude: -87.6, open_time: "12:00", close_time: "22:00", address: "1212 N Dearborn St", city: "Springfield", state: "N/A", zip: "60610", phone: '555-555-3333')
file9 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/krusty.jpeg')
restaurant9.main_photo.attach(io: file9, filename: 'eduardos.jpeg')
file9b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/krusty_b.jpeg')
restaurant9.background_photo.attach(io: file9b, filename: 'eduardos_b.png')

restaurant10 = Restaurant.create!(name: "Los Pollos Hermanos", avg_price: 15, cuisine: "Chicken", description: "Counter-service fried chicken; great place to hold low-key business meetings where you need a quiet but public place to talk!", capacity: 50, latitude: 35.9, longitude: -106.6, open_time: "12:00", close_time: "22:00", address: "3000 N Broadway", city: "Albuquerque", state: "NM", zip: "87123", phone: '555-555-7777')
file10 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/pollos.jpeg')
restaurant10.main_photo.attach(io: file10, filename: 'crisp.jpeg')
file10b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/pollos_b.jpeg')
restaurant10.background_photo.attach(io: file10b, filename: 'wings_b.png')

restaurant11 = Restaurant.create!(name: "Bluth Frozen Banana Stand", avg_price: 10, cuisine: "Dessert", description: "Passed down from generation to generation; there's always money in it", capacity: 2, latitude: 33.9, longitude: -117.7, open_time: "12:00", close_time: "22:00", address: "1608 W North Ave", city: "San Diego", state: "CA", zip: "91911", phone: '555-555-2222')
file11 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/bluth.jpeg')
restaurant11.main_photo.attach(io: file11, filename: 'tarboush.jpeg')
file11b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/default_show_background.png')
restaurant11.background_photo.attach(io: file11b, filename: 'default_show_background.png')

restaurant12 = Restaurant.create!(name: "Cafe Tropical", avg_price: 25, cuisine: "American", description: "Serving standard café food, but also specializing in a number options such as Mexican and Mediterranean cuisine", capacity: 100, latitude: 40.7, longitude: -74.0, open_time: "7:00", close_time: "20:00", address: "205 E Houston St", city: "Schitt's Creek", state: "N/A", zip: "10002", phone: '555-555-9999')
file12 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/tropical.jpeg')
restaurant12.main_photo.attach(io: file12, filename: 'katzs.jpeg')
file12b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/default_show_background.png')
restaurant12.background_photo.attach(io: file12b, filename: 'default_show_background.png')

restaurant13 = Restaurant.create!(name: "Kevin?", avg_price: 50, cuisine: "Bar/Club", description: "This place has everything-geeks, sherpas, a Jamaican nurse wearing a shower cap, room after room of broken mirrors, and look over there in the corner. Is that Mick Jagger? No, it's a fat kid on a Slip 'n Slide. His knees look like biscuits.", capacity: 400, latitude: 40.0, longitude: -74.7, open_time: "11:00", close_time: "23:00", address: "N/A", city: "New York", state: "NY", zip: "11211", phone: '555-555-2854')
file13 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/kevin.jpeg')
restaurant13.main_photo.attach(io: file13, filename: 'buffjoes.jpeg')
file13b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/kevin_b.jpeg')
restaurant13.background_photo.attach(io: file13b, filename: 'wings_b.png')

restaurant14 = Restaurant.create!(name: "Pizza Planet", avg_price: 20, cuisine: "Pizza", description: "A kid's favorite place for pizza, games, and prizes! Try your luck and win an alien at... The CLAAAAAAW...!", capacity: 400, latitude: 37.0, longitude: -122.7, open_time: "11:00", close_time: "23:00", address: "112 South St", city: "San Francisco", state: "CA", zip: "94016", phone: '555-444-2224')
file14 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/pizzaplanet.jpg')
restaurant14.main_photo.attach(io: file14, filename: 'pizzaplanet.jpg')
file14b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/pizzaplanet_b.jpeg')
restaurant14.background_photo.attach(io: file14b, filename: 'pizzaplanet_b.jpeg')

restaurant15 = Restaurant.create!(name: "The Drunken Clam", avg_price: 20, cuisine: "Bar/Club", description: "Quahog's local watering hole; giant anthropomorphic fighting chickens not welcome!", capacity: 70, latitude: 41.0, longitude: -74.7, open_time: "11:00", close_time: "23:00", address: "456 East St", city: "Quahog", state: "RI", zip: "02801", phone: '555-345-7895')
file15 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/drunkenclam.jpeg')
restaurant15.main_photo.attach(io: file15, filename: 'drunkenclam.jpeg')
file15b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/drunkenclam_b.jpeg')
restaurant15.background_photo.attach(io: file15b, filename: 'drunkenclam_b.jpeg')

res1 = Reservation.create!(user_id: 3, restaurant_id: 1, date: 'November 15, 2020', time: '8:00 PM', party_size: 3)
res2 = Reservation.create!(user_id: 3, restaurant_id: 2, date: 'November 16, 2020', time: '9:00 PM', party_size: 4)
res3 = Reservation.create!(user_id: 2, restaurant_id: 3, date: 'November 17, 2020', time: '7:00 PM', party_size: 5)

rev1 = Review.create!(user_id: 3, restaurant_id: 1, body: 'I liked it', rating: 4)
rev2 = Review.create!(user_id: 3, restaurant_id: 1, body: 'This place is eh.', rating: 3)
rev3 = Review.create!(user_id: 2, restaurant_id: 1, body: 'Never coming back.', rating: 2)
rev4 = Review.create!(user_id: 3, restaurant_id: 2, body: 'This place is eh.', rating: 3)
rev5 = Review.create!(user_id: 2, restaurant_id: 2, body: 'Never coming back.', rating: 2)