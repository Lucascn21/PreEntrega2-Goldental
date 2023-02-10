import React from "react";
import Container from "@mui/material/Container";
import { Form } from "../../components/Form/Form";
import "./Contact.scss";

export const Contact = React.memo(() => {
  return (
    <Container id="contact-main" component="main">
      <Form></Form>
    </Container>
  );
});
