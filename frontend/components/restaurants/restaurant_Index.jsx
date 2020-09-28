import React from 'react';

const RestaurantIndex = ({ restaurants }) => {
    console.log("fdsadfadfsfadsafd")
    return(
        <div className="test">
            <h1>Restaurants: </h1>
            <section>{restaurants}</section>
        </div>
    )
};

export default RestaurantIndex;

// class RestaurantIndex extends React.Component {

//     constructor(props) {
//         super(props);
//     }


//     render() {
//         return (
//             <div>
//                 <div className="testtesttest">testtestatest</div>
//                 <div>{ this.props.restaurants }</div>
//             </div>
//         )
//     }
// }

// export default RestaurantIndex;