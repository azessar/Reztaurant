# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
user1 = User.create([{first_name: 'Andrew'}, {last_name: 'Zessar'}, {email: 'blah@gmail.com'}, {primary_dining_location: 'Chicago'}, {password: 'password'}])
user2 = User.create([{first_name: 'bob'}, {last_name: 'bob'}, {email: 'bob'}, {primary_dining_location: 'Chicago'}, {password: 'password'}])
user3 = User.create([{first_name: 'Gordon'}, {last_name: 'Ramsay'}, {email: 'gramsay@gmail.com'}, {primary_dining_location: 'London'}, {password: 'rubbish'}])