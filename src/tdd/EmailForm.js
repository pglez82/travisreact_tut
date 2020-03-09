import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled:false,
            email:'',
            remail:''
        };
    }

    thisIsANewFunction()
    {
        console.log("hi")
        console.log("another commit")
    }

    changeEmail(e) {
        const email = e.target.value;
        this.setState({email: email, enabled: email === this.state.remail});
    }
   
    changeRemail(e) {
        const remail = e.target.value;
        this.setState({remail: remail, enabled: remail === this.state.email});
    }

    render()
    {
        return(
            <Form>
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
            </Form>
        )
    }
}
export default EmailForm;