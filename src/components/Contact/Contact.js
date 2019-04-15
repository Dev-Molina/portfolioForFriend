import React from 'react';
import { Form,  Col, Button, Card } from 'react-bootstrap';
import './Contact.css'
class Contact extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.state = { 
            validated: false ,
            success:false,
            first:"",
            last:"",
            subject:"",
            email:"",
            msg:""
        };
    }
  
    updateSuccessState = (response) => {
        this.setState({success: response})
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
        const {email, subject, first, last, msg} = this.state;
        if(email && subject && first && last && msg) {
            console.log('sending');
            fetch('https://sleepy-refuge-68921.herokuapp.com/email', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email:email,
                    subject:subject,
                    first:first,
                    last:last,
                    msg:msg
                })
            })
            .then(response => response.json())
            .then(res => this.updateSuccessState(res))
        }
    }

    //TODO: Fix validation, give response div on success/fail
    isValid(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          console.log(form.checkValidity())
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        this.setState({ validated: true });
      }
      this.onValidatedSubmit();
    }
  
    render() {
      const { validated } = this.state;
      return (
        <Card style={{width:'50rem'}} className='contact'>
            <Card.Title>Contact Me</Card.Title>
             {this.state.success === false
            ? <Form
            noValidate
            validated={validated}
            method='POST'
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
                    />
            </Form.Group>
            <Button 
                onClick={e => this.isValid(e)}
                style={{color:'white'}}
                variant="outline-secondary" 
                size="lg"
                disabled={this.state.success}
                >Submit
            </Button>
            </Form>
            : (
                <p>Sent! Will be in touch with you shortly.</p>
            )
             }
        </Card>
      );
    }
  }
  
export default Contact;