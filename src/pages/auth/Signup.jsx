import React, { useState } from "react";
import { signup } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../../utils/paths";
import * as USER_HELPERS from "../../utils/userToken";
import Form from '../../components/Forms/Form';
import Alert from '@mui/material/Alert';

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: <Alert severity="success">"Signup was unsuccessful! Please check the console."</Alert>,
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate("/");
    });
  }

  return (
    <div className="Form">
      
      <form onSubmit={handleFormSubmission} className="auth__form">
      <Form type={"Sign Up"}/>       
        {/*<input
          id="input-username"
          type="text"
          name="username"
          placeholder="Text"
          value={username}
          onChange={handleInputChange}
          required
        />

        
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
  />*/}
        
        {error && (
        
          <div className="error-block">
            <Alert severity="error">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
            </Alert>
          </div>
        
        )}
        </form>
    </div>
  );
}
