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

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Signin Form
                    <br></br>
                    Enter email*
                    <input type="text" value={this.state.email} onChange={this.update('email')}></input>
                    <br></br>
                    Enter password*
                    <input type="password" value={this.state.password} onChange={this.update('password')} autoComplete="password"></input>
                    <button type='submit'>Sign in</button>
                </form>
                <br></br>
                this is for demo user:
                <form onSubmit={this.handleDemoSubmit}>
                    <button type='submit'>Demo user enter here</button>
                </form>
            </div>
        )
    }
}

export default SigninModal;