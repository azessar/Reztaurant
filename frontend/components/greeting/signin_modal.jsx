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
            <div className="signin-form-modal">
                <h1>Please sign in</h1>
                <div>{this.renderErrors()}</div>
                <form className="signin-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}></input>
                    <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} autoComplete="password"></input>
                    <button type='submit'>Sign in</button>
                    <form className="demo-signin" onSubmit={this.handleDemoSubmit}>
                        <button type='submit'>Demo user enter here</button>
                    </form>
                </form>
               
            </div>
        )
    }
}

export default SigninModal;