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
                    <li key={`error ${id}`}>
                        {err}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Signup Form
                    {this.renderErrors()}
                    <br></br>
                    First Name*
                    <input type="text" value={this.state.first_name} onChange={this.update('first_name')}></input>
                    <br></br>
                    Last Name*
                    <input type="text" value={this.state.last_name} onChange={this.update('last_name')}></input>
                    <br></br>
                    Enter email*
                    <input type="text" value={this.state.email} onChange={this.update('email')}></input>
                    <br></br>
                    Enter password*
                    <input type="password" value={this.state.password} onChange={this.update('password')} autoComplete="password"></input>
                    Primary Dining Location*
                    <input type="text" value={this.state.primary_dining_location} onChange={this.update('primary_dining_location')}></input>
                    <br></br>
                    <button type='submit'>Sign up</button>
                </form>
            </div>
        )
    }
}

export default SignupModal;