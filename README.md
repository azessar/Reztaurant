# README

Reztaurant is a functional clone of OpenTable.com, allowing users to search restaurants, book (fake) reservations, and leave reviews. 
You can find Reztaurant here: https://reztaurant1.herokuapp.com/#/
You can find the real OpenTable here: https://www.opentable.com/start/home

## Technologies
Reztaurant's backend was built with Ruby on Rails, and the frontend was built with JavaScript and React/Redux. The database is supported by AWS S3.

## Functionality
Users can signup/signin in the top right of the splash page
[![Screen-Shot-2020-10-02-at-8-34-52-AM.png](https://i.postimg.cc/Kv98s4d6/Screen-Shot-2020-10-02-at-8-34-52-AM.png)](https://postimg.cc/KRMb1ccf)

making a functional signin/signup modal appear:
[![Screen-Shot-2020-10-02-at-8-35-15-AM.png](https://i.postimg.cc/BZpSXXQj/Screen-Shot-2020-10-02-at-8-35-15-AM.png)](https://postimg.cc/w3t8rxNz)

Without proper signup/signin credentials, user errors will render on the screen:
[![Screen-Shot-2020-10-02-at-8-50-21-AM.png](https://i.postimg.cc/5yVD3q4w/Screen-Shot-2020-10-02-at-8-50-21-AM.png)](https://postimg.cc/5YsP9zF0)

*Users can click on a restaurant-card on the splash page (and soon the search page) 
[![Screen-Shot-2020-10-02-at-8-25-26-AM.png](https://i.postimg.cc/wTkmx6n2/Screen-Shot-2020-10-02-at-8-25-26-AM.png)](https://postimg.cc/mttD8GL1)

that will take them to that restaurant's show page, where that user will be able to book a reservation:
[![Screen-Shot-2020-10-02-at-8-25-40-AM.png](https://i.postimg.cc/W1bJhBvv/Screen-Shot-2020-10-02-at-8-25-40-AM.png)](https://postimg.cc/rK3pHYsn)

* Users will soon be able to search for restaurants based on filtering options from the splash page search section.

## Code snippets
To convert restaurant data into restaurant-cards, I mapped restaurants in as a prop from my restaurant index container to my restaurant index component, where I was then able to map the data into an HTML/CSS formatted block:
Restaurant Index Container:
```
const mSTP = (state, ownProps) => {
    return {
        restaurants: Object.values(state.entities.restaurants),
        currentUser: state.entities.users[state.session.id]
    }
}
```
Component:
```
{restaurants.map(restaurant => (
                            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                                <div className="restaurant-card">
                                    <img className="card-image" src={restaurant.main_photo} />
                                    <div className="card-info"> ...
```
## Future functionality
* Search and filter features
* Reservation booking
* Functional reviews with average rating scores rendered for each restaurant
