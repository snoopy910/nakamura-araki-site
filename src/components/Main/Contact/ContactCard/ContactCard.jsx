import React from "react";
import {
  CardContainer,
  CardWrap,
  CardContent,
  CardForm,
  CardHeader,
  CardText,
} from "./ContactCardStyles";
import ContactForm from "../ContactForm/ContactForm";

const ContactCard = () => {
  return (
    <CardContainer>
      <CardWrap>
        <CardContent>
          <CardHeader>Contact Me</CardHeader>
          <CardText>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how I can help your business grow. If I am
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </CardText>
        </CardContent>
        <CardForm>
          <ContactForm />
        </CardForm>
      </CardWrap>
    </CardContainer>
  );
};

export default ContactCard;
