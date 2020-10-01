
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

user1 = User.create!(first_name: 'Andrew', last_name: 'Zessar', email: 'blah@gmail.com', primary_dining_location: 'Chicago', password: 'password')
user2 = User.create!(first_name: 'bob', last_name: 'bob', email: 'bob', primary_dining_location: 'Chicago', password: 'password')
user3 = User.create!(first_name: 'Gordon', last_name: 'Ramsay', email: 'gramsay@gmail.com', primary_dining_location: 'London', password: 'rubbish')
user4 = User.create!(first_name: 'mike', last_name: 'mike', email: 'mike@gmail.com', primary_dining_location: 'here', password: 'password')

default_show_background = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/default_show_background.png')

restaurant1 = Restaurant.create!(name: "Joe's Seafood, Prime Steak & Stone Crab", avg_price: 70, cuisine: "Steakhouse", description: "Chicago's finest steakhouse, delicious stone crab, with a southern-style ambiance.", capacity: 300, latitude: 41.9, longitude: -87.6, open_time: "11:30", close_time: "21:00", address: "60 E Grand Ave", city: "Chicago", state: "IL", zip: "60611")
file1 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/steaks.jpeg')
file1b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/joes_b.png')
restaurant1.main_photo.attach(io: file1, filename: 'steaks.jpeg')
restaurant1.background_photo.attach(io: file1b, filename: 'joes_b.png')

restaurant2 = Restaurant.create!(name: "Wiener's Circle", avg_price: 10, cuisine: "American", description: "Your friendly neighborhood hot dog stand; get some dogs, fries, and get out.", capacity: 30, latitude: 41.9, longitude: -87.6, open_time: "11:00", close_time: "23:00", address: "2622 N Clark St", city: "Chicago", state: "IL", zip: "60614")
file2 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/wieners.png')
restaurant2.main_photo.attach(io: file2, filename: 'wieners.png')
restaurant2.background_photo.attach(io: default_show_background, filename: 'default_show_background.png')

restaurant3 = Restaurant.create!(name: "Jing Fong", avg_price: 20, cuisine: "Chinese", description: "Serving New York's tastiest dim sum and other Chinese delicacies", capacity: 300, latitude: 40.7, longitude: -74.0, open_time: "10:00", close_time: "20:00", address: "20 Elizabeth St", city: "New York", state: "NY", zip: "10013")
file3 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/jingfong.jpeg')
restaurant3.main_photo.attach(io: file3, filename: 'jingfong.jpeg')
file3b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/minghin_b.png')
restaurant3.background_photo.attach(io: file3b, filename: 'minghin_b.png')

restaurant4 = Restaurant.create!(name: "Small Cheval", avg_price: 15, cuisine: "American", description: "Delicious burgers, fries, and shakes", capacity: 100, latitude: 41.9, longitude: -87.6, open_time: "10:00", close_time: "20:00", address: "1345 N Wells St", city: "Chicago", state: "IL", zip: "60610")
file4 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/smallcheval.jpeg')
restaurant4.main_photo.attach(io: file4, filename: 'smallcheval.jpeg')
file4b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/bar_b.png')
restaurant4.background_photo.attach(io: file4b, filename: 'bar_b.png')

restaurant5 = Restaurant.create!(name: "Once Upon A Bagel", avg_price: 12, cuisine: "Delicatessen", description: "A staple of Highland Park, combining the best features of Jewish and Mexican cuisine", capacity: 100, latitude: 42.2, longitude: -87.8, open_time: "10:00", close_time: "20:00", address: "1888 1st St", city: "Highland Park", state: "IL", zip: "60035")
file5 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/ouab.jpeg')
restaurant5.main_photo.attach(io: file5, filename: 'ouab.jpeg')
file5b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/default_show_background.png')
restaurant5.background_photo.attach(io: file5b, filename: 'default_show_background.png')

restaurant6 = Restaurant.create!(name: "Ming Hin", avg_price: 20, cuisine: "Chinese", description: "The crown jewel of Chicago's Chinatown; stop by for dim sum after 9pm!", capacity: 200, latitude: 41.8, longitude: -87.6, open_time: "10:00", close_time: "20:00", address: "2168 S Archer Ave", city: "Chicago", state: "IL", zip: "60616")
file6 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/minghin.jpeg')
restaurant6.main_photo.attach(io: file6, filename: 'minghin.jpeg')
file6b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/minghin_b.png')
restaurant6.background_photo.attach(io: file6b, filename: 'minghin_b.png')

restaurant7 = Restaurant.create!(name: "Cafe Ba-Ba-Reeba", avg_price: 40, cuisine: "Tapas", description: "Chicago's hottest neighborhood spot for tapas, drinks, and friends", capacity: 200, latitude: 40.7, longitude: -87.6, open_time: "10:00", close_time: "20:00", address: "2024 N Halsted St", city: "Chicago", state: "IL", zip: "60614")
file7 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/tapas.jpeg')
restaurant7.main_photo.attach(io: file7, filename: 'tapas.jpeg')
file7b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/cafe_b.png')
restaurant7.background_photo.attach(io: file7b, filename: 'cafe_b.png')

restaurant8 = Restaurant.create!(name: "Peter Luger's Steak House", avg_price: 100, cuisine: "Steakhouse", description: "The gold standard of New York steaks; cash-only steak icon where old-school waiters serve aged beef in a German beer hall setting.", capacity: 200, latitude: 40.7, longitude: -74.0, open_time: "4:00", close_time: "22:00", address: "178 Broadway", city: "New York", state: "NY", zip: "11211")
file8 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/steaks.jpeg')
restaurant8.main_photo.attach(io: file8, filename: 'steaks.jpeg')
file8b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/joes_b.png')
restaurant8.background_photo.attach(io: file8b, filename: 'joes_b.png')


restaurant9 = Restaurant.create!(name: "Eduardo's Enoteca", avg_price: 30, cuisine: "Italian", description: "Your neighborhood Italian spot for fish, chicken, pasta, pizza, wine, and a good Gold Coast atmposphere", capacity: 80, latitude: 41.9, longitude: -87.6, open_time: "12:00", close_time: "22:00", address: "1212 N Dearborn St", city: "Chicago", state: "IL", zip: "60610")
file9 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/eduardos.jpeg')
restaurant9.main_photo.attach(io: file9, filename: 'eduardos.jpeg')
file9b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/eduardos_b.png')
restaurant9.background_photo.attach(io: file9b, filename: 'eduardos_b.png')

restaurant10 = Restaurant.create!(name: "Crisp", avg_price: 15, cuisine: "Korean", description: "Counter-service Korean with fried chicken, burritos, vegetable bowls & kimchee (delivery available).", capacity: 50, latitude: 41.9, longitude: -87.6, open_time: "12:00", close_time: "22:00", address: "3000 N Broadway", city: "Chicago", state: "IL", zip: "60657")
file10 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/crisp.jpeg')
restaurant10.main_photo.attach(io: file10, filename: 'crisp.jpeg')
file10b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/wings_b.png')
restaurant10.background_photo.attach(io: file10b, filename: 'wings_b.png')

restaurant11 = Restaurant.create!(name: "Tarboush Mediterranean Grill", avg_price: 12, cuisine: "Mediterranean", description: "Relaxed counter-serve nook dispensing falafel, kebab plates, gyros & other Mediterranean standards.", capacity: 30, latitude: 41.9, longitude: -87.7, open_time: "12:00", close_time: "22:00", address: "1608 W North Ave", city: "Chicago", state: "IL", zip: "60622")
file11 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/tarboush.jpeg')
restaurant11.main_photo.attach(io: file11, filename: 'tarboush.jpeg')
file11b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/default_show_background.png')
restaurant11.background_photo.attach(io: file11b, filename: 'default_show_background.png')

restaurant12 = Restaurant.create!(name: "Katz's Delicatessen", avg_price: 16, cuisine: "Delicatessen", description: "No-frills deli with theatrically cranky service serving mile-high sandwiches since 1888.", capacity: 200, latitude: 40.7, longitude: -74.0, open_time: "7:00", close_time: "20:00", address: "205 E Houston St", city: "New York", state: "NY", zip: "10002")
file12 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/katzs.jpeg')
restaurant12.main_photo.attach(io: file12, filename: 'katzs.jpeg')
file12b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/default_show_background.png')
restaurant12.background_photo.attach(io: file12b, filename: 'default_show_background.png')

restaurant13 = Restaurant.create!(name: "Buffalo Joe's", avg_price: 12, cuisine: "American", description: "Area chain outlet dishing Buffalo wings & cheeseburgers in a straightforward setting.", capacity: 150, latitude: 42.0, longitude: -87.7, open_time: "11:00", close_time: "20:00", address: "812 Clark St", city: "Evanston", state: "IL", zip: "60201")
file13 = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/buffjoes.jpeg')
restaurant13.main_photo.attach(io: file13, filename: 'buffjoes.jpeg')
file13b = URI.open('https://reztaurant-seeds.s3.us-east-2.amazonaws.com/wings_b.png')
restaurant10.background_photo.attach(io: file13b, filename: 'wings_b.png')
>>>>>>> fixing_images
