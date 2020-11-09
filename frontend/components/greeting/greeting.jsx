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
                    <Link to={{
                        pathname: "/restaurants",
                        // state: {
                        //     searchWord: this.state.searchWord,
                        //     resDate: this.state.resDate,
                        //     resTime: this.state.resTime,
                        //     partySize: this.state.partySize
                        // },
                    }}>
                        <img className="search-mag" src={window.mag_glass} />
                    </Link>
                </div>
                {
                    this.state.showDrop
                    ? (
                        <div className="user-dropdown" ref={(element) => {
                            this.dropdownMenu = element;
                        }}>
                            <div className="drop-greeting">Hello, {currentUser.first_name} {currentUser.last_name}!</div>
                            <div>My Reservations</div>
                            <div className="drop-signout" onClick={this.props.signout}>Signout</div>
                        </div>
                    )
                        : (
                            null
                        )
                }
                
            </div>
        )
    };

    sessionButtons() {
        return (
            <div className="signup-signin-search">

                <button className="demo-signin-button" onClick={this.handleDemoSubmit}>Demo user enter here</button>
                <button className="signup-button" onClick={() => this.props.openModal('signup')}>Sign up</button>
                <button className="signin-button" onClick={() => this.props.openModal('signin')}>Sign in</button>
                <Link to={{
                    pathname: "/restaurants",
                    // state: {
                    //     searchWord: this.state.searchWord,
                    //     resDate: this.state.resDate,
                    //     resTime: this.state.resTime,
                    //     partySize: this.state.partySize
                    // },
                }}>
                    <div className="search-mag-div">
                        <img className="search-mag" src={window.mag_glass} />
                    </div>
                </Link>
            </div>
        )
    };



    render() {
        return (
            <div className="header-nav">
                <div>
                    <Link to="/"><img className="logo" src={window.logo} /></Link>
                </div>
                {this.props.currentUser ? this.userButtons() : this.sessionButtons()}
            </div>
        )
    }
}

export default GreetingHeader;


