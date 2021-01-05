import React, { useState } from 'react';

import Card from 'emerald-ui/lib/Card';
import Checkbox from 'emerald-ui/lib/Checkbox';
import Button from 'emerald-ui/lib/Button';

import Container from 'emerald-ui/lib/Container';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Row';

import { useForm } from '../../hooks/useForm';
import { Input } from '../Input/Input';
import { Modal } from '../Modal/Modal';

import {
  emailValidation,
  fieldRequired,
  phoneValidation
} from '../../utils/validations';

export const ContactForm = () => {
  const [
    { email, firstName, lastName, message, phone, news },
    handleInputChange,
    handleCheckbox
  ] = useForm({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
    phone: '',
    news: false
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handlerSubmit = event => {
    event.preventDefault();
    if (
      Object.values({ email, firstName, lastName, message, phone }).includes('')
    ) {
      setIsSubmit(true);
      return;
    }
    setShowModal(true);
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
              validator={fieldRequired}
              isSubmit={isSubmit}
            />
            <Input
              value={lastName}
              onChange={handleInputChange}
              label="Last name"
              name="lastName"
              validator={fieldRequired}
              isSubmit={isSubmit}
            />
          </Row>
          <Row>
            <Input
              value={email}
              onChange={handleInputChange}
              type="email"
              label="Email"
              name="email"
              validator={emailValidation}
              isSubmit={isSubmit}
            />
            <Input
              value={phone}
              onChange={handleInputChange}
              label="Phone number"
              name="phone"
              type="phone"
              validator={phoneValidation}
              isSubmit={isSubmit}
            />
          </Row>
          <Row>
            <Input
              value={message}
              onChange={handleInputChange}
              name="message"
              label="Message"
              textarea
              validator={fieldRequired}
              isSubmit={isSubmit}
            />
          </Row>
          <Checkbox
            checked={news}
            onChange={handleCheckbox}
            className="pl-0"
            name="news"
            label="Send me emails about breaking news and promotions."
          />
          <Col className="container-button mt-5">
            <Button type="submit" color="info">
              Submit form
            </Button>
          </Col>
        </Container>
      </Card>
      <>
        <Modal
          showProp={showModal}
          toggleModalProp={setShowModal}
          data={{ email, firstName, lastName, message, phone, news }}
        />
      </>
    </form>
  );
};
