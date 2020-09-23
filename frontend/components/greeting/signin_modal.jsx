import React from "react";

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
    }

    handleSubmit(e) {
        e.preventDefault();
        const { signin } = this.props;
        const { first_name, last_name, email, password, primary_dining_location } = this.state;
        signup({ first_name, last_name, email, password, primary_dining_location })
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render(){
        return (
            <div>
                hi can you see this i'm signin modal
                <form onSubmit={this.handleSubmit}>
                    Signup Form
                    <br></br>
                    Enter email*
                    <input type="text" value={this.state.email} onChange={this.update('email')}></input>
                    <br></br>
                    Enter password*
                    <input type="password" value={this.state.password} onChange={this.update('password')}></input>
                    <button type='submit'>Sign up</button>
                </form>
            </div>
        )
    }
}

export default SigninModal;