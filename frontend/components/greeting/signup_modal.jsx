import React from "react";

class SignupModal extends React.Component {
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

    }


    handleSubmit(e) {
        e.preventDefault();
        const { signup } = this.props;
        const { first_name, last_name, email, password, primary_dining_location } = this.state;
        signup({ first_name, last_name, email, password, primary_dining_location });
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            primary_dining_location: ''
        });
    }

    // closeForm(event){
    //     let signupModal = document.querySelector(".signup-form-modal");
    //     if (event.target == signupModal) {
    //         signupModal.style.display = "none";
    //     }
        
    // }

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
                    <li key={`sign up error #${id}`}>
                        {err}
                    </li>
                ))}
            </ul>
        )
    }



    render(){
        return (
            <div className="signup-form-modal" onClick={this.closeForm}>
                <h1 className="welcome">Welcome to Reztaurant!</h1>
                <div>{this.renderErrors()}</div>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.first_name} placeholder="First Name *" onChange={this.update('first_name')}></input>
                    {/* <div>{this.props.errors[0]}</div> */}
                    <input type="text" value={this.state.last_name} placeholder="Last Name *" onChange={this.update('last_name')}></input>
                    <input type="text" value={this.state.email} placeholder="Email *" onChange={this.update('email')}></input>
                    <input type="password" value={this.state.password} placeholder="Password *" onChange={this.update('password')} autoComplete="password"></input>
                    <input type="text" value={this.state.primary_dining_location} placeholder="Primary Dining Location *" onChange={this.update('primary_dining_location')}></input>
                    <button className="account-submit-button" type='submit'>Create Account</button>
                </form>
            </div>
        )
    }
}

export default SignupModal;