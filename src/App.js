import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Button, Col, Form, Row } from "reactstrap";

export default function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div id="App" className="">
      <h1 className="p-3 m-3 bg-primary text-white themed-container shadow rounded-pill text-center">
        Credit Card Payment
      </h1>
      <hr />
      <Row className="themed-container border rounded-pill p-5 m-5">
        <Col xs={5} className="m-0 p-0">
          <Cards
            number={number}
            name={name}
            expiry={date}
            cvc={cvc}
            focused={focus}
          />
        </Col>
        <Col xs={1} className="m-0 p-0"></Col>
        <Col xs={5} className="m-0 p-0">
          <Form>
            <Row className="p-0 m-0">
              <input
                className="form-control m-1 p-2"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </Row>
            <Row className="p-0 m-0">
              <input
                className="form-control m-1 p-2"
                type="tel"
                name="number"
                placeholder="Card Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </Row>
            <Row className="p-0 m-0">
              <Col xs={7} className="m-0 p-0">
                <input
                  className="form-control m-1 p-2"
                  type="text"
                  name="date"
                  placeholder="MM/YY"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </Col>
              <Col xs={1} className="m-0 p-0" />
              <Col xs={3} className="m-0 p-0">
                <input
                  className="form-control m-1 p-2"
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </Col>
            </Row>
            <hr />
            <Row className="p-0 m-0">
              <Col xs={3} className="m-0 p-0">
                <Button color="success" size="lg" disabled>
                  550$
                </Button>
              </Col>
              <Col xs={6} className="m-0 p-0" />
              <Col xs={3} className="m-0 p-0">
                <Button color="danger" size="lg">
                  Pay Now
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}