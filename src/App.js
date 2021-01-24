import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Badge,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  Col,
  FormText,
  Row,
  FormFeedback,
  CustomInput,
} from "reactstrap";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const [validation, setValidation] = useState({
    isEmailValidation: false,
    emailClassName: "form-control", // form-control is-invalid
    isPasswordValidation: false,
    passwordClassName: "form-control", // form-control is-invalid
  });
  const onSubmit = (data) => {
    // setCard(data)
    // alert(data);
    console.log(data);
  };
  const [card, setCard] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    securityCode: "",
    amount: "",
  });
  // useEffect(() => {
  //   console.log(card);
  // }, [card]);
  return (
    <div className="App">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row form>
          <Col xs={2}>
            <Label for="idEmail" sm={2}>
              Email
            </Label>
          </Col>
          <Col xs={6}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <input
                autoFocus
                className={validation.emailClassName}
                type="email" // type="text"
                name="nameEmail"
                id="idEmail"
                placeholder="Write own e-mail address"
                ref={register({ required: "This field can not be empty!!!" })}
              />
              <div class="invalid-feedback">This email used before!!!</div>
              <div class="valid-feedback">This email is available...</div>
              <FormFeedback valid tooltip>
                Sweet! That email is available
              </FormFeedback>
              <FormFeedback tooltip>
                Oh no! That name is already taken
              </FormFeedback>
            </InputGroup>
            {errors.nameEmail && (
              <FormText>{errors.nameEmail.message}</FormText>
            )}
          </Col>
          <Col sm={2}>
            <Button color="link" outline className="m-0 p-0">
              <h4 className="m-0 p-0">
                <Badge color="info" pill className="m-1 p-1">
                  Check me out
                </Badge>
              </h4>
            </Button>
          </Col>
        </Row>{" "}
        <br />
        <Row form>
          <Col sm={2}>
            <Label for="idPassword" sm={2}>
              Password
            </Label>
          </Col>
          <Col sm={9}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText></InputGroupText>
              </InputGroupAddon>
              <input
                className={validation.passwordClassName}
                type="password"
                name="namePassword"
                id="idPassword"
                placeholder="Don't tell anyone your password!!!"
                ref={register({
                  required: "This field can not be empty!!!",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 8 characters!!!",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must be maximum of 12 characters!!!",
                  },
                })}
              />
              <div class="invalid-feedback">Password is wrong!!!</div>
              <div class="valid-feedback">Password is correct</div>
              <FormFeedback valid tooltip>
                Password is correct
              </FormFeedback>
              <FormFeedback tooltip>Password is wrong!!!</FormFeedback>
            </InputGroup>
            {errors.namePassword && (
              <FormText>{errors.namePassword.message}</FormText>
            )}
          </Col>
        </Row>
        <FormGroup>
          <Col col sm={10}>
            <br />
            <FormGroup check>
              <Label check>
                <Row for="ConditionsCheckbox">
                  <CustomInput
                    type="switch"
                    id="ConditionsCustomSwitch"
                    required
                  />{" "}
                  <h6>
                    I agree to <a href="/">Conditions of Use</a> and{" "}
                    <a href="/">Privacy Notice</a>.
                  </h6>
                </Row>
              </Label>
            </FormGroup>{" "}
            <hr />
            <Button color="primary">Sign In</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
