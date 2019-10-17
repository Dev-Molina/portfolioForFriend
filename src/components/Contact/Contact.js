import React from "react";
import { Form, Col, Button, Card, Spinner } from "react-bootstrap";
import "./Contact.css";
import { SocialIcon } from "react-social-icons";
import Particles from "react-particles-js";

class Contact extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      validated: false,
      success: false,
      submit: false,
      name: "",
      subject: "",
      email: "",
      msg: ""
    };
  }

  updateSuccessState = response => {
    this.setState({ success: response });
  };
  onSubmit = e => {
    this.setState({ submit: e });
  };
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  onNameChange = event => {
    this.setState({ name: event.target.value });
  };
  onSubjectChange = event => {
    this.setState({ subject: event.target.value });
  };
  onMsgChange = event => {
    this.setState({ msg: event.target.value });
  };

  onValidatedSubmit = () => {
    const { email, subject, name, msg } = this.state;
    if (email && subject && name && msg) {
      this.onSubmit(true);
      console.log("sending");
      fetch("https://rubayth.herokuapp.com/email", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          subject: subject,
          name: name,
          msg: msg
        })
      })
        .then(response => response.json())
        .then(res => this.updateSuccessState(res));
    }
  };

  //TODO: Fix validation, give response div on success/fail
  isValid(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log(form.checkValidity());
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.setState({ validated: true });
    }
    this.onValidatedSubmit();
  }

  render() {
    const { validated } = this.state;
    return (
      <section className="contact">
        <Particles className="particles-js" />
        <div className="container-fluid">
          <div className="row full-height align-items-center ">
            <div className="col-12">
              <Card className="contact-card animated fadeInUp">
                <Card.Title>
                  <h1>Contact Me</h1>
                </Card.Title>
                <div>
                  <SocialIcon
                    className="icons"
                    url="https://github.com/rubayth"
                    bgColor="white"
                  />
                  <SocialIcon
                    className="icons"
                    url="https://www.linkedin.com/in/rubayth/"
                    bgColor="white"
                  />
                  <SocialIcon
                    className="icons"
                    url="mailto:rubayth.haque@gmail.com"
                    bgColor="white"
                  />
                </div>
                <br />

                {this.state.submit === false ? (
                  <Form noValidate validated={validated} method="POST">
                    <Form.Row>
                      <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Name"
                          onChange={this.onNameChange}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="validationCustom04">
                        <Form.Control
                          type="text"
                          placeholder="Subject"
                          onChange={this.onSubjectChange}
                          required
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} controlId="validationCustom03">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          required
                          onChange={this.onEmailChange}
                        />
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
                      style={{ color: "white" }}
                      variant="outline-primary"
                      size="lg"
                      disabled={this.state.success}
                    >
                      Submit
                    </Button>
                  </Form>
                ) : this.state.success === false ? (
                  <div>
                    <Spinner
                      className="spinner"
                      animation="border"
                      variant="light"
                      role="status"
                    >
                      <span className="sr-only">Sending...</span>
                    </Spinner>
                    <p style={{ color: "white" }}>Sending...</p>
                  </div>
                ) : (
                  <p style={{ color: "white" }}>
                    Sent! Will be in touch with you shortly.
                  </p>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
