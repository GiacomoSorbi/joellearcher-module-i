import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  const [userData, setUserData] = useState({});
  const onChangeInput = event =>
    setUserData({ ...userData, [event.target.id]: event.target.value });
  const onFormSubmit = event => {
    event.preventDefault();
    console.log(event.target);
  };
  const validateForm = () => {
    return (
      userData.password.length && userData.password === userData.confirmPassword
    );
  };

  return (
    <div className="app">
      <Form onSubmit={validateForm() ? onFormSubmit : null}>
        <input
          id="name"
          label="Your name:"
          onChange={onChangeInput}
          type="text"
          value={userData.name}
        />
        <input
          id="email"
          label="Your email:"
          onChange={onChangeInput}
          type="email"
          value={userData.enail}
        />
        <input
          id="password"
          label="Your password:"
          onChange={onChangeInput}
          type="password"
          value={userData.password}
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
