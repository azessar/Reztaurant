import React from 'react';
import { Link } from 'react-router-dom';

class GreetingHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            primary_dining_location: '',
            showDrop: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.userButtons = this.userButtons.bind(this);
        this.sessionButtons = this.sessionButtons.bind(this);
        this.showDrop = this.showDrop.bind(this);
        this.closeDrop = this.closeDrop.bind(this);
    }

    showDrop(event) { //Thank you to: https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
        event.preventDefault();

        this.setState({ showDrop: true }, () => {
            document.addEventListener('click', this.closeDrop);
        });
    }

    closeDrop() { //Thank you to: https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showDrop: false }, () => {
                document.removeEventListener('click', this.closeDrop);
            });
        }
        
    }

    handleSubmit(e) {
        e.preventDefault();
        const { signin } = this.props;
        const { first_name, last_name, email, password, primary_dining_location } = this.state;
        signin({ first_name, last_name, email, password, primary_dining_location });
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            primary_dining_location: ''
        });
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const { signin } = this.props;
        const { first_name, last_name, email, password, primary_dining_location } = this.state;
        const demoUser = { first_name: "Gordon", last_name: "Ramsay", email: "gramsay@gmail.com", password: "rubbish", primary_dining_location: "London" }
        signin(demoUser);
        e.target.reset();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

   

    userButtons() {
        let currentUser = this.props.currentUser;
        return (
            <div className="user-buttons">
                <button className="signout-button" onClick={this.props.signout}>Sign out</button>
                <div className="user-icons">
                    <img className="signin-guy" src={window.signin_guy} onClick={this.showDrop}/>
                    <img className="reservation-box" src={window.reservation_box} />
                    <img className="alert-bell" src={window.alert_bell} />
                    <img className="search-mag" src={window.mag_glass} />
                </div>
                {
                    this.state.showDrop
                    ? (
                        <div className="user-dropdown" ref={(element) => {
                            this.dropdownMenu = element;
                        }}>
                            <div className="drop-greeting">Hello, {currentUser.first_name} {currentUser.last_name}!</div>
                                <div className="drop-signout" onClick={this.props.signout}>Sign out</div>
                        </div>
                    )
                        : (
                            null
                        )
                }
                
            </div>
        )
    };

    // signupModalAppears(){
    //     let signupModal = document.querySelector(".signup-form-modal");
    //     signupModal.style.display = "flex";

    // }

    // signinModalAppears() {
    //     let signinModal = document.querySelector(".signin-form-modal");
    //     signinModal.style.display = "flex";
    // }

    sessionButtons() {
        return (
            <div className="signup-signin-search">

                <button className="demo-signin-button" onClick={this.handleDemoSubmit}>Demo user enter here</button>
                <button className="signup-button" onClick={() => this.props.openModal('signup')}>Sign up</button>
                <button className="signin-button" onClick={() => this.props.openModal('signin')}>Sign in</button>
                <div className="search-mag-div">
                    <img className="search-mag" src={window.mag_glass} />
                </div>
            </div>
        )
    };



    render() {
        return (
            <div className="header-nav">
                <div>
                    <Link to="/"><img className="logo" src={window.logo} /></Link>
                    <img className="location-dropdown" src={window.location_dropdown} />
                </div>
                {this.props.currentUser ? this.userButtons() : this.sessionButtons()}
            </div>
        )
    }
}

export default GreetingHeader;



// const GreetingHeader = ( { currentUser, signout, signin, signup } ) => {
//     // const firstName = currentUser.first_name;
//     const userButtons = () => {
//         return (
//             <div>
//                 Hello (user)!
//                 <button className="signout-button" onClick={signout}>Sign out</button>
//             </div>
//         )
//     };

//     const sessionButtons = () => {
//         return (
//             <div>
//                 <button className="signup-button" onClick={signup}>Sign up</button>
//                 <button className="signin-button" onClick={signin}>Sign in</button>
//             </div>
//         )
//     };

//     return (
//         <nav className="header-nav">
//             <nav className="logo-and-location">
//                 <div className="open-table-logo">OpenTable logo</div>
//                 <div>Location dropdown</div>
//             </nav>

//             <nav className="signup-signin-search">
//                 {currentUser ? userButtons() : sessionButtons()}
//                 <div>Search</div>
//             </nav>
//         </nav>
//         );
// }

// export default GreetingHeader;

{/* <button className="demo-signin-button" onClick={this.handleDemoSubmit}>Demo user enter here</button>
    <button className="signup-button" onClick={this.signupModalAppears}>Sign up</button>
    <button className="signin-button" onClick={this.signinModalAppears}>Sign in</button> */}