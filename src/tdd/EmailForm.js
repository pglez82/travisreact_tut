import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled:false,
            email:'',
            remail:'',
            welcomemessage:''
        };
    }

    changeEmail(e) {
        const email = e.target.value;
        this.setState({email: email, enabled: email === this.state.remail});
    }
   
    changeRemail(e) {
        const remail = e.target.value;
        this.setState({remail: remail, enabled: remail === this.state.email});
    }


    //Simulate the user registration. In a real application this will
    //call an api and we will have to mock the call using jest.mock
    registerUser(email){
        if (email==='alreadyregistered@test.com') //This user is already registered
            return false
        else
            return true //Everything went smooth
    }


    submitForm(e)
    {
        e.preventDefault()
        //Add the user to the database
        if (this.registerUser(this.state.email))
            this.setState({welcomemessage:'The user '+this.state.email+' has been registered!'})
        else
            this.setState({welcomemessage:'ERROR: The user '+this.state.email+' is already registered!'})
    }

    render()
    {
        return(
            <Form onSubmit={this.submitForm.bind(this)}>
                <Form.Control type="text" name="email"
                                placeholder="Input email"
                                aria-label="email-input"
                                onChange={this.changeEmail.bind(this)} value={this.state.email}/>
                <Form.Control type="text"
                                name="remail"
                                placeholder="Input remail"
                                aria-label="remail-input"
                                onChange={this.changeRemail.bind(this)} value={this.state.remail}/>
                <Button variant="primary" type="submit" disabled={!this.state.enabled}>Submit</Button>
                <div>
                    <span hidden={this.state.welcomemessage===''}>{this.state.welcomemessage}</span>
                </div>
            </Form>
        )
    }
}
export default EmailForm;