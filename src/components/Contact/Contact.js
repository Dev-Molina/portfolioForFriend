import React from 'react';
import { Form,  Col, Button } from 'react-bootstrap';

class Contact extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.state = { 
            validated: false ,
            first:"",
            last:"",
            subject:"",
            email:"",
            msg:""
        };
    }
  
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    onFirstChange = (event) => {
        this.setState({first: event.target.value})
    }
    onLastChange = (event) => {
        this.setState({last: event.target.value})
    }
    onSubjectChange = (event) => {
        this.setState({subject: event.target.value})
    }
    onMsgChange = (event) => {
        this.setState({msg: event.target.value})
    }

    onValidatedSubmit = () => {
        fetch('http://localhost:3001/email', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                subject: this.state.subject,
                first:this.state.first,
                last: this.state.last,
                msg: this.state.msg
            })
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
    }

    //TODO: Fix validation, give response div on success/fail
    handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        this.setState({ validated: true });
        
      }
      
    }
  
    render() {
      const { validated } = this.state;
      return (
        <div>
            <h1>Contact Me</h1>
            <Form
            noValidate
            validated={validated}
            method='POST'
            onSubmit={e => this.handleSubmit(e)}
            >
            <Form.Row>
                <Form.Group as={Col}  controlId="validationCustom01">
                <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    onChange={this.onFirstChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    onChange={this.onLastChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}  controlId="validationCustom04">
                    <Form.Control 
                        type="text" 
                        placeholder="Subject" 
                        onChange={this.onSubjectChange}
                        required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}  controlId="validationCustom03">
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        required
                        onChange={this.onEmailChange} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
             </Form.Row>
            <Form.Group controlId="validationCustom05">
                <Form.Control 
                    as="textarea" 
                    rows="3" 
                    placeholder="Message"
                    onChange={this.onMsgChange}
                    />\
            </Form.Group>
            <Button
                type='submit'
                style={{color:'white'}}
                variant="outline-secondary" 
                size="lg"
                >Submit
            </Button>
            </Form>
        </div>
      );
    }
  }
  
export default Contact;