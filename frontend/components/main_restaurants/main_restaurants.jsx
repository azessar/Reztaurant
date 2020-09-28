import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class MainRestaurants extends React.Component {

    render() {
        return (   
            <div className="restaurant-cards">

                <div className="category-header">
                    Get it delivered
                </div>
                <div className="card-row">
                    
                    <Link to="/restaurants" target="_blank">
                        <div className="restaurant-card">
                            <img className="card-image" src={window.tapas} />
                            <div className="card-info">
                                <div className="card-name">Cafe Ba-Ba-Reeba 1</div>
                                <div className="card-reviews-and-stars">
                                    <div className="stars">
                                        <img className="star" src={window.star} />
                                        <img className="star" src={window.star} />
                                        <img className="star" src={window.star} />
                                        <img className="star" src={window.star} />
                                    </div>
                                    <div className="reviews">6651 reviews</div>
                                </div>
                                <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                                <div className="booked-times">Booked 115 times today</div>
                            </div>
                        </div>
                    </Link>

                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                </div>
                <div className="category-header">
                    Trendy tapas
                </div>
                <div className="card-row">
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img className="card-image" src={window.tapas} />
                        <div className="card-info">
                            <div className="card-name">Cafe Ba-Ba-Reeba</div>
                            <div className="card-reviews-and-stars">
                                <div className="stars">
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                    <img className="star" src={window.star} />
                                </div>
                                <div className="reviews">6651 reviews</div>
                            </div>
                            <div className="cuisine-price-area">Tapas / Small Plates - $$ - Linc...</div>
                            <div className="booked-times">Booked 115 times today</div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default MainRestaurants;