import React from "react";
import { closeModal } from "../../actions/modal_actions";

class SigninModal extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            primary_dining_location: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);

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

    renderErrors() {
        const errorArray = Array.from(this.props.errors);
        return (
            <ul>
                {errorArray.map((err, id) => (
                    <li key={`signin error #${id}`}>
                        {err}
                    </li>
                ))}
            </ul>
        )
    }

    renderError(num){
        const errors = Array.from(this.props.errors);
        const error = errors[num];
        return (
            <li>
                {error}
            </li>
        )
    }


    render(){
        return (
            <div className="signin-form-modal">
                <h1 className="welcome">Please sign in</h1>
                <div>{this.renderErrors()}</div>
                <form className="signin-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}></input>
                    {/* {this.renderError(1)} */}
                    <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} autoComplete="password"></input>
                    {/* {this.renderError(2)} */}
                    <button className="account-submit-button" type='submit' >Sign In</button>
                </form>
                <form className="demo-signin" onSubmit={this.handleDemoSubmit}>
                    <button type='submit'>Demo user enter here</button>
                </form>
            </div>
        )
    }
}

export default SigninModal;