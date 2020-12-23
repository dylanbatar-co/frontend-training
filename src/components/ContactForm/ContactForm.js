import React from 'react';
import Card from 'emerald-ui/lib/Card';
import Checkbox from 'emerald-ui/lib/Checkbox';
import Button from 'emerald-ui/lib/Button';

import Container from 'emerald-ui/lib/Container';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Row';

import { useForm } from '../../hooks/useForm';
import { Input } from '../Input/Input';

export const ContactForm = () => {
  const [
    { email, firstName, lastName, message, phone },
    handleInputChange,
    reset
  ] = useForm({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
    phone: ''
  });

  const handlerSubmit = event => {
    event.preventDefault();
    reset();
  };

  return (
    <form className="contact-form" onSubmit={handlerSubmit}>
      <Card className="pt-5 pb-5">
        <Container>
          <Row>
            <Input
              value={firstName}
              onChange={handleInputChange}
              label="First name"
              name="firstName"
            />
            <Input
              value={lastName}
              onChange={handleInputChange}
              label="Last name"
              name="lastName"
            />
          </Row>
          <Row>
            <Input
              value={email}
              onChange={handleInputChange}
              label="Email"
              name="email"
            />
            <Input
              value={phone}
              onChange={handleInputChange}
              label="Phone number"
              name="phone"
            />
          </Row>
          <Row>
            <Input
              value={message}
              onChange={handleInputChange}
              name="message"
              label="Message"
              textarea
            />
          </Row>
          <Checkbox
            className="pl-0"
            label="Send me emails about breaking news and promotions."
          />
          <Col className="container-button mt-5">
            <Button type="submit" color="info">
              Submit form
            </Button>
          </Col>
        </Container>
      </Card>
    </form>
  );
};
